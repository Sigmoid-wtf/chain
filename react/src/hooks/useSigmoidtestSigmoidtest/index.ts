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
  
  const QueryGetFrontStakeRequest = (creator: string, query: any, options: any, perPage: number) => {
    const key = { type: 'QueryGetFrontStakeRequest',  creator, query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const { creator,query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.SigmoidtestSigmoidtest.query.queryGetFrontStakeRequest(creator, query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  return {QueryParams,QueryGetAmount,QueryGetLastProcessed,QueryGetFrontStakeRequest,
  }
}
