import { mainFindByIdApi } from '@/app/api/mainApi';
import { ContextTheme } from '@/config/config_context';
import { ACCOUNT_PATH, OFFICIALS_PATH, RESIDENTS_PATH } from '@/constants/Backend_Slugs';
import { ACCOUNT, OFFICIALS, RESIDENTS } from '@/constants/navigation';
import { AccountType } from '@/types/accountType';
import { OfficialsType } from '@/types/officialsType';
import { ResidentType } from '@/types/residentsType';
import { Row } from '@tanstack/react-table';
import { usePathname } from 'next/navigation';
import React, { useContext } from 'react';

export const toggleEditHook = () => {
  const path = usePathname();
  const { setResidentData, setIsFormDialog, setAccountData, setOfficialsData } = useContext(ContextTheme);
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
  };

  return { toggleEdit };
};
