import { PaginateApiResponse } from '@/types/commonType';

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

  return await response.json();
};

export const mainFindByIdApi = async <T>(id: number | string, path: string): Promise<T> => {
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
