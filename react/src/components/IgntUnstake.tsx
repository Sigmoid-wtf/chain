/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import BigNumber from "bignumber.js";
import { fromBech32 } from "@cosmjs/encoding";
import cx from "classnames";
import { useMemo, useState } from "react";
import { useAddressContext } from "../def-hooks/addressContext";
import { useClient } from "../hooks/useClient";
import { Amount } from "../utils/interfaces";
import { IgntChevronDownIcon, IgntButton, IgntTxArrowIcon } from "@ignt/react-library";
import IgntAmountSelect from "./IgntAmountSelect";
import { useAssets } from "../def-hooks/useAssets";
import Long from "long";
import IgntDenom from "./IgntDenom";
import useSigmoidSigmoid from "../hooks/useSigmoidSigmoid";

interface IgntUnstackProps {
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
  advancedOpen: boolean;
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
  advancedOpen: false,
};
export default function IgntUnstack(props: IgntUnstackProps) {
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

    let send;

    setState((oldState) => ({ ...oldState, currentUIState: UI_STATE.TX_SIGNING }));
    try {
      const amount = state.tx.amounts.filter((value) => value.denom === "sigTAO").at(0)?.amount ?? "0";

      const txResult = await client.SigmoidSigmoid.tx.sendMsgCreateUnstakeRequest({
        value: {
          creator: address,
          unstakeAddress: state.tx.receiver,
          amount: Number(amount),
        },
        fee: { amount: fee as Readonly<Amount[]>, gas: "200000" },
        memo,
      });

      if (txResult.code) {
        throw new Error();
      }
      setState(() => ({ ...initialState, currentUIState: UI_STATE.TX_SUCCESS }));
    } catch (e) {
      console.error(e);
      setState((oldState) => ({ ...oldState, currentUIState: UI_STATE.TX_ERROR }));
    }
  };
  const toggleAdvanced = () => {
    if (hasAnyBalance) {
      setState((oldState) => ({ ...oldState, advancedOpen: !oldState.advancedOpen }));
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

  console.log(balances.assets);
  if (balances.assets !== undefined) {
    balances.assets = balances.assets.filter((value) => value.denom === "sigTAO");
  }

  const { QueryGetPendingUnstakeRequest } = useSigmoidSigmoid();
  const data = QueryGetPendingUnstakeRequest({});
  console.log(data);

  return (
    <div className={props.className ?? ""}>
      <div className="pt-8">
      <div className="text-xs text-gray-600">You have active unstake</div>

      {data.data !== undefined && data.data.request !== undefined && data.data.request?.unstakeAddress !== "" ? (
        <table className="table-auto w-full">
          <tbody>
          <tr>
                <td className="flex text-xs py-2">
                  <div
                    className={cx({
                      "text-2xl w-10 h-10 rounded-sm bg-gray-200 flex items-center justify-center mr-2": true,
                      "rotate-180 text-green-500": false,
                      "text-error": true,
                    })}
                  >
                    <IgntTxArrowIcon />
                  </div>
                  <div className="flex flex-col justify-between flex-1">
                  </div>
                  <div className="flex flex-col justify-between items-end">
                    <div className="font-medium text-right text-xs text-gray-600 inline">
                    <span
                          className={cx({
                            "p-1 rounded-md": true,
                            "bg-green-200": false,
                            "bg-red-200": true,
                          })}
                        >
                          {data.data.request?.amount ?? 0}
                          <IgntDenom denom={"sigTAO"} />
                        </span>
                    </div>
                  <div className="opacity-60">{"to: " + data.data.request?.unstakeAddress}</div>
                  </div>
                </td>
              </tr>
          </tbody>
        </table>
      ) : (
        <div>
        <div className="text-xs text-gray-600">Send to</div>

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

      <div style={{ width: "100%", height: "24px" }} />

      <div>
        <IgntButton className="w-full" disabled={!ableToTx} onClick={sendTx} busy={isTxOngoing}>
          Send
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
      )}

        
    </div>
    </div>
  );
}
