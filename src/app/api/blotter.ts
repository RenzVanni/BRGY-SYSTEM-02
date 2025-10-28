import { BLOTTER_PATH } from '@/constants/Backend_Slugs';
import { PaginateApiResponse } from '@/types/commonType';

export const paginateBlotterApi = async (page: number, limit: number): Promise<PaginateApiResponse> => {
  const query = encodeURIComponent(`${BLOTTER_PATH}?page=${page}&limit=${limit}`);
  const response = await fetch(`/api/search?query=${query}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  });

  return await response.json();
};
