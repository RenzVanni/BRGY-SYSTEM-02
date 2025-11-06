import { findAccountVerificationByTokenApi, paginateAccountsApi } from '@/app/api/accountApi';
import { mainPaginateApi } from '@/app/api/mainApi';
import { findOfficialByIdApi, paginateOfficialsApi } from '@/app/api/officialsApi';
import { findResidentByIdApi, paginateResidentsApi } from '@/app/api/residentApi';
import { LOGIN } from '@/constants/navigation';
import { AccountType } from '@/types/accountType';
import { ErrorResponse, PaginateApiResponse } from '@/types/commonType';
import { OfficialsType } from '@/types/officialsType';
import { ResidentType } from '@/types/residentsType';
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

export const useAccounts = (page: number) =>
  useQuery<PaginateApiResponse>({
    queryKey: ['accounts', page],
    queryFn: () => paginateAccountsApi(page)
  });

export const useResidents = (page: number) =>
  useQuery<PaginateApiResponse>({
    queryKey: ['residents', page],
    queryFn: () => paginateResidentsApi(page)
  });

export const useOfficials = (page: number, limit: number) =>
  useQuery<PaginateApiResponse>({
    queryKey: ['officials', page, limit],
    queryFn: () => paginateOfficialsApi(page, limit)
  });

// find by ID query
export const useFindResidentById = (id: number) =>
  useQuery<ResidentType>({
    queryKey: ['findResidentsById', id],
    queryFn: () => findResidentByIdApi(id)
  });

export const useFindOfficialById = (id: number) =>
  useQuery<OfficialsType>({
    queryKey: ['findOfficialById', id],
    queryFn: () => findOfficialByIdApi(id)
  });

export const useFindAccountVerificationByToken = (token: string) =>
  useQuery<{ data: string }, ErrorResponse>({
    queryKey: ['findAccountVerificationByToken', token],
    queryFn: () => findAccountVerificationByTokenApi(token),
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false
  });
