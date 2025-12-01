import { AccountColumnModel, AccountType } from './accountType';
import { BlotterType } from './blotterType';
import { ComplaintType } from './complaintType';
import { DisasterAndEmergencyType } from './disasterAndEmergencyType';
import { HealthAndSanitationType } from './healthAndSanitationType';
import { IncidentType } from './incidentType';
import { OfficialsType } from './officialsType';
import { ResidentColumnModel, ResidentType } from './residentsType';

/**
 * ! Main paginate response
 */
export type PaginateApiResponse = {
  data:
    | ResidentType[]
    | AccountType[]
    | OfficialsType[]
    | BlotterType[]
    | ComplaintType[]
    | DisasterAndEmergencyType[]
    | HealthAndSanitationType[]
    | IncidentType[];
  pages: number;
};

/**
 * ! Main error response
 */
export type ErrorResponse = {
  code: number;
  message: string;
};

/**
 * ! Main update response
 */
export type SuccessResponse = {
  message: string;
};

/**
 * ! Main table column definition
 */
export type TableColumnData<T> = {
  payload: T[];
  pages: number;
};

/**
 * ! Main Request Param Type
 */
export type RequestParamType<T> = {
  param: T;
  path: string;
  method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';
};

/**
 * ! Main GET Path Variable
 */
export type GetPathVariableType<T> = {
  id: T;
  path: string;
};

/**
 * ! Main Request Part Type
 */
export type RequestPartType = {
  formdata: FormData;
  path: string;
  method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';
};

/**
 * ! Main Request Body Type
 */
export type RequestBodyType<T> = {
  body: T;
  path: string;
  method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';
};
