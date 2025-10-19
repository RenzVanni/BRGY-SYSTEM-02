import { AccountType } from './accountType';
import { OfficialsType } from './officialsType';
import { ResidentType } from './residentsType';

/**
 * ! Main paginate response
 */
export type PaginateApiResponse = {
  data: ResidentType[] | AccountType[] | OfficialsType[];
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
