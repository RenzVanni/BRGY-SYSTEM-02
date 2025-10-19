import { MappedResidentType, ResidentType } from './residentsType';

/**
 * * Officials type
 */
export type OfficialsType = {
  id: number;
  resident: ResidentType;
  term_start: string;
  term_end: string;
  position: string;
  imgUrl: string | File;
};

/**
 * * Update official request DTO
 */
export type UpdateOfficialRequestDTO = {
  id: number;
  resident_id: number;
  term_start: string;
  term_end: string;
  position: string;
};

/**
 * * Update official response DTO
 */
export type UpdateOfficialResponseDTO = {
  data: string;
};

/**
 * * Official table column model
 */
export type OfficialsColumnModel = {
  id: number;
  resident: string;
  resident_id: number;
  term_start: string;
  term_end: string;
  position: string;
};
