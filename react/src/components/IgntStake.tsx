/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import cx from "classnames";
import { useMemo, useState } from "react";
import { useAddressContext } from "../def-hooks/addressContext";
import { useClient } from "../hooks/useClient";
import { Amount } from "../utils/interfaces";
import { IgntButton, IgntTxArrowIcon } from "@ignt/react-library";
import useSigmoidSigmoid from "../hooks/useSigmoidSigmoid";
import IgntDenom from "./IgntDenom";

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
  const { address } = useAddressContext();

  const isTxOngoing = useMemo(() => state.currentUIState === UI_STATE.TX_SIGNING, [state.currentUIState]);
  const isTxSuccess = useMemo(() => state.currentUIState === UI_STATE.TX_SUCCESS, [state.currentUIState]);
  const isTxError = useMemo(() => state.currentUIState === UI_STATE.TX_ERROR, [state.currentUIState]);
  const validReceiver = useMemo(() => {
    return state.tx.receiver !== "";
  }, [state.tx.receiver]);
  const ableToTx = useMemo<boolean>(() => validReceiver && !!address, [validReceiver, address]);
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

    const memo = state.tx.memo;

    setState((oldState) => ({ ...oldState, currentUIState: UI_STATE.TX_SIGNING }));
    try {
      const txResult = await client.SigmoidSigmoid.tx.sendMsgCreateRequest({
        value: {
          creator: address,
          senderAddress: state.tx.receiver,
          amount: 0,
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

  const { QueryGetFrontPendingStakeRequest } = useSigmoidSigmoid();
  const data = QueryGetFrontPendingStakeRequest(address, {});
  console.log("STAKES CURRENT");
  console.log(data);

  return (
    <div className={props.className ?? ""}>
      <div className="pt-8">
        {data.data !== undefined && data.data.request !== undefined && data.data.request?.senderAddress !== "" ? (
          <div>
            <div className="text-left text-black opacity-75 text-md font-normal">You have active stake request</div>
            <table className="table-auto w-full">
              <tbody>
                <tr>
                  <td className="flex text-xs py-2">
                    <div
                      className={cx({
                        "text-2xl w-10 h-10 rounded-sm bg-gray-200 flex items-center justify-center mr-2": true,
                        "rotate-180 text-green-500": true,
                        "text-error": false,
                      })}
                    >
                      <IgntTxArrowIcon />
                    </div>
                    <div className="flex flex-col justify-between flex-1"></div>
                    <div className="flex flex-col justify-between items-end">
                      <div className="opacity-60">{"from: " + data.data.request?.senderAddress}</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="text-left text-black opacity-75 text-md font-normal" style={{ marginTop: "20px" }}>
              Make sure that coins are sent to THIS_IS_BITTENSOR address on BitTensor network
            </div>
          </div>
        ) : (
          <div>
            <div className="text-xs text-gray-600">Add BitTensor address</div>
            <div>
              <input
                value={state.tx.receiver}
                className={cx({
                  "mt-1 py-2 px-4 h-12 bg-gray-100 border-xs text-base leading-tight w-full rounded-xl outline-0": true,
                  "border border-red-400": state.tx.receiver.length > 0 && !validReceiver,
                })}
                placeholder="BitTensor address"
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
            <div style={{ width: "100%", height: "24px" }} />

            <div>
              <IgntButton className="w-full" disabled={!ableToTx} onClick={sendTx} busy={isTxOngoing}>
                Add
              </IgntButton>
              {isTxError && (
                <div className="flex items-center justify-center text-xs text-red-500 italic mt-2">
                  {" "}
                  Error submitting Tx
                </div>
              )}
              {isTxSuccess && (
                <div className="flex items-center justify-center text-xs text-green-500 italic mt-2">
                  Tx submitted succesfully
                </div>
              )}
            </div>
            <div className="text-left text-black opacity-75 text-md font-normal" style={{ marginTop: "20px" }}>
              Send coins to THIS_IS_BITTENSOR address on BitTensor network
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
