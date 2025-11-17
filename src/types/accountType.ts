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
 * * Account request DTO
 */
export type AccountRequestDTO = {
  username: string;
  email: string;
  resident_id: number;
  birth_date: string;
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
 * * Registration form requirements
 */
export type RegistrationFormType = {
  username: string;
  email: string;
  firstname: string;
  middlename?: string;
  lastname: string;
  password: string;
  confirmPassword: string;
  token: string;
  gender: string;
  address: string;
  birth_date: string;
};

/**
 * * Registration form submission requirements
 */
export type SubmitRegistrationFormType = {
  username: string;
  email: string;
  firstname: string;
  middlename?: string;
  lastname: string;
  password: string;
  confirmPassword: string;
  token: string;
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
