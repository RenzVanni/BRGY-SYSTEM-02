import { findAccountVerificationByTokenApi } from '@/app/api/accountApi';
import { mainFindByIdApi, mainGetApi, mainPaginateApi } from '@/app/api/mainApi';
import { LOGIN } from '@/constants/navigation';
import { ErrorResponse, PaginateApiResponse } from '@/types/commonType';
import { useQuery } from '@tanstack/react-query';
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
