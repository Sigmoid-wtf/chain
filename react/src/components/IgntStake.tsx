/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import BigNumber from "bignumber.js";
import { fromBech32 } from "@cosmjs/encoding";
import cx from "classnames";
import { useEffect, useMemo, useState } from "react";
import { useAddressContext } from "../def-hooks/addressContext";
import { useClient } from "../hooks/useClient";
import { Amount } from "../utils/interfaces";
import { IgntChevronDownIcon, IgntButton, IgntAmountInput } from "@ignt/react-library";
import IgntAmountSelect from "./IgntAmountSelect";
import { useAssets } from "../def-hooks/useAssets";
import Long from "long";
import IgntAmountInputRow from "./IgntAmountInputRow";
import { useAsset } from "../def-hooks/useAsset";
import IgntDenom from "./IgntDenom";

interface IntegratedWalletProps {
  className?: string;
  amount: Amount;
  onChange: (val: string) => void;
}
function IntegratedWallet(props: IntegratedWalletProps) {
  const { balance } = useAsset(props.amount.denom);
  const [value, setValue] = useState<BigNumber>(new BigNumber(props.amount.amount != "" ? props.amount.amount : 0));
  useEffect(() => {
    setValue(new BigNumber(props.amount.amount != "" ? props.amount.amount : 0));
  }, [props.amount.amount]);
  const hasEnoughBalance = useMemo(() => {
    const balanceBN = new BigNumber(balance?.amount ?? 0);
    if (Number(value)) {
      return balanceBN.gte(value);
    } else {
      return true;
    }
  }, [value, balance]);
  const handleChange = (amount: BigNumber) => {
    if (hasEnoughBalance) {
      props.onChange(amount.toString());
    }
  };
  return (
    <div className={props.className ?? ""}>
      <IgntDenom denom={props.amount.denom} modifier="avatar" className="z-10" />
      <div className="flex flex-col justify-between ml-4 z-10">
        <div className="font-semibold">
          <IgntDenom denom={props.amount.denom} />
        </div>

        <div
          className={cx({
            "text-xs": true,
            error: !hasEnoughBalance,
          })}
        >
          address0xj9fj92jd9k0o2kd020
        </div>
      </div>

      <div className="flex-1 w-full h-full">
        <div className="focus-background"></div>
      </div>
    </div>
  );
}


interface IgntStackProps {
  className?: string;
}
interface TxData {
  receiver: string;
  ch: string;
  amounts: Array<Amount>;
  memo: string;
  fees: Array<Amount>;
}

enum UI_STATE {
  "FRESH" = 1,

  "BOOTSTRAPED" = 2,

  "WALLET_LOCKED" = 3,

  "SEND" = 100,
  "SEND_ADD_TOKEN" = 101,

  "TX_SIGNING" = 300,
  "TX_SUCCESS" = 301,
  "TX_ERROR" = 302,
}

interface State {
  tx: TxData;
  currentUIState: UI_STATE;
}

