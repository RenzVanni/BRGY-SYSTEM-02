import { PaginateApiResponse, SuccessResponse } from '@/types/commonType';
import { findResidentByIdApi } from './residentApi';
import {
  OfficialsColumnModel,
  OfficialsType,
  UpdateOfficialRequestDTO,
  UpdateOfficialResponseDTO
} from '@/types/officialsType';
import { ResidentType } from '@/types/residentsType';
import { mapResidents } from '@/hooks/mapper';
import { OFFICIALS_PATH } from '@/constants/Backend_Slugs';

export const paginateOfficialsApi = async (page: number, limit: number): Promise<PaginateApiResponse> => {
  const query = encodeURIComponent(`${OFFICIALS_PATH}?page=${page}&limit=${limit}`);
  const response = await fetch(`/api/search?query=${query}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  });

  return await response.json();
};

// find official by id api
export const findOfficialByIdApi = async (id: number): Promise<OfficialsType> => {
  const query = encodeURIComponent(`${OFFICIALS_PATH}/${id}`);
  const response = await fetch(`/api/search?query=${query}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  });

  return await response.json();
};

// update official api
export const updateOfficialApi = async (formData: UpdateOfficialRequestDTO): Promise<SuccessResponse> => {
  const query = encodeURIComponent(`${OFFICIALS_PATH}/update`);
  const response = await fetch(`/api/search?query=${query}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(formData)
  });
  return await response.json();
};
