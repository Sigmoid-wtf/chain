// Generated by Ignite ignite.com/cli
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { Api } from "./rest";
import { Class } from "./types/cosmos/nft/v1beta1/nft";
import { QueryNFTRequest } from "./types/cosmos/nft/v1beta1/query";
import { QueryNFTResponse } from "./types/cosmos/nft/v1beta1/query";
import { QueryClassesResponse } from "./types/cosmos/nft/v1beta1/query";
import { EventBurn } from "./types/cosmos/nft/v1beta1/event";
import { QueryOwnerRequest } from "./types/cosmos/nft/v1beta1/query";
import { QueryClassRequest } from "./types/cosmos/nft/v1beta1/query";
import { EventSend } from "./types/cosmos/nft/v1beta1/event";
import { GenesisState } from "./types/cosmos/nft/v1beta1/genesis";
import { NFT } from "./types/cosmos/nft/v1beta1/nft";
import { QueryClassResponse } from "./types/cosmos/nft/v1beta1/query";
import { QueryClassesRequest } from "./types/cosmos/nft/v1beta1/query";
import { MsgSendResponse } from "./types/cosmos/nft/v1beta1/tx";
import { QueryBalanceResponse } from "./types/cosmos/nft/v1beta1/query";
import { EventMint } from "./types/cosmos/nft/v1beta1/event";
import { QueryBalanceRequest } from "./types/cosmos/nft/v1beta1/query";
import { QuerySupplyRequest } from "./types/cosmos/nft/v1beta1/query";
import { QuerySupplyResponse } from "./types/cosmos/nft/v1beta1/query";
import { QueryNFTsResponse } from "./types/cosmos/nft/v1beta1/query";
import { MsgSend } from "./types/cosmos/nft/v1beta1/tx";
import { QueryNFTsRequest } from "./types/cosmos/nft/v1beta1/query";
import { Entry } from "./types/cosmos/nft/v1beta1/genesis";
import { QueryOwnerResponse } from "./types/cosmos/nft/v1beta1/query";
export { Class, QueryNFTRequest, QueryNFTResponse, QueryClassesResponse, EventBurn, QueryOwnerRequest, QueryClassRequest, EventSend, GenesisState, NFT, QueryClassResponse, QueryClassesRequest, MsgSendResponse, QueryBalanceResponse, EventMint, QueryBalanceRequest, QuerySupplyRequest, QuerySupplyResponse, QueryNFTsResponse, MsgSend, QueryNFTsRequest, Entry, QueryOwnerResponse };
export const registry = new Registry(msgTypes);
function getStructure(template) {
    const structure = { fields: [] };
    for (let [key, value] of Object.entries(template)) {
        let field = { name: key, type: typeof value };
        structure.fields.push(field);
    }
    return structure;
}
const defaultFee = {
    amount: [],
    gas: "200000",
};
export const txClient = ({ signer, prefix, addr } = { addr: "http://localhost:26657", prefix: "cosmos" }) => {
    return {
        async sendClass({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendClass: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.class({ value: Class.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendClass: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryNFTRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryNFTRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryNftrequest({ value: QueryNFTRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryNFTRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryNFTResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryNFTResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryNftresponse({ value: QueryNFTResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryNFTResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryClassesResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryClassesResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryClassesResponse({ value: QueryClassesResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryClassesResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendEventBurn({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendEventBurn: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.eventBurn({ value: EventBurn.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendEventBurn: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryOwnerRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryOwnerRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryOwnerRequest({ value: QueryOwnerRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryOwnerRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryClassRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryClassRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryClassRequest({ value: QueryClassRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryClassRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendEventSend({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendEventSend: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.eventSend({ value: EventSend.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendEventSend: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendGenesisState({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendGenesisState: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.genesisState({ value: GenesisState.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendGenesisState: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendNFT({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendNFT: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.nft({ value: NFT.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendNFT: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryClassResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryClassResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryClassResponse({ value: QueryClassResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryClassResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryClassesRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryClassesRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryClassesRequest({ value: QueryClassesRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryClassesRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgSendResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgSendResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgSendResponse({ value: MsgSendResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgSendResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryBalanceResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryBalanceResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryBalanceResponse({ value: QueryBalanceResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryBalanceResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendEventMint({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendEventMint: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.eventMint({ value: EventMint.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendEventMint: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryBalanceRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryBalanceRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryBalanceRequest({ value: QueryBalanceRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryBalanceRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQuerySupplyRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQuerySupplyRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.querySupplyRequest({ value: QuerySupplyRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQuerySupplyRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQuerySupplyResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQuerySupplyResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.querySupplyResponse({ value: QuerySupplyResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQuerySupplyResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryNFTsResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryNFTsResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryNftsResponse({ value: QueryNFTsResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryNFTsResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgSend({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgSend: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgSend({ value: MsgSend.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgSend: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryNFTsRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryNFTsRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryNftsRequest({ value: QueryNFTsRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryNFTsRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendEntry({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendEntry: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.entry({ value: Entry.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendEntry: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryOwnerResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryOwnerResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryOwnerResponse({ value: QueryOwnerResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryOwnerResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        class({ value }) {
            try {
                return { typeUrl: "/cosmos.nft.v1beta1.Class", value: Class.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:Class: Could not create message: ' + e.message);
            }
        },
        queryNftrequest({ value }) {
            try {
                return { typeUrl: "/cosmos.nft.v1beta1.QueryNFTRequest", value: QueryNFTRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryNFTRequest: Could not create message: ' + e.message);
            }
        },
        queryNftresponse({ value }) {
            try {
                return { typeUrl: "/cosmos.nft.v1beta1.QueryNFTResponse", value: QueryNFTResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryNFTResponse: Could not create message: ' + e.message);
            }
        },
        queryClassesResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.nft.v1beta1.QueryClassesResponse", value: QueryClassesResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryClassesResponse: Could not create message: ' + e.message);
            }
        },
        eventBurn({ value }) {
            try {
                return { typeUrl: "/cosmos.nft.v1beta1.EventBurn", value: EventBurn.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:EventBurn: Could not create message: ' + e.message);
            }
        },
        queryOwnerRequest({ value }) {
            try {
                return { typeUrl: "/cosmos.nft.v1beta1.QueryOwnerRequest", value: QueryOwnerRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryOwnerRequest: Could not create message: ' + e.message);
            }
        },
        queryClassRequest({ value }) {
            try {
                return { typeUrl: "/cosmos.nft.v1beta1.QueryClassRequest", value: QueryClassRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryClassRequest: Could not create message: ' + e.message);
            }
        },
        eventSend({ value }) {
            try {
                return { typeUrl: "/cosmos.nft.v1beta1.EventSend", value: EventSend.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:EventSend: Could not create message: ' + e.message);
            }
        },
        genesisState({ value }) {
            try {
                return { typeUrl: "/cosmos.nft.v1beta1.GenesisState", value: GenesisState.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:GenesisState: Could not create message: ' + e.message);
            }
        },
        nft({ value }) {
            try {
                return { typeUrl: "/cosmos.nft.v1beta1.NFT", value: NFT.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:NFT: Could not create message: ' + e.message);
            }
        },
        queryClassResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.nft.v1beta1.QueryClassResponse", value: QueryClassResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryClassResponse: Could not create message: ' + e.message);
            }
        },
        queryClassesRequest({ value }) {
            try {
                return { typeUrl: "/cosmos.nft.v1beta1.QueryClassesRequest", value: QueryClassesRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryClassesRequest: Could not create message: ' + e.message);
            }
        },
        msgSendResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.nft.v1beta1.MsgSendResponse", value: MsgSendResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgSendResponse: Could not create message: ' + e.message);
            }
        },
        queryBalanceResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.nft.v1beta1.QueryBalanceResponse", value: QueryBalanceResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryBalanceResponse: Could not create message: ' + e.message);
            }
        },
        eventMint({ value }) {
            try {
                return { typeUrl: "/cosmos.nft.v1beta1.EventMint", value: EventMint.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:EventMint: Could not create message: ' + e.message);
            }
        },
        queryBalanceRequest({ value }) {
            try {
                return { typeUrl: "/cosmos.nft.v1beta1.QueryBalanceRequest", value: QueryBalanceRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryBalanceRequest: Could not create message: ' + e.message);
            }
        },
        querySupplyRequest({ value }) {
            try {
                return { typeUrl: "/cosmos.nft.v1beta1.QuerySupplyRequest", value: QuerySupplyRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QuerySupplyRequest: Could not create message: ' + e.message);
            }
        },
        querySupplyResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.nft.v1beta1.QuerySupplyResponse", value: QuerySupplyResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QuerySupplyResponse: Could not create message: ' + e.message);
            }
        },
        queryNftsResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.nft.v1beta1.QueryNFTsResponse", value: QueryNFTsResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryNFTsResponse: Could not create message: ' + e.message);
            }
        },
        msgSend({ value }) {
            try {
                return { typeUrl: "/cosmos.nft.v1beta1.MsgSend", value: MsgSend.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgSend: Could not create message: ' + e.message);
            }
        },
        queryNftsRequest({ value }) {
            try {
                return { typeUrl: "/cosmos.nft.v1beta1.QueryNFTsRequest", value: QueryNFTsRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryNFTsRequest: Could not create message: ' + e.message);
            }
        },
        entry({ value }) {
            try {
                return { typeUrl: "/cosmos.nft.v1beta1.Entry", value: Entry.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:Entry: Could not create message: ' + e.message);
            }
        },
        queryOwnerResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.nft.v1beta1.QueryOwnerResponse", value: QueryOwnerResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryOwnerResponse: Could not create message: ' + e.message);
            }
        },
    };
};
export const queryClient = ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseURL: addr });
};
class SDKModule {
    constructor(client) {
        this.registry = [];
        this.query = queryClient({ addr: client.env.apiURL });
        this.updateTX(client);
        this.structure = {};
        client.on('signer-changed', (signer) => {
            this.updateTX(client);
        });
    }
    updateTX(client) {
        const methods = txClient({
            signer: client.signer,
            addr: client.env.rpcURL,
            prefix: client.env.prefix ?? "cosmos",
        });
        this.tx = methods;
        for (let m in methods) {
            this.tx[m] = methods[m].bind(this.tx);
        }
    }
}
;
const IgntModule = (test) => {
    return {
        module: {
            CosmosNftV1Beta1: new SDKModule(test)
        },
        registry: msgTypes
    };
};
export default IgntModule;