// Generated by Ignite ignite.com/cli

import { SigningStargateClient, DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { DisabledListResponse } from "./types/cosmos/circuit/v1/query";
import { MsgAuthorizeCircuitBreaker } from "./types/cosmos/circuit/v1/tx";
import { QueryAccountsRequest } from "./types/cosmos/circuit/v1/query";
import { QueryAccountRequest } from "./types/cosmos/circuit/v1/query";
import { MsgAuthorizeCircuitBreakerResponse } from "./types/cosmos/circuit/v1/tx";
import { MsgTripCircuitBreaker } from "./types/cosmos/circuit/v1/tx";
import { MsgTripCircuitBreakerResponse } from "./types/cosmos/circuit/v1/tx";
import { GenesisState } from "./types/cosmos/circuit/v1/types";
import { GenesisAccountPermissions } from "./types/cosmos/circuit/v1/types";
import { AccountsResponse } from "./types/cosmos/circuit/v1/query";
import { QueryDisabledListRequest } from "./types/cosmos/circuit/v1/query";
import { MsgResetCircuitBreaker } from "./types/cosmos/circuit/v1/tx";
import { MsgResetCircuitBreakerResponse } from "./types/cosmos/circuit/v1/tx";
import { Permissions } from "./types/cosmos/circuit/v1/types";
import { AccountResponse } from "./types/cosmos/circuit/v1/query";


export { DisabledListResponse, MsgAuthorizeCircuitBreaker, QueryAccountsRequest, QueryAccountRequest, MsgAuthorizeCircuitBreakerResponse, MsgTripCircuitBreaker, MsgTripCircuitBreakerResponse, GenesisState, GenesisAccountPermissions, AccountsResponse, QueryDisabledListRequest, MsgResetCircuitBreaker, MsgResetCircuitBreakerResponse, Permissions, AccountResponse };

type sendDisabledListResponseParams = {
  value: DisabledListResponse,
  fee?: StdFee,
  memo?: string
};

type sendMsgAuthorizeCircuitBreakerParams = {
  value: MsgAuthorizeCircuitBreaker,
  fee?: StdFee,
  memo?: string
};

type sendQueryAccountsRequestParams = {
  value: QueryAccountsRequest,
  fee?: StdFee,
  memo?: string
};

type sendQueryAccountRequestParams = {
  value: QueryAccountRequest,
  fee?: StdFee,
  memo?: string
};

type sendMsgAuthorizeCircuitBreakerResponseParams = {
  value: MsgAuthorizeCircuitBreakerResponse,
  fee?: StdFee,
  memo?: string
};

type sendMsgTripCircuitBreakerParams = {
  value: MsgTripCircuitBreaker,
  fee?: StdFee,
  memo?: string
};

type sendMsgTripCircuitBreakerResponseParams = {
  value: MsgTripCircuitBreakerResponse,
  fee?: StdFee,
  memo?: string
};

type sendGenesisStateParams = {
  value: GenesisState,
  fee?: StdFee,
  memo?: string
};

type sendGenesisAccountPermissionsParams = {
  value: GenesisAccountPermissions,
  fee?: StdFee,
  memo?: string
};

type sendAccountsResponseParams = {
  value: AccountsResponse,
  fee?: StdFee,
  memo?: string
};

type sendQueryDisabledListRequestParams = {
  value: QueryDisabledListRequest,
  fee?: StdFee,
  memo?: string
};

type sendMsgResetCircuitBreakerParams = {
  value: MsgResetCircuitBreaker,
  fee?: StdFee,
  memo?: string
};

type sendMsgResetCircuitBreakerResponseParams = {
  value: MsgResetCircuitBreakerResponse,
  fee?: StdFee,
  memo?: string
};

type sendPermissionsParams = {
  value: Permissions,
  fee?: StdFee,
  memo?: string
};

type sendAccountResponseParams = {
  value: AccountResponse,
  fee?: StdFee,
  memo?: string
};


type disabledListResponseParams = {
  value: DisabledListResponse,
};

type msgAuthorizeCircuitBreakerParams = {
  value: MsgAuthorizeCircuitBreaker,
};

type queryAccountsRequestParams = {
  value: QueryAccountsRequest,
};

type queryAccountRequestParams = {
  value: QueryAccountRequest,
};

type msgAuthorizeCircuitBreakerResponseParams = {
  value: MsgAuthorizeCircuitBreakerResponse,
};

type msgTripCircuitBreakerParams = {
  value: MsgTripCircuitBreaker,
};

type msgTripCircuitBreakerResponseParams = {
  value: MsgTripCircuitBreakerResponse,
};

type genesisStateParams = {
  value: GenesisState,
};

type genesisAccountPermissionsParams = {
  value: GenesisAccountPermissions,
};

type accountsResponseParams = {
  value: AccountsResponse,
};

type queryDisabledListRequestParams = {
  value: QueryDisabledListRequest,
};

type msgResetCircuitBreakerParams = {
  value: MsgResetCircuitBreaker,
};

type msgResetCircuitBreakerResponseParams = {
  value: MsgResetCircuitBreakerResponse,
};

type permissionsParams = {
  value: Permissions,
};

type accountResponseParams = {
  value: AccountResponse,
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
		
		async sendDisabledListResponse({ value, fee, memo }: sendDisabledListResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendDisabledListResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.disabledListResponse({ value: DisabledListResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendDisabledListResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgAuthorizeCircuitBreaker({ value, fee, memo }: sendMsgAuthorizeCircuitBreakerParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgAuthorizeCircuitBreaker: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgAuthorizeCircuitBreaker({ value: MsgAuthorizeCircuitBreaker.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgAuthorizeCircuitBreaker: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryAccountsRequest({ value, fee, memo }: sendQueryAccountsRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryAccountsRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryAccountsRequest({ value: QueryAccountsRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryAccountsRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryAccountRequest({ value, fee, memo }: sendQueryAccountRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryAccountRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryAccountRequest({ value: QueryAccountRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryAccountRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgAuthorizeCircuitBreakerResponse({ value, fee, memo }: sendMsgAuthorizeCircuitBreakerResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgAuthorizeCircuitBreakerResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgAuthorizeCircuitBreakerResponse({ value: MsgAuthorizeCircuitBreakerResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgAuthorizeCircuitBreakerResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgTripCircuitBreaker({ value, fee, memo }: sendMsgTripCircuitBreakerParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgTripCircuitBreaker: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgTripCircuitBreaker({ value: MsgTripCircuitBreaker.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgTripCircuitBreaker: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgTripCircuitBreakerResponse({ value, fee, memo }: sendMsgTripCircuitBreakerResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgTripCircuitBreakerResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgTripCircuitBreakerResponse({ value: MsgTripCircuitBreakerResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgTripCircuitBreakerResponse: Could not broadcast Tx: '+ e.message)
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
		
		async sendGenesisAccountPermissions({ value, fee, memo }: sendGenesisAccountPermissionsParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendGenesisAccountPermissions: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.genesisAccountPermissions({ value: GenesisAccountPermissions.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendGenesisAccountPermissions: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendAccountsResponse({ value, fee, memo }: sendAccountsResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendAccountsResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.accountsResponse({ value: AccountsResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendAccountsResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryDisabledListRequest({ value, fee, memo }: sendQueryDisabledListRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryDisabledListRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryDisabledListRequest({ value: QueryDisabledListRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryDisabledListRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgResetCircuitBreaker({ value, fee, memo }: sendMsgResetCircuitBreakerParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgResetCircuitBreaker: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgResetCircuitBreaker({ value: MsgResetCircuitBreaker.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgResetCircuitBreaker: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgResetCircuitBreakerResponse({ value, fee, memo }: sendMsgResetCircuitBreakerResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgResetCircuitBreakerResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgResetCircuitBreakerResponse({ value: MsgResetCircuitBreakerResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgResetCircuitBreakerResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendPermissions({ value, fee, memo }: sendPermissionsParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendPermissions: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.permissions({ value: Permissions.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendPermissions: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendAccountResponse({ value, fee, memo }: sendAccountResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendAccountResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.accountResponse({ value: AccountResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendAccountResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		disabledListResponse({ value }: disabledListResponseParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.circuit.v1.DisabledListResponse", value: DisabledListResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:DisabledListResponse: Could not create message: ' + e.message)
			}
		},
		
		msgAuthorizeCircuitBreaker({ value }: msgAuthorizeCircuitBreakerParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker", value: MsgAuthorizeCircuitBreaker.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgAuthorizeCircuitBreaker: Could not create message: ' + e.message)
			}
		},
		
		queryAccountsRequest({ value }: queryAccountsRequestParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.circuit.v1.QueryAccountsRequest", value: QueryAccountsRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryAccountsRequest: Could not create message: ' + e.message)
			}
		},
		
		queryAccountRequest({ value }: queryAccountRequestParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.circuit.v1.QueryAccountRequest", value: QueryAccountRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryAccountRequest: Could not create message: ' + e.message)
			}
		},
		
		msgAuthorizeCircuitBreakerResponse({ value }: msgAuthorizeCircuitBreakerResponseParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreakerResponse", value: MsgAuthorizeCircuitBreakerResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgAuthorizeCircuitBreakerResponse: Could not create message: ' + e.message)
			}
		},
		
		msgTripCircuitBreaker({ value }: msgTripCircuitBreakerParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreaker", value: MsgTripCircuitBreaker.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgTripCircuitBreaker: Could not create message: ' + e.message)
			}
		},
		
		msgTripCircuitBreakerResponse({ value }: msgTripCircuitBreakerResponseParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreakerResponse", value: MsgTripCircuitBreakerResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgTripCircuitBreakerResponse: Could not create message: ' + e.message)
			}
		},
		
		genesisState({ value }: genesisStateParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.circuit.v1.GenesisState", value: GenesisState.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:GenesisState: Could not create message: ' + e.message)
			}
		},
		
		genesisAccountPermissions({ value }: genesisAccountPermissionsParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.circuit.v1.GenesisAccountPermissions", value: GenesisAccountPermissions.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:GenesisAccountPermissions: Could not create message: ' + e.message)
			}
		},
		
		accountsResponse({ value }: accountsResponseParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.circuit.v1.AccountsResponse", value: AccountsResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:AccountsResponse: Could not create message: ' + e.message)
			}
		},
		
		queryDisabledListRequest({ value }: queryDisabledListRequestParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.circuit.v1.QueryDisabledListRequest", value: QueryDisabledListRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryDisabledListRequest: Could not create message: ' + e.message)
			}
		},
		
		msgResetCircuitBreaker({ value }: msgResetCircuitBreakerParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreaker", value: MsgResetCircuitBreaker.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgResetCircuitBreaker: Could not create message: ' + e.message)
			}
		},
		
		msgResetCircuitBreakerResponse({ value }: msgResetCircuitBreakerResponseParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreakerResponse", value: MsgResetCircuitBreakerResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgResetCircuitBreakerResponse: Could not create message: ' + e.message)
			}
		},
		
		permissions({ value }: permissionsParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.circuit.v1.Permissions", value: Permissions.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:Permissions: Could not create message: ' + e.message)
			}
		},
		
		accountResponse({ value }: accountResponseParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.circuit.v1.AccountResponse", value: AccountResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:AccountResponse: Could not create message: ' + e.message)
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
			CosmosCircuitV1: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default IgntModule;