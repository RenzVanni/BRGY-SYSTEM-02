import { AccountDefaultData, OfficialsDefaultData, ResidentDefaultData } from '@/data/defaultData';
import { useContextTheme } from './hooks';

type customOnOpenChangePropType = {
  isOpen: boolean;
  type: 'account' | 'resident' | 'officials';
};

export const onOpenChangeHook = () => {
  const { setPreviewImg, setAccountData, setResidentData, setOfficialsData, setIsFormDialog } = useContextTheme();

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
  };
  return { handleOpenChange };
};
