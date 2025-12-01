import { findAccountVerificationByTokenApi } from '@/app/api/accountApi';
import { mainFindByIdApi, mainGetApi, mainPaginateApi, mainRequestParamApi } from '@/app/api/mainApi';
import { searchResidentsApi } from '@/app/api/residentApi';
import { LOGIN } from '@/constants/navigation';
import { ErrorResponse, PaginateApiResponse, RequestParamType } from '@/types/commonType';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

// find all or paginate
export const usePaginate = (page: number, limit: number, path: string) => {
  const router = useRouter();
  return useQuery<PaginateApiResponse>({
    queryKey: ['paginate', page, limit, path],
    queryFn: async () => {
      try {
        return await mainPaginateApi(page, limit, path);
      } catch (error: any) {
        if (error.code == 401) {
          router.push(LOGIN);
        }
      }
    }
  });
};

export const useSearch = (name: string, page: number, limit: number) => {
  return useInfiniteQuery({
    queryKey: ['searchResidents', name, page, limit],
    queryFn: () => searchResidentsApi(name, page, limit),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.pages ?? undefined
  });
};

/**
 * ! Main GET Query
 * @param path
 * @returns
 */
export const useGet = <T>(path: string) => {
  const router = useRouter();
  return useQuery<T>({
    queryKey: ['get', path],
    queryFn: async () => {
      try {
        return await mainGetApi<T>(path);
      } catch (error: any) {
        if (error.code == 401) {
          router.push(LOGIN);
        }
      }
    }
  });
};

// find by ID query
export const useFindAccountVerificationByToken = (token: string) =>
  useQuery<{ data: string }, ErrorResponse>({
    queryKey: ['findAccountVerificationByToken', token],
    queryFn: () => findAccountVerificationByTokenApi(token),
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false
  });

// ! Main Query Request Param
export const useQueryRequestParam = <TSUCCESS, TPARAM>({ param, path, method }: RequestParamType<TPARAM>) => {
  return useQuery<TSUCCESS, ErrorResponse>({
    queryKey: ['requestParam', param, path, method],
    queryFn: () => mainRequestParamApi<TSUCCESS, TPARAM>({ param, path, method })
  });
};
