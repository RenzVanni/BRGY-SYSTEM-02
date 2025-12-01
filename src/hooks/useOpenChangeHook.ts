import {
  AccountDefaultData,
  BlotterDefaultData,
  ComplaintDefaultData,
  DisasterAndEmergencyDefaultData,
  HealthAndSanitationDefaultData,
  IncidentDefaultData,
  OfficialsDefaultData,
  ResidentDefaultData
} from '@/data/defaultData';
import { useContextTheme } from './hooks';

type customOnOpenChangePropType = {
  isOpen: boolean;
  type:
    | 'account'
    | 'resident'
    | 'officials'
    | 'blotter'
    | 'complaint'
    | 'disasterAndEmergency'
    | 'healthAndSanitation'
    | 'incident';
};

export const useOpenChange = () => {
  const {
    setPreviewImg,
    setIsFormDialog,
    setAccountData,
    setResidentData,
    setOfficialsData,
    setBlotterData,
    setComplaintData,
    setDisasterAndEmergencyData,
    setHealthAndSanitationData,
    setIncidentData
  } = useContextTheme();

  const handleOpenChange = (prop: customOnOpenChangePropType) => {
    const { type, isOpen } = prop;
    setIsFormDialog({ isOpen: isOpen, dialogBoxType: 'none' });
    setPreviewImg(null);

    if (type == 'account') {
      setAccountData(AccountDefaultData);
    }
    if (type == 'resident') {
      setResidentData(ResidentDefaultData);
    }
    if (type == 'officials') {
      setOfficialsData(OfficialsDefaultData);
    }
    if (type == 'blotter') {
      setBlotterData(BlotterDefaultData);
    }
    if (type == 'complaint') {
      setComplaintData(ComplaintDefaultData);
    }
    if (type == 'disasterAndEmergency') {
      setDisasterAndEmergencyData(DisasterAndEmergencyDefaultData);
    }
    if (type == 'healthAndSanitation') {
      setHealthAndSanitationData(HealthAndSanitationDefaultData);
    }
    if (type == 'incident') {
      setIncidentData(IncidentDefaultData);
    }
  };
  return { handleOpenChange };
};
