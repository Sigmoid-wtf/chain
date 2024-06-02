/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useMemo, useRef, useState } from "react";
import { useDenomContext } from "../def-hooks/denomContext";
import { Amount } from "../utils/interfaces";
import { IgntAddIcon, IgntSearchIcon, IgntModal, IgntClearIcon, IgntAmountInput } from "@ignt/react-library";
import IgntDenom from "./IgntDenom";
import BigNumber from "bignumber.js";
import cx from "classnames";

interface IgntAmountInputRowProps {
  className?: string;
  denom: string;
  onChange: (val: BigNumber) => void;
}

function IgntAmountInputRow(props: IgntAmountInputRowProps) {
  const [value, setValue] = useState<BigNumber>(new BigNumber(0));
  const handleChange = (amount: BigNumber) => {
    setValue(amount);
    props.onChange(amount);
  };
  return (
    <div className={props.className ?? ""}>
      <IgntDenom denom={props.denom} modifier="avatar" className="z-10" />
      <div className="flex flex-col justify-between ml-4 z-10">
        <div className="font-semibold">
          <IgntDenom denom={props.denom} />
        </div>

        <div
          className={cx({
            "text-xs": true,
          })}
        ></div>
      </div>

      <div className="flex-1 w-full h-full">
        <IgntAmountInput
          className="absolute w-full left-0 text-right h-full top-0 outline-0 focus:bg-gray-100 text-3xl font-medium rounded-lg px-4"
          onChange={handleChange}
          value={value}
        />

        <div className="focus-background"></div>
      </div>
    </div>
  );
}

interface IgntAmountSelectProps {
  className?: string;
  denom: string;
  update: (newValue: BigNumber) => void;
}
export interface State {
  tokenSearch: string;
  modalOpen: boolean;
}

const initialState: State = {
  tokenSearch: "",
  modalOpen: false,
};
export default function IgntAmountSelect(props: IgntAmountSelectProps) {
  const { denom, update } = props;
  const [state, setState] = useState(initialState);
  const searchInput = useRef<HTMLInputElement>(null);

  const handleInputChange = (val: BigNumber) => {
    update(val);
  };
  return (
    <div className={`flex flex-col ${props.className ?? ""}`}>
      <IgntAmountInputRow
        key={`${denom}-0`}
        denom={denom}
        onChange={(val) => {
          handleInputChange(val);
        }}
        className="flex justify-between items-center my-1 py-3 rounded-xl relative px-4"
      />
      <IgntModal
        visible={state.modalOpen}
        close-icon="true"
        title="Select asset"
        close={() => {
          setState((oldState) => ({ ...oldState, modalOpen: false }));
        }}
        body={
          <>
            <div className="relative mb-4 flex items-center">
              <div className="z-50">
                <IgntSearchIcon className="ml-4" />
              </div>
              <input
                ref={searchInput}
                className="-ml-8 pl-10 pr-10 leading-12 h-12 appearance-none w-full outline-none border-none rounded-xl focus:shadow-outline"
                placeholder="Search assets"
                value={state.tokenSearch}
                onChange={(evt) => {
                  setState((oldState) => ({ ...oldState, tokenSearch: evt.target.value }));
                }}
              />
              {state.tokenSearch && (
                <div
                  className="z-50 absolute mr-4 right-0 cursor-pointer"
                  onClick={(evt) => {
                    setState((oldState) => ({ ...oldState, tokenSearch: "" }));
                  }}
                >
                  <IgntClearIcon />
                </div>
              )}
            </div>
            <div className="relative mb-3">
              <div
                key={"balance_select_" + denom}
                className="flex justify-start w-full items-center my-1 py-3 rounded-xl hover:bg-gray-100 px-2"
              >
                <IgntDenom denom={denom} modifier="avatar" />

                <div className="flex flex-col justify-between ml-4">
                  <div className="font-semibold">
                    <IgntDenom denom={denom} shorten={false} />
                  </div>
                </div>
              </div>
            </div>
          </>
        }
      />
    </div>
  );
}
