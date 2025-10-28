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
  error: string;
};

/**
 * ! Main update response
 */
export type SuccessResponse = {
  message: string;
};

export type TableColumnData<T> = {
  payload: T[];
  pages: number;
};
