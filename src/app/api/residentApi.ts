import { PaginateApiResponse, SuccessResponse } from '@/types/commonType';
import { ResidentType } from '@/types/residentsType';

// paginate residents api
export const paginateResidentsApi = async (page: number): Promise<PaginateApiResponse> => {
  const response = await fetch(`/api/search?query=/residents?page=${page}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  });

  return await response.json();
};

// update resident api
export const updateResidentApi = async (formData: FormData): Promise<SuccessResponse> => {
  const response = await fetch(`/api/search?query=/residents/update`, {
    method: 'PATCH',
    credentials: 'include',
    body: formData
  });

  return await response.json();
};

// find resident by id api
export const findResidentByIdApi = async (id: number): Promise<ResidentType> => {
  const response = await fetch(`/api/search?query=/residents/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  });

  return await response.json();
};