const initialState: State = {
  tx: {
    receiver: "",
    ch: "",
    amounts: [],
    memo: "",
    fees: [],
  },
  currentUIState: UI_STATE.SEND,
};
export default function IgntStack(props: IgntStackProps) {
  const [state, setState] = useState(initialState);
  const client = useClient();
  const sendMsgSend = client.CosmosBankV1Beta1.tx.sendMsgSend;
  const sendMsgTransfer = client.IbcApplicationsTransferV1.tx.sendMsgTransfer;
  const { address } = useAddressContext();
  const { balances } = useAssets(100);

  const parseAmount = (amount: string): BigNumber => {
    return amount == "" ? new BigNumber(0) : new BigNumber(amount);
  };
  const hasAnyBalance = useMemo(
    () => balances.assets.length > 0 && balances.assets.some((x) => parseAmount(x.amount ?? "0").isPositive()),
    [balances],
  );
  const isTxOngoing = useMemo(() => state.currentUIState === UI_STATE.TX_SIGNING, [state.currentUIState]);
  const isTxSuccess = useMemo(() => state.currentUIState === UI_STATE.TX_SUCCESS, [state.currentUIState]);
  const isTxError = useMemo(() => state.currentUIState === UI_STATE.TX_ERROR, [state.currentUIState]);
  const validTxFees = useMemo(
    () =>
      state.tx.fees.every((x) => {
        const parsedAmount = parseAmount(x.amount);
        return !parsedAmount.isNaN() && parsedAmount.isPositive();
      }),
    [state.tx.fees],
  );
  const validTxAmount = useMemo(
    () =>
      state.tx.amounts.length > 0 &&
      state.tx.amounts.every((x) => {
        const parsedAmount = parseAmount(x.amount);
        return !parsedAmount.isNaN() && parsedAmount.isPositive() && !parsedAmount.isZero();
      }),
    [state.tx.amounts],
  );
  const validReceiver = useMemo(() => {
    return true;
  }, [state.tx.receiver]);
  const ableToTx = useMemo<boolean>(
    () => validTxAmount && validReceiver && validTxFees && !!address,
    [validTxAmount, validReceiver, validTxFees, address],
  );
  const resetTx = (): void => {
    setState({ ...initialState });
  };
  if (isTxSuccess) {
    setTimeout(() => {
      resetTx();
    }, 2500);
  }
  const sendTx = async (): Promise<void> => {
    const fee: Array<Amount> = state.tx.fees.map((x) => ({
      denom: x.denom,
      amount: x.amount == "" ? "0" : x.amount,
    }));

    const amount: Array<Amount> = state.tx.amounts.map((x) => ({
      denom: x.denom,
      amount: x.amount == "" ? "0" : x.amount,
    }));

    const memo = state.tx.memo;

    let payload: any = {
      amount,
      toAddress: state.tx.receiver,
      fromAddress: address,
    };
    setState((oldState) => ({ ...oldState, currentUIState: UI_STATE.TX_SIGNING }));
    try {
    //   if (isIBC) {
    //     payload = {
    //       ...payload,
    //       sourcePort: "transfer",
    //       sourceChannel: state.tx.ch,
    //       sender: address,
    //       receiver: state.tx.receiver,
    //       timeoutHeight: 0,
    //       timeoutTimestamp: Long.fromNumber(new Date().getTime() + 60000).multiply(1000000),
    //       token: state.tx.amounts[0],
    //     };

    //     send = () =>
    //       sendMsgTransfer({
    //         value: payload,
    //         fee: { amount: fee as Readonly<Amount>[], gas: "200000" },
    //         memo,
    //       });
    //   } else {
    //     send = () =>
    //       sendMsgSend({
    //         value: payload,
    //         fee: { amount: fee as Readonly<Amount[]>, gas: "200000" },
    //         memo,
    //       });
    //   }



    //   const txResult = await send();

      const txResult = await client.SigmoidSigmoid.tx.sendMsgCreateUnstakeRequest({
        value: {
          creator: address,
          unstakeAddress: "",
          amount: 0,
        },
        fee: { amount: fee as Readonly<Amount[]>, gas: "200000" },
        memo,
    });
    //   const txResult = await client.SigmoidSigmoid.tx.msgCreateUnstakeRequest({
    //     value: payload,
    //   });

      if (txResult.code) {
        throw new Error();
      }
      setState(() => ({ ...initialState, currentUIState: UI_STATE.TX_SUCCESS }));
    } catch (e) {
      console.error(e);
      setState((oldState) => ({ ...oldState, currentUIState: UI_STATE.TX_ERROR }));
    }
  };
  const handleTxAmountUpdate = (selected: Amount[]) => {
    setState((oldState) => {
      const tx = oldState.tx;
      tx.amounts = selected;
      return { ...oldState, tx };
    });
  };
  const handleTxFeesUpdate = (selected: Amount[]) => {
    setState((oldState) => {
      const tx = oldState.tx;
      tx.fees = selected;
      return { ...oldState, tx };
    });
  };
  const bootstrapTxAmount = () => {
    if (hasAnyBalance) {
      const firstBalance = balances.assets[0];
      setState((oldState) => {
        const tx = oldState.tx;
        tx.amounts.push({
          denom: "",
          ...firstBalance,
          amount: "",
        });
        return { ...oldState, tx };
      });
    }
  };
  if (state.tx.amounts.length == 0) {
    bootstrapTxAmount();
  }

  if (balances.assets !== undefined) {
    balances.assets = (balances.assets as Amount[]).filter((value) => value.denom === "sigTAO");
  }

  return (
    <div className={props.className ?? ""}>
      {/* {hasAnyBalance && (
        state.tx.amounts.map((x, i) => (
          <IntegratedWallet
            key={`${x.denom}-${i}`}
            amount={x}
            onChange={(val) => {}}
            className="flex justify-between items-center my-1 py-3 rounded-xl relative px-4"
          />
        ))
        // <div>
        //   <IgntAmountSelect
        //     className="token-selector--main"
        //     selected={state.tx.amounts}
        //     balances={balances.assets as Amount[]}
        //     update={handleTxAmountUpdate}
        //   />
        // </div>
      )} */}

        {hasAnyBalance && (
        <div>
          <IgntAmountSelect
            className="token-selector--main"
            selected={state.tx.amounts}
            balances={balances.assets as Amount[]}
            update={handleTxAmountUpdate}
          />
        </div>
      )}

      <div className="pt-8">
        <div className="text-xs text-gray-600">Add BitTensor address</div>

        <div>
          <input
            value={state.tx.receiver}
            className={cx({
              "mt-1 py-2 px-4 h-12 bg-gray-100 border-xs text-base leading-tight w-full rounded-xl outline-0": true,
              "border border-red-400": state.tx.receiver.length > 0 && !validReceiver,
            })}
            placeholder="BitTensor address"
            disabled={!hasAnyBalance}
            onChange={(evt) => {
              setState((oldState) => {
                const tx = oldState.tx;
                tx.receiver = evt.target.value;
                return { ...oldState, tx };
              });
            }}
          />
          {state.tx.receiver.length > 0 && !validReceiver && (
            <div className="text-xs text-red-400 mt-1">Invalid address</div>
          )}
        </div>
      </div>

      <div style={{ width: "100%", height: "24px" }} />

      <div>
        <IgntButton className="w-full" disabled={!ableToTx} onClick={sendTx} busy={isTxOngoing}>
          Add
        </IgntButton>
        {isTxError && (
          <div className="flex items-center justify-center text-xs text-red-500 italic mt-2"> Error submitting Tx</div>
        )}
        {isTxSuccess && (
          <div className="flex items-center justify-center text-xs text-green-500 italic mt-2">
            Tx submitted succesfully
          </div>
        )}
      </div>
    </div>
  );
}
