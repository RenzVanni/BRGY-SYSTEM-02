/**
 * * Blotter Type
 */
export type BlotterType = {
  id: number;
  victim: string;
  complainant: string;
  respondent: string;
  location: string;
  time: string;
  date: string;
  details: string;
  status: string;
  type: string;
};

/**
 * * Blotter table column model
 */
export type BlotterColumnModel = {
  id: number;
  victim: string;
  complainant: string;
  respondent: string;
  location: string;
  time: string;
  date: string;
  details: string;
  status: string;
  type: string;
};
