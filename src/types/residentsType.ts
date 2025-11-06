/**
 * * Resident type
 */
export type ResidentType = {
  id: number;
  firstname: string;
  middlename: string;
  lastname: string;
  gender: string;
  birth_date: string;
  birth_place: string;
  address: string;
  contact_no: string;
  voter_status: boolean;
  citizenship: string;
  civil_status: string;
  osy: boolean;
  pwd: boolean;
  official_id: number;
  account_id: number;
  profile_image_url: string | File;
  created_at: string;
};

/**
 * * Mapped resident type
 */
export type MappedResidentType = {
  id: number;
  name: string;
  gender: string;
  birth_date: string;
  birth_place: string;
  address: string;
  contact_no: string;
  voter_status: boolean;
  citizenship: string;
  civil_status: string;
  osy: boolean;
  pwd: boolean;
};

/**
 * * Resident table column model
 */
export type ResidentColumnModel = {
  id: number;
  name: string;
  gender: string;
  birth_date: string;
  birth_place: string;
  address: string;
  contact_no: string;
  voter_status: boolean;
  citizenship: string;
  civil_status: string;
  osy: boolean;
  pwd: boolean;
};
