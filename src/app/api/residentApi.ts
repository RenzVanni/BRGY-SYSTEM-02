import { PaginateApiResponse } from '@/types/commonType';

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
export const updateResidentApi = async (formData: FormData) => {
  const response = await fetch(`/api/search?query=/residents/update`, {
    method: 'PATCH',
    credentials: 'include',
    body: formData
  });
};

// find resident by id api
export const findResidentByIdApi = async (id: number) => {
  const response = await fetch(`/api/search?query=/residents/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  });

  return await response.json();
};
