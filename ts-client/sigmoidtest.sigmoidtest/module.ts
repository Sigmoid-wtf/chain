// Generated by Ignite ignite.com/cli

import { SigningStargateClient, DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgProcessTransaction } from "./types/sigmoidtest/sigmoidtest/tx";
import { MsgUpdateParams } from "./types/sigmoidtest/sigmoidtest/tx";
import { QueryParamsResponse } from "./types/sigmoidtest/sigmoidtest/query";
import { MsgProcessTransactionResponse } from "./types/sigmoidtest/sigmoidtest/tx";
import { MsgApproveRequest } from "./types/sigmoidtest/sigmoidtest/tx";
import { QueryGetLastProcessedRequest } from "./types/sigmoidtest/sigmoidtest/query";
import { QueryGetLastProcessedResponse } from "./types/sigmoidtest/sigmoidtest/query";
import { MsgCreateRequestResponse } from "./types/sigmoidtest/sigmoidtest/tx";
import { QueryParamsRequest } from "./types/sigmoidtest/sigmoidtest/query";
import { QueryGetAmountResponse } from "./types/sigmoidtest/sigmoidtest/query";
import { GenesisState } from "./types/sigmoidtest/sigmoidtest/genesis";
import { MsgUpdateParamsResponse } from "./types/sigmoidtest/sigmoidtest/tx";
import { Request } from "./types/sigmoidtest/sigmoidtest/request";
import { QueryGetAmountRequest } from "./types/sigmoidtest/sigmoidtest/query";
import { Params } from "./types/sigmoidtest/sigmoidtest/params";
import { MsgCreateRequest } from "./types/sigmoidtest/sigmoidtest/tx";
import { MsgApproveRequestResponse } from "./types/sigmoidtest/sigmoidtest/tx";

import { FrontStakeRequest as typeFrontStakeRequest} from "./types"

export { MsgProcessTransaction, MsgUpdateParams, QueryParamsResponse, MsgProcessTransactionResponse, MsgApproveRequest, QueryGetLastProcessedRequest, QueryGetLastProcessedResponse, MsgCreateRequestResponse, QueryParamsRequest, QueryGetAmountResponse, GenesisState, MsgUpdateParamsResponse, Request, QueryGetAmountRequest, Params, MsgCreateRequest, MsgApproveRequestResponse };

