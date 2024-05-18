/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery, type UseQueryOptions, useInfiniteQuery, type UseInfiniteQueryOptions } from "@tanstack/react-query";
import { useClient } from '../useClient';

export default function useSigmoidSigmoid() {
  const client = useClient();
  const QueryParams = ( options: any) => {
    const key = { type: 'QueryParams',  };    
    return useQuery([key], () => {
      return  client.SigmoidSigmoid.query.queryParams().then( res => res.data );
    }, options);
  }
  
  const QueryGetAmount = (senderAddress: string,  options: any) => {
    const key = { type: 'QueryGetAmount',  senderAddress };    
    return useQuery([key], () => {
      const { senderAddress } = key
      return  client.SigmoidSigmoid.query.queryGetAmount(senderAddress).then( res => res.data );
    }, options);
  }
  
  const QueryGetLastProcessed = ( options: any) => {
    const key = { type: 'QueryGetLastProcessed',  };    
    return useQuery([key], () => {
      return  client.SigmoidSigmoid.query.queryGetLastProcessed().then( res => res.data );
    }, options);
  }
  
  const QueryGetPendingUnstakeRequest = ( options: any) => {
    const key = { type: 'QueryGetPendingUnstakeRequest',  };    
    return useQuery([key], () => {
      return  client.SigmoidSigmoid.query.queryGetPendingUnstakeRequest().then( res => res.data );
    }, options);
  }
  
  const QueryGetRaoStakedBalance = ( options: any) => {
    const key = { type: 'QueryGetRaoStakedBalance',  };    
    return useQuery([key], () => {
      return  client.SigmoidSigmoid.query.queryGetRaoStakedBalance().then( res => res.data );
    }, options);
  }
  
  const QueryGetSigtaoRateD = ( options: any) => {
    const key = { type: 'QueryGetSigtaoRateD',  };    
    return useQuery([key], () => {
      return  client.SigmoidSigmoid.query.queryGetSigtaoRateD().then( res => res.data );
    }, options);
  }
  
  const QueryGetPendingBridgeRequest = ( options: any) => {
    const key = { type: 'QueryGetPendingBridgeRequest',  };    
    return useQuery([key], () => {
      return  client.SigmoidSigmoid.query.queryGetPendingBridgeRequest().then( res => res.data );
    }, options);
  }
  
  const QueryGetLatestProcessedEthBlock = ( options: any) => {
    const key = { type: 'QueryGetLatestProcessedEthBlock',  };    
    return useQuery([key], () => {
      return  client.SigmoidSigmoid.query.queryGetLatestProcessedEthBlock().then( res => res.data );
    }, options);
  }
  
  return {QueryParams,QueryGetAmount,QueryGetLastProcessed,QueryGetPendingUnstakeRequest,QueryGetRaoStakedBalance,QueryGetSigtaoRateD,QueryGetPendingBridgeRequest,QueryGetLatestProcessedEthBlock,
  }
}
