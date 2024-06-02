/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import IgntAssets from "../components/IgntAssets";
import IgntStakeUnstakes from "../components/IgntStakeUnstakes";
import IgntTransactions from "../components/IgntTransactions";
import IgntTransfer from "../components/IgntTransfer";
import useSigmoidSigmoid from "../hooks/useSigmoidSigmoid";

export default function PortfolioView() {
  const { QueryGetSigtaoRateD } = useSigmoidSigmoid();
  const rateRsp = QueryGetSigtaoRateD({});

  return (
    <div>
      <div className="container mx-auto">
        <div className="grid grid-cols-2">
          <div>
            <header className="flex items-center justify-between">
              <h2 className="text-3xl text-black font-semibold p-0 m-0 mb-2.5 flex-1" style={{ marginLeft: 10 }}>
                Current SigTAO rate
              </h2>
            </header>
            <div
              className="text-left text-black opacity-75 text-md font-normal"
              style={{ marginLeft: 10, marginBottom: 20 }}
            >
              Current Rate: {rateRsp.data?.sigtaoRateD}
            </div>
            <IgntAssets className="px-2.5 mb-10" displayLimit={3} />
            <IgntTransactions className="px-2.5" />
          </div>
          <div>
            <div style={{ marginBottom: "50px" }}>
              <IgntTransfer className="px-2.5 w-4/6 mx-auto" />
            </div>
            <IgntStakeUnstakes className="px-2.5 w-4/6 mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
