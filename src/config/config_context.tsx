'use client';
import { createContext, useContext, useState } from 'react';
import { ResidentType } from '@/types/residentsType';
import {
  AccountDefaultData,
  BlotterDefaultData,
  ComplaintDefaultData,
  contextDefaultData,
  DisasterAndEmergencyDefaultData,
  HealthAndSanitationDefaultData,
  IncidentDefaultData,
  OfficialsDefaultData,
  RegisterAccountDefaultData,
  ResidentDefaultData,
  SendEmailRegistrationAdminDefaultData
} from '@/data/defaultData';
import { AccountType, RegisterAccountRequestDTO } from '@/types/accountType';
import { ForgotPasswordOrSignupProp, FormDialogProp } from '@/types/contextType';
import { OfficialsType } from '@/types/officialsType';
import { BlotterType } from '@/types/blotterType';
import { ComplaintType } from '@/types/complaintType';
import { DisasterAndEmergencyType } from '@/types/disasterAndEmergencyType';
import { HealthAndSanitationType } from '@/types/healthAndSanitationType';
import { IncidentType } from '@/types/incidentType';
import { SendEmailRegistrationAdminDTO } from '@/types/notificationType';

export const ContextTheme = createContext(contextDefaultData);

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [residentData, setResidentData] = useState<ResidentType>(ResidentDefaultData);
  const [accountData, setAccountData] = useState<AccountType>(AccountDefaultData);
  const [officialsData, setOfficialsData] = useState<OfficialsType>(OfficialsDefaultData);
  const [blotterData, setBlotterData] = useState<BlotterType>(BlotterDefaultData);
  const [complaintData, setComplaintData] = useState<ComplaintType>(ComplaintDefaultData);
  const [disasterAndEmergencyData, setDisasterAndEmergencyData] = useState<DisasterAndEmergencyType>(
    DisasterAndEmergencyDefaultData
  );
  const [healthAndSanitationData, setHealthAndSanitationData] =
    useState<HealthAndSanitationType>(HealthAndSanitationDefaultData);
  const [incidentData, setIncidentData] = useState<IncidentType>(IncidentDefaultData);
  const [registerAccountData, setRegisterAccountData] = useState<RegisterAccountRequestDTO>(RegisterAccountDefaultData);

  const [paginateValue, setPaginateValue] = useState(0);
  const [isFormDialog, setIsFormDialog] = useState<FormDialogProp>({
    dialogBoxType: 'none',
    isOpen: false
  });
  const [isForgotPasswordOrSignup, setIsForgotPasswordOrSignup] = useState<ForgotPasswordOrSignupProp>({
    prop: 'none'
  });
  const [sendEmailRegistrationAdmin, setSendEmailRegistrationAdmin] = useState<SendEmailRegistrationAdminDTO>(
    SendEmailRegistrationAdminDefaultData
  );

  const [previewImg, setPreviewImg] = useState<string | null>(null);

  return (
    <ContextTheme.Provider
      value={{
        residentData,
        setResidentData,
        accountData,
        setAccountData,
        officialsData,
        setOfficialsData,
        blotterData,
        setBlotterData,
        complaintData,
        setComplaintData,
        disasterAndEmergencyData,
        setDisasterAndEmergencyData,
        healthAndSanitationData,
        setHealthAndSanitationData,
        incidentData,
        setIncidentData,
        registerAccountData,
        setRegisterAccountData,
        sendEmailRegistrationAdmin,
        setSendEmailRegistrationAdmin,
        paginateValue,
        setPaginateValue,
        isFormDialog,
        setIsFormDialog,
        isForgotPasswordOrSignup,
        setIsForgotPasswordOrSignup,
        previewImg,
        setPreviewImg
      }}>
      {children}
    </ContextTheme.Provider>
  );
};
