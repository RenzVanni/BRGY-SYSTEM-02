import { AccountType } from '@/types/accountType';
import { ContextType } from '@/types/contextType';
import { OfficialsType } from '@/types/officialsType';
import { ResidentType } from '@/types/residentsType';

export const ResidentDefaultData: ResidentType = {
  id: 0,
  firstname: '',
  middlename: '',
  lastname: '',
  gender: '',
  birth_date: '',
  birth_place: '',
  address: '',
  contact_no: '',
  voter_status: false,
  citizenship: '',
  civil_status: '',
  osy: false,
  pwd: false,
  official_id: 0,
  account_id: 0,
  profile_image_url: ''
};

export const AccountDefaultData: AccountType = {
  id: '',
  username: '',
  email: '',
  resident: ResidentDefaultData,
  role: [],
  imgUrl: ''
};

export const OfficialsDefaultData: OfficialsType = {
  id: 0,
  resident: ResidentDefaultData,
  term_start: '',
  term_end: '',
  position: '',
  imgUrl: ''
};

export const contextDefaultData: ContextType = {
  residentData: ResidentDefaultData,
  setResidentData: () => {},
  accountData: AccountDefaultData,
  setOfficialsData: () => {},
  officialsData: OfficialsDefaultData,
  setAccountData: () => {},
  paginateValue: 0,
  setPaginateValue: () => {},
  isFormDialog: { dialogBoxType: 'none', isOpen: false },
  setIsFormDialog: () => {},
  dataId: { resident: 0, account: 0 },
  setDataId: () => {}
};
