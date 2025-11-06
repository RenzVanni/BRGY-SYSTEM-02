import { mainFindByIdApi } from '@/app/api/mainApi';
import { ContextTheme } from '@/config/config_context';
import {
  ACCOUNT_PATH,
  BLOTTER_PATH,
  COMPLAINT_PATH,
  DAE_PATH,
  HAS_PATH,
  INCIDENT_PATH,
  OFFICIALS_PATH,
  RESIDENTS_PATH
} from '@/constants/Backend_Slugs';
import { ACCOUNT, BLOTTER, COMPLAINT, DAE, HAS, INCIDENT, OFFICIALS, RESIDENTS } from '@/constants/navigation';
import { AccountType } from '@/types/accountType';
import { BlotterType } from '@/types/blotterType';
import { ComplaintType } from '@/types/complaintType';
import { DisasterAndEmergencyType } from '@/types/disasterAndEmergencyType';
import { HealthAndSanitationType } from '@/types/healthAndSanitationType';
import { IncidentType } from '@/types/incidentType';
import { OfficialsType } from '@/types/officialsType';
import { ResidentType } from '@/types/residentsType';
import { Row } from '@tanstack/react-table';
import { usePathname } from 'next/navigation';
import React, { useContext } from 'react';

export const toggleEditHook = () => {
  const path = usePathname();
  const {
    setIsFormDialog,
    setResidentData,
    setAccountData,
    setOfficialsData,
    setBlotterData,
    setComplaintData,
    setDisasterAndEmergencyData,
    setHealthAndSanitationData,
    setIncidentData
  } = useContext(ContextTheme);

  const toggleEdit = async (id: number | string) => {
    if (path == RESIDENTS) {
      setIsFormDialog({ dialogBoxType: 'editResident', isOpen: true });
      const response = await mainFindByIdApi<ResidentType>(id, RESIDENTS_PATH);
      setResidentData(response);
    }
    if (path == ACCOUNT) {
      setIsFormDialog({ dialogBoxType: 'editAccount', isOpen: true });
      const response = await mainFindByIdApi<AccountType>(id as string, ACCOUNT_PATH);
      setAccountData(response);
    }
    if (path == OFFICIALS) {
      setIsFormDialog({ dialogBoxType: 'editOfficial', isOpen: true });
      const response = await mainFindByIdApi<OfficialsType>(id, OFFICIALS_PATH);
      setOfficialsData(response);
    }
    if (path == BLOTTER) {
      setIsFormDialog({ dialogBoxType: 'editBlotter', isOpen: true });
      const response = await mainFindByIdApi<BlotterType>(id, BLOTTER_PATH);
      setBlotterData(response);
    }
    if (path == COMPLAINT) {
      setIsFormDialog({ dialogBoxType: 'editComplaint', isOpen: true });
      const response = await mainFindByIdApi<ComplaintType>(id, COMPLAINT_PATH);
      setComplaintData(response);
    }
    if (path == DAE) {
      setIsFormDialog({ dialogBoxType: 'editDae', isOpen: true });
      const response = await mainFindByIdApi<DisasterAndEmergencyType>(id, DAE_PATH);
      setDisasterAndEmergencyData(response);
    }
    if (path == HAS) {
      setIsFormDialog({ dialogBoxType: 'editHas', isOpen: true });
      const response = await mainFindByIdApi<HealthAndSanitationType>(id, HAS_PATH);
      setHealthAndSanitationData(response);
    }
    if (path == INCIDENT) {
      setIsFormDialog({ dialogBoxType: 'editIncident', isOpen: true });
      const response = await mainFindByIdApi<IncidentType>(id, INCIDENT_PATH);
      setIncidentData(response);
    }
  };

  return { toggleEdit };
};
