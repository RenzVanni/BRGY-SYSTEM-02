import { RESIDENTS_SEARCH } from '@/constants/Backend_Slugs';
import { RESIDENTS } from '@/constants/navigation';
import { ErrorResponse, PaginateApiResponse } from '@/types/commonType';
import { ResidentType } from '@/types/residentsType';

export const searchResidentsApi = async (name: string, page: number, limit: number): Promise<PaginateApiResponse> => {
  const query = encodeURIComponent(`${RESIDENTS_SEARCH}?name=${name}&page=${page}&limit=${limit}`);

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
