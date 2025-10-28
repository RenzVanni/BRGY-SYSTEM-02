import { PaginateApiResponse } from '@/types/commonType';

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
