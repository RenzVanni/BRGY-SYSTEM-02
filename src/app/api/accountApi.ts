import { AccountType } from '@/types/accountType';
import { PaginateApiResponse } from '@/types/commonType';

//paginate accounts
export const paginateAccountsApi = async (page: number): Promise<PaginateApiResponse> => {
  const response = await fetch(`/api/search?query=/accounts?page=${page}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  });

  return await response.json();
};

// find account by id api
export const findAccountByIdApi = async (id: string): Promise<AccountType> => {
  const response = await fetch(`/api/search?query=/accounts/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  });

  return await response.json();
};
