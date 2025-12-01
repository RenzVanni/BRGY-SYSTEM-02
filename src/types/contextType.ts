import { Dispatch, SetStateAction } from 'react';
import { ResidentType } from './residentsType';
import { AccountType, RegisterAccountRequestDTO } from './accountType';
import { OfficialsType } from './officialsType';
import { BlotterType } from './blotterType';
import { ComplaintType } from './complaintType';
import { DisasterAndEmergencyType } from './disasterAndEmergencyType';
import { HealthAndSanitationType } from './healthAndSanitationType';
import { IncidentType } from './incidentType';
import { SendEmailRegistrationAdminDTO } from './notificationType';

export type FormDialogProp = {
  dialogBoxType?:
    | 'edit'
    | 'editResident'
    | 'createResident'
    | 'createAccount'
    | 'editAccount'
    | 'createOfficial'
    | 'editOfficial'
    | 'createBlotter'
    | 'editBlotter'
    | 'createComplaint'
    | 'editComplaint'
    | 'createDae'
    | 'editDae'
    | 'createHas'
    | 'editHas'
    | 'createIncident'
    | 'editIncident'
    | 'createCertificate'
    | 'none';
  isOpen: boolean;
};

export type ForgotPasswordOrSignupProp = {
  prop?: 'none' | 'forgotPassword' | 'signup';
};

export type ContextType = {
  residentData: ResidentType;
  setResidentData: Dispatch<SetStateAction<ResidentType>>;
  accountData: AccountType;
  setAccountData: Dispatch<SetStateAction<AccountType>>;
  officialsData: OfficialsType;
  setOfficialsData: Dispatch<SetStateAction<OfficialsType>>;
  blotterData: BlotterType;
  setBlotterData: Dispatch<SetStateAction<BlotterType>>;
  complaintData: ComplaintType;
  setComplaintData: Dispatch<SetStateAction<ComplaintType>>;
  disasterAndEmergencyData: DisasterAndEmergencyType;
  setDisasterAndEmergencyData: Dispatch<SetStateAction<DisasterAndEmergencyType>>;
  healthAndSanitationData: HealthAndSanitationType;
  setHealthAndSanitationData: Dispatch<SetStateAction<HealthAndSanitationType>>;
  incidentData: IncidentType;
  setIncidentData: Dispatch<SetStateAction<IncidentType>>;
  registerAccountData: RegisterAccountRequestDTO;
  setRegisterAccountData: Dispatch<SetStateAction<RegisterAccountRequestDTO>>;
  sendEmailRegistrationAdmin: SendEmailRegistrationAdminDTO;
  setSendEmailRegistrationAdmin: Dispatch<SetStateAction<SendEmailRegistrationAdminDTO>>;

  paginateValue: number;
  setPaginateValue: Dispatch<SetStateAction<number>>;
  isFormDialog: FormDialogProp;
  setIsFormDialog: Dispatch<SetStateAction<FormDialogProp>>;
  isForgotPasswordOrSignup: ForgotPasswordOrSignupProp;
  setIsForgotPasswordOrSignup: Dispatch<SetStateAction<ForgotPasswordOrSignupProp>>;
  previewImg: string;
  setPreviewImg: Dispatch<string>;
};
