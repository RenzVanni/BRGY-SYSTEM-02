import { usePathname } from 'next/navigation';
import { useContextTheme } from './hooks';
import { ACCOUNT, BLOTTER, COMPLAINT, DAE, HAS, INCIDENT, OFFICIALS, RESIDENTS } from '@/constants/navigation';
import { mainFindByIdApi } from '@/app/api/mainApi';
import { ResidentType } from '@/types/residentsType';
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
import { OfficialsType } from '@/types/officialsType';
import { AccountType } from '@/types/accountType';
import { BlotterType } from '@/types/blotterType';
import { ComplaintType } from '@/types/complaintType';
import { DisasterAndEmergencyType } from '@/types/disasterAndEmergencyType';
import { HealthAndSanitationType } from '@/types/healthAndSanitationType';
import { IncidentType } from '@/types/incidentType';

/**
 * ! Main Toggle Create
 * @returns
 */
export const useToggleCreate = () => {
  const path = usePathname();
  const { setIsFormDialog } = useContextTheme();

  const toggleCreate = () => {
    if (path == RESIDENTS) {
      setIsFormDialog({ dialogBoxType: 'createResident', isOpen: true });
    }
    if (path == ACCOUNT) {
      setIsFormDialog({ dialogBoxType: 'createAccount', isOpen: true });
    }
    if (path == OFFICIALS) {
      setIsFormDialog({ dialogBoxType: 'createOfficial', isOpen: true });
    }
    if (path == BLOTTER) {
      setIsFormDialog({ dialogBoxType: 'createBlotter', isOpen: true });
    }
    if (path == COMPLAINT) {
      setIsFormDialog({ dialogBoxType: 'createComplaint', isOpen: true });
    }
    if (path == DAE) {
      setIsFormDialog({ dialogBoxType: 'createDae', isOpen: true });
    }
    if (path == HAS) {
      setIsFormDialog({ dialogBoxType: 'createHas', isOpen: true });
    }
    if (path == INCIDENT) {
      setIsFormDialog({ dialogBoxType: 'createIncident', isOpen: true });
    }
  };

  return { toggleCreate };
};

/**
 * ! Main Toggle Edit
 * @returns
 */
export const useToggleEdit = () => {
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
  } = useContextTheme();

  const toggleEdit = async (id: any) => {
    if (path == RESIDENTS) {
      setIsFormDialog({ dialogBoxType: 'editResident', isOpen: true });
      const response = await mainFindByIdApi<ResidentType, number>(id, RESIDENTS_PATH);
      setResidentData(response);
    }
    if (path == ACCOUNT) {
      setIsFormDialog({ dialogBoxType: 'editAccount', isOpen: true });
      const response = await mainFindByIdApi<AccountType, string>(id, ACCOUNT_PATH);
      setAccountData(response);
    }
    if (path == OFFICIALS) {
      setIsFormDialog({ dialogBoxType: 'editOfficial', isOpen: true });
      const response = await mainFindByIdApi<OfficialsType, number>(id, OFFICIALS_PATH);
      setOfficialsData(response);
    }
    if (path == BLOTTER) {
      setIsFormDialog({ dialogBoxType: 'editBlotter', isOpen: true });
      const response = await mainFindByIdApi<BlotterType, number>(id, BLOTTER_PATH);
      setBlotterData(response);
    }
    if (path == COMPLAINT) {
      setIsFormDialog({ dialogBoxType: 'editComplaint', isOpen: true });
      const response = await mainFindByIdApi<ComplaintType, number>(id, COMPLAINT_PATH);
      setComplaintData(response);
    }
    if (path == DAE) {
      setIsFormDialog({ dialogBoxType: 'editDae', isOpen: true });
      const response = await mainFindByIdApi<DisasterAndEmergencyType, number>(id, DAE_PATH);
      setDisasterAndEmergencyData(response);
    }
    if (path == HAS) {
      setIsFormDialog({ dialogBoxType: 'editHas', isOpen: true });
      const response = await mainFindByIdApi<HealthAndSanitationType, number>(id, HAS_PATH);
      setHealthAndSanitationData(response);
    }
    if (path == INCIDENT) {
      setIsFormDialog({ dialogBoxType: 'editIncident', isOpen: true });
      const response = await mainFindByIdApi<IncidentType, number>(id, INCIDENT_PATH);
      setIncidentData(response);
    }
  };

  return { toggleEdit };
};
