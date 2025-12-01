import { AccountType, RegisterAccountRequestDTO } from '@/types/accountType';
import { AccountVerificationResponseDTO } from '@/types/accountVerificationType';
import { BlotterType } from '@/types/blotterType';
import { ComplaintType } from '@/types/complaintType';
import { ContextType } from '@/types/contextType';
import { DisasterAndEmergencyType } from '@/types/disasterAndEmergencyType';
import { HealthAndSanitationType } from '@/types/healthAndSanitationType';
import { IncidentType } from '@/types/incidentType';
import { SendEmailRegistrationAdminDTO } from '@/types/notificationType';
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
  profile_image_url: '',
  created_at: '',
  fullname: ''
};

export const AccountDefaultData: AccountType = {
  id: '',
  username: '',
  email: '',
  resident: ResidentDefaultData,
  role: [],
  imgUrl: ''
};

export const RegisterAccountDefaultData: RegisterAccountRequestDTO = {
  username: '',
  password: '',
  confirmPassword: '',
  token: '',
  role: []
};

export const AccountVerificationResponseDTODefaultData: AccountVerificationResponseDTO = {
  resident: ResidentDefaultData,
  email: ''
};

export const SendEmailRegistrationAdminDefaultData: SendEmailRegistrationAdminDTO = {
  email: '',
  resident_id: 0,
  is_admin: false
};

export const OfficialsDefaultData: OfficialsType = {
  id: 0,
  resident: ResidentDefaultData,
  term_start: '',
  term_end: '',
  position: '',
  imgurl: ''
};

export const BlotterDefaultData: BlotterType = {
  id: 0,
  victim: '',
  complainant: '',
  respondent: '',
  location: '',
  time: '',
  date: '',
  details: '',
  status: '',
  type: ''
};

export const ComplaintDefaultData: ComplaintType = {
  id: 0,
  complainant_name: '',
  complainant_birthdate: '',
  complainant_address: '',
  complainant_contact_no: '',
  respondent_name: '',
  respondent_birthdate: '',
  respondent_address: '',
  respondent_contact_no: '',
  witness_name: '',
  witness_birthdate: '',
  witness_address: '',
  witness_contact_no: '',
  time: '',
  date: '',
  location: '',
  statement_of_complaint: '',
  evidence: '',
  type: '',
  relief: '',
  action: ''
};

export const DisasterAndEmergencyDefaultData: DisasterAndEmergencyType = {
  id: 0,
  date: '',
  time: '',
  location: '',
  reporting_name: '',
  reporting_contact_no: '',
  affected_area: '',
  injured: 0,
  missing: 0,
  displaced: 0,
  casualties: 0,
  damage_assessment: 0,
  follow_up_action: '',
  type: '',
  preparedness: '',
  response: '',
  recovery: '',
  agencies: ''
};

export const HealthAndSanitationDefaultData: HealthAndSanitationType = {
  id: 0,
  reporting_name: '',
  reporting_contact_no: '',
  date: '',
  time: '',
  location: '',
  description: '',
  condition: '',
  recommendations: '',
  endorsement: '',
  concern: '',
  action: ''
};

export const IncidentDefaultData: IncidentType = {
  id: 0,
  complainant_name: '',
  complainant_birthdate: '',
  complainant_address: '',
  complainant_contact_no: '',
  respondent_name: '',
  respondent_birthdate: '',
  respondent_address: '',
  respondent_contact_no: '',
  witness_name: '',
  witness_birthdate: '',
  witness_address: '',
  witness_contact_no: '',
  reporting_name: '',
  reporting_contact_no: '',
  settlement: '',
  recommendations: '',
  date: '',
  time: '',
  location: '',
  type: '',
  action: '',
  official_id: ''
};

export const contextDefaultData: ContextType = {
  residentData: ResidentDefaultData,
  setResidentData: () => {},
  accountData: AccountDefaultData,
  setOfficialsData: () => {},
  officialsData: OfficialsDefaultData,
  setAccountData: () => {},
  blotterData: BlotterDefaultData,
  setBlotterData: () => {},
  complaintData: ComplaintDefaultData,
  setComplaintData: () => {},
  disasterAndEmergencyData: DisasterAndEmergencyDefaultData,
  setDisasterAndEmergencyData: () => {},
  healthAndSanitationData: HealthAndSanitationDefaultData,
  setHealthAndSanitationData: () => {},
  incidentData: IncidentDefaultData,
  setIncidentData: () => {},
  registerAccountData: RegisterAccountDefaultData,
  setRegisterAccountData: () => {},
  sendEmailRegistrationAdmin: SendEmailRegistrationAdminDefaultData,
  setSendEmailRegistrationAdmin: () => {},

  paginateValue: 0,
  setPaginateValue: () => {},
  isFormDialog: { dialogBoxType: 'none', isOpen: false },
  setIsFormDialog: () => {},
  isForgotPasswordOrSignup: { prop: 'none' },
  setIsForgotPasswordOrSignup: () => {},
  previewImg: null,
  setPreviewImg: () => {}
};
