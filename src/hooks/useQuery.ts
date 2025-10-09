import { paginateAccounts } from "@/app/api/accountApi";
import { fetchAccounts } from "@/app/api/accountService";
import { paginateResidents } from "@/app/api/residentApi";
import { ResidentApiResponse } from "@/types/residentsType";
import { useQuery } from "@tanstack/react-query";

export const useAccounts = (page: number) =>
  useQuery({
    queryKey: ["accounts", page],
    queryFn: () => paginateAccounts(page),
  });

export const useResidents = (page: number) =>
  useQuery<ResidentApiResponse>({
    queryKey: ["residents", page],
    queryFn: () => paginateResidents(page),
  });
