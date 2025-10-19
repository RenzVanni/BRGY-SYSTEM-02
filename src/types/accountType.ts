import { MappedResidentType, ResidentType } from './residentsType';

/**
 * * Account type
 */
export type AccountType = {
  id: string;
  username: string;
  email: string;
  resident: ResidentType;
  role: string[];
  imgUrl: string | File;
};

/**
 * * Login type
 */
export type LoginType = {
  username: string;
  password: string;
};

/**
 * * Update account DTO
 */
export type UpdateAccountRequestDTO = {
  id: string;
  username: string;
  email: string;
  resident_id: number;
  role: string[];
};

/**
 * * Account table column model
 */
export type AccountColumnModel = {
  id: string;
  name: string;
  username: string;
  email: string;
  resident_id: number;
  role: string[];
  imgUrl: string | File;
};
