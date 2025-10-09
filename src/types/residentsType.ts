export type ResidentProp = {
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
  profile_image_url: string;
};

export type ResidentApiResponse = {
  data: ResidentProp[];
  pages: number;
};

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
