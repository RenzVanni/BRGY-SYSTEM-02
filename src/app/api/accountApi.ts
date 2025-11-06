import { ACCOUNT_PATH, ACCOUNT_VERIFICATION_FIND_BY_TOKEN } from '@/constants/Backend_Slugs';
import { AccountType, LoginType } from '@/types/accountType';
import { ErrorResponse, PaginateApiResponse, SuccessResponse } from '@/types/commonType';
import { NextResponse } from 'next/server';

/**
 * * Login api
 * @param prop
 * @returns
 */
export const loginApi = async (prop: FormData): Promise<SuccessResponse> => {
  const username = prop.get('username');
  const password = prop.get('password');
  const query = encodeURIComponent(`${ACCOUNT_PATH}/login`);
  const response = await fetch(`/api/search?query=${query}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ username, password })
  });

  if (!response.ok) {
    if (response.status == 401) {
      throw { code: response.status, message: 'User Does Not Exists' } as ErrorResponse;
    }
  }

  return await response.json();
};

/**
 * * Paginate accounts api
 * @param page
 * @returns
 */
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

/**
 * * Find account by id api
 * @param id
 * @returns
 */
export const findAccountByIdApi = async (id: string): Promise<AccountType> => {
  const response = await fetch(`/api/search?query=/accounts/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  });

  const data = await response.json();
  console.log('Account Data: ', data);
  return data;
};

/**
 * * Find account verification email by token
 * @param id
 * @param path
 * @returns
 */
export const findAccountVerificationByTokenApi = async (token: string): Promise<{ data: string }> => {
  const query = encodeURIComponent(`${ACCOUNT_VERIFICATION_FIND_BY_TOKEN}?token=${token}`);

  const response = await fetch(`/api/search?query=${query}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  });

  const data = await response.json();

  if (!response.ok) {
    throw { code: response.status, message: data?.message } as ErrorResponse;
    return;
  }

  return data;
};

/**
 * * Update account api
 * @param formData
 * @returns
 */
export const updateAccountApi = async (formData: FormData): Promise<SuccessResponse> => {
  const query = encodeURIComponent(`${ACCOUNT_PATH}/update`);
  const response = await fetch(`/api/search?query=${query}`, {
    method: 'PUT',
    credentials: 'include',
    body: formData
  });

  const data = await response.json();

  if (!response.ok) {
    if (response.status == 400) {
      throw { code: response.status, message: 'Bad Request' } as ErrorResponse;
    }
  }

  return data;
};

export const logoutAuth = async () => {
  const query = encodeURIComponent(`${ACCOUNT_PATH}/logout`);
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_DEV_URL}${ACCOUNT_PATH}/logout`, {
    method: 'GET',
    credentials: 'include'
  });

  return response;
};
