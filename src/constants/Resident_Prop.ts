export type RESIDENT_PROP = {
  id: number;
  firstname: string;
  middlename: string;
  lastname: string;
  gender: string;
  birthDate: string;
  birthPlace: string;
  address: string;
  contactNo: string;
  citizenship: string;
  civilStatus: string;
  voterStatus: string;
  osy: string;
  pwd: string;
  profileImageUrl: string;
};

export const DEFAULT_RESIDENT_DATA: RESIDENT_PROP = {
  id: 0,
  firstname: "",
  middlename: "",
  lastname: "",
  gender: "",
  birthDate: "",
  birthPlace: "",
  address: "",
  contactNo: "",
  citizenship: "",
  civilStatus: "",
  voterStatus: "",
  osy: "",
  pwd: "",
  profileImageUrl: "",
};
