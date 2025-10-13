import { AccountType } from "@/types/accountType";
import { ContextType } from "@/types/contextType";
import { ResidentType } from "@/types/residentsType";

export const ResidentDefaultData: ResidentType = {
  id: 0,
  firstname: "",
  middlename: "",
  lastname: "",
  gender: "",
  birth_date: "",
  birth_place: "",
  address: "",
  contact_no: "",
  voter_status: false,
  citizenship: "",
  civil_status: "",
  osy: false,
  pwd: false,
  official_id: 0,
  account_id: 0,
  profile_image_url: "",
};

export const AccountDefaultData: AccountType = {
  id: "",
  username: "",
  email: "",
  resident_id: 0,
  role: [],
  imgUrl: "",
};

export const contextDefaultData: ContextType = {
  residentData: ResidentDefaultData,
  setResidentData: () => {},
  accountData: AccountDefaultData,
  setAccountData: () => {},
  paginateValue: 0,
  setPaginateValue: () => {},
  isFormDialog: { dialogBoxType: "none", isOpen: false },
  setIsFormDialog: () => {},
  dataId: { resident: 0, account: 0 },
  setDataId: () => {},
};
