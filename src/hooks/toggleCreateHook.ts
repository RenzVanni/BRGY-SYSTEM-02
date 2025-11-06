import { ACCOUNT, BLOTTER, COMPLAINT, DAE, HAS, INCIDENT, OFFICIALS, RESIDENTS } from '@/constants/navigation';
import { usePathname } from 'next/navigation';
import { useContextTheme } from './hooks';

export const toggleCreateHook = () => {
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
