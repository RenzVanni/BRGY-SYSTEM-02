import { paginateAccountsApi } from '@/app/api/accountApi';
import { mainPaginateApi } from '@/app/api/mainApi';
import { findOfficialByIdApi, paginateOfficialsApi } from '@/app/api/officialsApi';
import { findResidentByIdApi, paginateResidentsApi } from '@/app/api/residentApi';
import { AccountType } from '@/types/accountType';
import { PaginateApiResponse } from '@/types/commonType';
import { OfficialsType } from '@/types/officialsType';
import { ResidentType } from '@/types/residentsType';
import { useQuery } from '@tanstack/react-query';

// find all or paginate
export const usePaginate = (page: number, limit: number, path: string) =>
  useQuery<PaginateApiResponse>({
    queryKey: ['paginate', page, limit, path],
    queryFn: () => mainPaginateApi(page, limit, path)
  });

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
