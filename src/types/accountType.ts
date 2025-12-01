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
 * * Register account request DTO
 */
export type RegisterAccountRequestDTO = {
  username: string;
  password: string;
  confirmPassword: string;
  token: string;
  role: string[];
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
 * * Forgot password submission requirements
 */
export type SubmitForgotPasswordFormType = {
  newPassword: string;
  confirmNewPassword: string;
  token: string;
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
