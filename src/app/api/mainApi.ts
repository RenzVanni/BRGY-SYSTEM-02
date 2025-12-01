import {
  ErrorResponse,
  PaginateApiResponse,
  RequestBodyType,
  RequestParamType,
  RequestPartType,
  SuccessResponse
} from '@/types/commonType';

/**
 * ! Main Paginate API
 * @param page
 * @param limit
 * @param path
 * @returns
 */
export const mainPaginateApi = async (page: number, limit: number, path: string): Promise<PaginateApiResponse> => {
  const query = encodeURIComponent(`${path}?page=${page}&limit=${limit}`);
  const response = await fetch(`/api/search?query=${query}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  });

  if (!response.ok) {
    if (response.status == 401) {
      throw { code: response.status, message: 'User Does Not Exists' } as ErrorResponse;
    }
  }

  return await response.json();
};

/**
 * ! Main GET
 * @param path
 * @returns
 */
export const mainGetApi = async <T>(path: string): Promise<T> => {
  const query = encodeURIComponent(path);
  const response = await fetch(`/api/search?query=${query}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  });

  return await response.json();
};

/**
 * ! Main Find By ID API
 * @param id
 * @param path
 * @returns
 */
export const mainFindByIdApi = async <TSUCCESS, TDATA>(id: TDATA, path: string): Promise<TSUCCESS> => {
  const query = encodeURIComponent(`${path}/${id}`);

  const response = await fetch(`/api/search?query=${query}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  });

  return await response.json();
};

/**
 * ! Main Request Part API
 * @param formdata
 * @param path
 */
export const mainRequestPartApi = async ({ formdata, path, method }: RequestPartType) => {
  const query = encodeURIComponent(path);
  const response = await fetch(`/api/search?query=${query}`, {
    method: method,
    credentials: 'include',
    body: formdata
  });

  return await response.json();
};

/**
 * ! Main Request Param API
 * @param param
 * @param path
 * @returns
 */
export const mainRequestParamApi = async <TSUCCESS, TPARAM>({
  param,
  path,
  method
}: RequestParamType<TPARAM>): Promise<TSUCCESS> => {
  const query = encodeURIComponent(`${path}?param=${param}`);

  const response = await fetch(`/api/search?query=${query}`, {
    method: method,
    credentials: 'include'
  });

  return await response.json();
};

/**
 * ! Main Request Body API
 * @param body
 * @param path
 * @returns
 */
export const mainRequestBodyApi = async <TDATA>({
  body,
  path,
  method
}: RequestBodyType<TDATA>): Promise<SuccessResponse> => {
  const query = encodeURIComponent(`${path}`);
  const response = await fetch(`/api/search?query=${query}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(body)
  });

  return await response.json();
};
