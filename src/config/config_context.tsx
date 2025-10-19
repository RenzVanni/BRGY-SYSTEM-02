'use client';
import { createContext, useContext, useState } from 'react';
import { ResidentType } from '@/types/residentsType';
import { AccountDefaultData, contextDefaultData, OfficialsDefaultData, ResidentDefaultData } from '@/data/defaultData';
import { AccountType } from '@/types/accountType';
import { DataIdProp, FormDialogProp } from '@/types/contextType';
import { OfficialsType } from '@/types/officialsType';

export const ContextTheme = createContext(contextDefaultData);
export const customUseContext = () => {
  return useContext(ContextTheme);
};

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [residentData, setResidentData] = useState<ResidentType>(ResidentDefaultData);
  const [accountData, setAccountData] = useState<AccountType>(AccountDefaultData);
  const [officialsData, setOfficialsData] = useState<OfficialsType>(OfficialsDefaultData);
  const [paginateValue, setPaginateValue] = useState(0);
  const [isFormDialog, setIsFormDialog] = useState<FormDialogProp>({
    dialogBoxType: 'none',
    isOpen: false
  });
  const [dataId, setDataId] = useState<DataIdProp>({
    resident: 0,
    account: 0
  } as DataIdProp);
  return (
    <ContextTheme.Provider
      value={{
        residentData,
        setResidentData,
        accountData,
        setAccountData,
        officialsData,
        setOfficialsData,
        paginateValue,
        setPaginateValue,
        isFormDialog,
        setIsFormDialog,
        dataId,
        setDataId
      }}>
      {children}
    </ContextTheme.Provider>
  );
};