type sendMsgProcessTransactionParams = {
  value: MsgProcessTransaction,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateParamsParams = {
  value: MsgUpdateParams,
  fee?: StdFee,
  memo?: string
};

type sendQueryParamsResponseParams = {
  value: QueryParamsResponse,
  fee?: StdFee,
  memo?: string
};

type sendMsgProcessTransactionResponseParams = {
  value: MsgProcessTransactionResponse,
  fee?: StdFee,
  memo?: string
};

type sendMsgApproveRequestParams = {
  value: MsgApproveRequest,
  fee?: StdFee,
  memo?: string
};

type sendQueryGetLastProcessedRequestParams = {
  value: QueryGetLastProcessedRequest,
  fee?: StdFee,
  memo?: string
};

type sendQueryGetLastProcessedResponseParams = {
  value: QueryGetLastProcessedResponse,
  fee?: StdFee,
  memo?: string
};

type sendMsgCreateRequestResponseParams = {
  value: MsgCreateRequestResponse,
  fee?: StdFee,
  memo?: string
};

type sendQueryParamsRequestParams = {
  value: QueryParamsRequest,
  fee?: StdFee,
  memo?: string
};

type sendQueryGetAmountResponseParams = {
  value: QueryGetAmountResponse,
  fee?: StdFee,
  memo?: string
};

type sendGenesisStateParams = {
  value: GenesisState,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateParamsResponseParams = {
  value: MsgUpdateParamsResponse,
  fee?: StdFee,
  memo?: string
};

type sendRequestParams = {
  value: Request,
  fee?: StdFee,
  memo?: string
};

type sendQueryGetAmountRequestParams = {
  value: QueryGetAmountRequest,
  fee?: StdFee,
  memo?: string
};

type sendParamsParams = {
  value: Params,
  fee?: StdFee,
  memo?: string
};

type sendMsgCreateRequestParams = {
  value: MsgCreateRequest,
  fee?: StdFee,
  memo?: string
};

type sendMsgApproveRequestResponseParams = {
  value: MsgApproveRequestResponse,
  fee?: StdFee,
  memo?: string
};


type msgProcessTransactionParams = {
  value: MsgProcessTransaction,
};

type msgUpdateParamsParams = {
  value: MsgUpdateParams,
};

type queryParamsResponseParams = {
  value: QueryParamsResponse,
};

type msgProcessTransactionResponseParams = {
  value: MsgProcessTransactionResponse,
};

type msgApproveRequestParams = {
  value: MsgApproveRequest,
};

type queryGetLastProcessedRequestParams = {
  value: QueryGetLastProcessedRequest,
};

type queryGetLastProcessedResponseParams = {
  value: QueryGetLastProcessedResponse,
};

type msgCreateRequestResponseParams = {
  value: MsgCreateRequestResponse,
};

type queryParamsRequestParams = {
  value: QueryParamsRequest,
};

type queryGetAmountResponseParams = {
  value: QueryGetAmountResponse,
};

type genesisStateParams = {
  value: GenesisState,
};

type msgUpdateParamsResponseParams = {
  value: MsgUpdateParamsResponse,
};

type requestParams = {
  value: Request,
};

type queryGetAmountRequestParams = {
  value: QueryGetAmountRequest,
};

type paramsParams = {
  value: Params,
};

type msgCreateRequestParams = {
  value: MsgCreateRequest,
};

type msgApproveRequestResponseParams = {
  value: MsgApproveRequestResponse,
};


export const registry = new Registry(msgTypes);

type Field = {
	name: string;
	type: unknown;
}
function getStructure(template) {
	const structure: {fields: Field[]} = { fields: [] }
	for (let [key, value] of Object.entries(template)) {
		let field = { name: key, type: typeof value }
		structure.fields.push(field)
	}
	return structure
}
const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
	prefix: string
	signer?: OfflineSigner
}

export const txClient = ({ signer, prefix, addr }: TxClientOptions = { addr: "http://localhost:26657", prefix: "cosmos" }) => {

  return {
		
		async sendMsgProcessTransaction({ value, fee, memo }: sendMsgProcessTransactionParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgProcessTransaction: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgProcessTransaction({ value: MsgProcessTransaction.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgProcessTransaction: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateParams: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgUpdateParams({ value: MsgUpdateParams.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateParams: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryParamsResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryParamsResponse({ value: QueryParamsResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryParamsResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgProcessTransactionResponse({ value, fee, memo }: sendMsgProcessTransactionResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgProcessTransactionResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgProcessTransactionResponse({ value: MsgProcessTransactionResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgProcessTransactionResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgApproveRequest({ value, fee, memo }: sendMsgApproveRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgApproveRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgApproveRequest({ value: MsgApproveRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgApproveRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryGetLastProcessedRequest({ value, fee, memo }: sendQueryGetLastProcessedRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryGetLastProcessedRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryGetLastProcessedRequest({ value: QueryGetLastProcessedRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryGetLastProcessedRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryGetLastProcessedResponse({ value, fee, memo }: sendQueryGetLastProcessedResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryGetLastProcessedResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryGetLastProcessedResponse({ value: QueryGetLastProcessedResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryGetLastProcessedResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgCreateRequestResponse({ value, fee, memo }: sendMsgCreateRequestResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCreateRequestResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgCreateRequestResponse({ value: MsgCreateRequestResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCreateRequestResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryParamsRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryParamsRequest({ value: QueryParamsRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryParamsRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryGetAmountResponse({ value, fee, memo }: sendQueryGetAmountResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryGetAmountResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryGetAmountResponse({ value: QueryGetAmountResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryGetAmountResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendGenesisState: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.genesisState({ value: GenesisState.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendGenesisState: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateParamsResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgUpdateParamsResponse({ value: MsgUpdateParamsResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateParamsResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendRequest({ value, fee, memo }: sendRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.request({ value: Request.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryGetAmountRequest({ value, fee, memo }: sendQueryGetAmountRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryGetAmountRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryGetAmountRequest({ value: QueryGetAmountRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryGetAmountRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendParams: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.params({ value: Params.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendParams: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgCreateRequest({ value, fee, memo }: sendMsgCreateRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCreateRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgCreateRequest({ value: MsgCreateRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCreateRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgApproveRequestResponse({ value, fee, memo }: sendMsgApproveRequestResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgApproveRequestResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgApproveRequestResponse({ value: MsgApproveRequestResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgApproveRequestResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgProcessTransaction({ value }: msgProcessTransactionParams): EncodeObject {
			try {
				return { typeUrl: "/sigmoidtest.sigmoidtest.MsgProcessTransaction", value: MsgProcessTransaction.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgProcessTransaction: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject {
			try {
				return { typeUrl: "/sigmoidtest.sigmoidtest.MsgUpdateParams", value: MsgUpdateParams.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateParams: Could not create message: ' + e.message)
			}
		},
		
		queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject {
			try {
				return { typeUrl: "/sigmoidtest.sigmoidtest.QueryParamsResponse", value: QueryParamsResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryParamsResponse: Could not create message: ' + e.message)
			}
		},
		
		msgProcessTransactionResponse({ value }: msgProcessTransactionResponseParams): EncodeObject {
			try {
				return { typeUrl: "/sigmoidtest.sigmoidtest.MsgProcessTransactionResponse", value: MsgProcessTransactionResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgProcessTransactionResponse: Could not create message: ' + e.message)
			}
		},
		
		msgApproveRequest({ value }: msgApproveRequestParams): EncodeObject {
			try {
				return { typeUrl: "/sigmoidtest.sigmoidtest.MsgApproveRequest", value: MsgApproveRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgApproveRequest: Could not create message: ' + e.message)
			}
		},
		
		queryGetLastProcessedRequest({ value }: queryGetLastProcessedRequestParams): EncodeObject {
			try {
				return { typeUrl: "/sigmoidtest.sigmoidtest.QueryGetLastProcessedRequest", value: QueryGetLastProcessedRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryGetLastProcessedRequest: Could not create message: ' + e.message)
			}
		},
		
		queryGetLastProcessedResponse({ value }: queryGetLastProcessedResponseParams): EncodeObject {
			try {
				return { typeUrl: "/sigmoidtest.sigmoidtest.QueryGetLastProcessedResponse", value: QueryGetLastProcessedResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryGetLastProcessedResponse: Could not create message: ' + e.message)
			}
		},
		
		msgCreateRequestResponse({ value }: msgCreateRequestResponseParams): EncodeObject {
			try {
				return { typeUrl: "/sigmoidtest.sigmoidtest.MsgCreateRequestResponse", value: MsgCreateRequestResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCreateRequestResponse: Could not create message: ' + e.message)
			}
		},
		
		queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject {
			try {
				return { typeUrl: "/sigmoidtest.sigmoidtest.QueryParamsRequest", value: QueryParamsRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryParamsRequest: Could not create message: ' + e.message)
			}
		},
		
		queryGetAmountResponse({ value }: queryGetAmountResponseParams): EncodeObject {
			try {
				return { typeUrl: "/sigmoidtest.sigmoidtest.QueryGetAmountResponse", value: QueryGetAmountResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryGetAmountResponse: Could not create message: ' + e.message)
			}
		},
		
		genesisState({ value }: genesisStateParams): EncodeObject {
			try {
				return { typeUrl: "/sigmoidtest.sigmoidtest.GenesisState", value: GenesisState.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:GenesisState: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject {
			try {
				return { typeUrl: "/sigmoidtest.sigmoidtest.MsgUpdateParamsResponse", value: MsgUpdateParamsResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateParamsResponse: Could not create message: ' + e.message)
			}
		},
		
		request({ value }: requestParams): EncodeObject {
			try {
				return { typeUrl: "/sigmoidtest.sigmoidtest.Request", value: Request.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:Request: Could not create message: ' + e.message)
			}
		},
		
		queryGetAmountRequest({ value }: queryGetAmountRequestParams): EncodeObject {
			try {
				return { typeUrl: "/sigmoidtest.sigmoidtest.QueryGetAmountRequest", value: QueryGetAmountRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryGetAmountRequest: Could not create message: ' + e.message)
			}
		},
		
		params({ value }: paramsParams): EncodeObject {
			try {
				return { typeUrl: "/sigmoidtest.sigmoidtest.Params", value: Params.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:Params: Could not create message: ' + e.message)
			}
		},
		
		msgCreateRequest({ value }: msgCreateRequestParams): EncodeObject {
			try {
				return { typeUrl: "/sigmoidtest.sigmoidtest.MsgCreateRequest", value: MsgCreateRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCreateRequest: Could not create message: ' + e.message)
			}
		},
		
		msgApproveRequestResponse({ value }: msgApproveRequestResponseParams): EncodeObject {
			try {
				return { typeUrl: "/sigmoidtest.sigmoidtest.MsgApproveRequestResponse", value: MsgApproveRequestResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgApproveRequestResponse: Could not create message: ' + e.message)
			}
		},
		
	}
};

interface QueryClientOptions {
  addr: string
}

export const queryClient = ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseURL: addr });
};

class SDKModule {
	public query: ReturnType<typeof queryClient>;
	public tx: ReturnType<typeof txClient>;
	public structure: Record<string,unknown>;
	public registry: Array<[string, GeneratedType]> = [];

	constructor(client: IgniteClient) {		
	
		this.query = queryClient({ addr: client.env.apiURL });		
		this.updateTX(client);
		this.structure =  {
						FrontStakeRequest: getStructure(typeFrontStakeRequest.fromPartial({})),
						
		};
		client.on('signer-changed',(signer) => {			
		 this.updateTX(client);
		})
	}
	updateTX(client: IgniteClient) {
    const methods = txClient({
        signer: client.signer,
        addr: client.env.rpcURL,
        prefix: client.env.prefix ?? "cosmos",
    })
	
    this.tx = methods;
    for (let m in methods) {
        this.tx[m] = methods[m].bind(this.tx);
    }
	}
};

const IgntModule = (test: IgniteClient) => {
	return {
		module: {
			SigmoidtestSigmoidtest: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default IgntModule;