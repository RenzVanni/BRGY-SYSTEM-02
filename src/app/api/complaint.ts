import { COMPLAINT_PATH } from '@/constants/Backend_Slugs';
import { PaginateApiResponse } from '@/types/commonType';

/**
 * * Paginate complaint
 * @param page
 * @param limit
 * @returns
 */
export const paginateComplaintApi = async (page: number, limit: number): Promise<PaginateApiResponse> => {
  const query = encodeURIComponent(`${COMPLAINT_PATH}?page=${page}&limit=${limit}`);
  const response = await fetch(`/api/search?query=${query}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  });

  return await response.json();
};
