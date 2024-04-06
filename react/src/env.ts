const apiURL = import.meta.env.VITE_API_COSMOS ?? "http://18.196.94.34:1317";
const rpcURL = import.meta.env.VITE_WS_TENDERMINT ?? "http://18.196.94.34:26657";
const prefix = import.meta.env.VITE_ADDRESS_PREFIX ?? "cosmos";

export const env = {
  apiURL,
  rpcURL,
  prefix,
};
