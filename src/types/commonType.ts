import { AccountType } from './accountType';
import { OfficialsType } from './officialsType';
import { ResidentType } from './residentsType';

export type PaginateApiResponse = {
  data: ResidentType[] | AccountType[] | OfficialsType[];
  pages: number;
};
