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

/**
 * * Paginate officials
 * @param page
 * @param limit
 * @returns
 */
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

/**
 * * Find official by id
 * @param id
 * @returns
 */
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

/**
 * * Update official
 * @param formData
 * @returns
 */
export const updateOfficialApi = async (formData: FormData): Promise<SuccessResponse> => {
  const query = encodeURIComponent(`${OFFICIALS_PATH}/update`);
  const response = await fetch(`/api/search?query=${query}`, {
    method: 'PATCH',
    credentials: 'include',
    body: formData
  });
  return await response.json();
};
