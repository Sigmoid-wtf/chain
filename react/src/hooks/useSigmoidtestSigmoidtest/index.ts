/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery, type UseQueryOptions, useInfiniteQuery, type UseInfiniteQueryOptions } from "@tanstack/react-query";
import { useClient } from '../useClient';

export default function useSigmoidtestSigmoidtest() {
  const client = useClient();
  const QueryParams = ( options: any) => {
    const key = { type: 'QueryParams',  };    
    return useQuery([key], () => {
      return  client.SigmoidtestSigmoidtest.query.queryParams().then( res => res.data );
    }, options);
  }
  
  const QueryGetAmount = (senderAddress: string,  options: any) => {
    const key = { type: 'QueryGetAmount',  senderAddress };    
    return useQuery([key], () => {
      const { senderAddress } = key
      return  client.SigmoidtestSigmoidtest.query.queryGetAmount(senderAddress).then( res => res.data );
    }, options);
  }
  
  const QueryGetLastProcessed = ( options: any) => {
    const key = { type: 'QueryGetLastProcessed',  };    
    return useQuery([key], () => {
      return  client.SigmoidtestSigmoidtest.query.queryGetLastProcessed().then( res => res.data );
    }, options);
  }
  
  return {QueryParams,QueryGetAmount,QueryGetLastProcessed,
  }
}
