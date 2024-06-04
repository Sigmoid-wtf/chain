import { useAddressContext } from "../def-hooks/addressContext";
import { IgntCard, IgntClipboard, IgntQRCode, IgntTabs } from "@ignt/react-library";
import IgntSendToPolygon from "./IgntSendToPolygon";
interface IgntTransferProps {
  className?: string;
}
export default function IgntTransfer(props: IgntTransferProps) {
  const { address } = useAddressContext();
  return (
    <IgntTabs
      tabHeaderClasses={["text-3xl", "font-semibold", "p-0", "m-0", "mb-2.5", "flex-1"]}
      tabLinkClasses={["pr-4"]}
      inactiveLinkClasses={["text-gray-400"]}
      activeLinkClasses={["text-black"]}
      className={props.className ?? ""}
    >
      <div className="" title="Send To Polygon">
        {address && <IgntSendToPolygon />}
      </div>
    </IgntTabs>
  );
}
