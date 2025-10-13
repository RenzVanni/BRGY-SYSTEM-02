"use client";
import { createContext, useState } from "react";
import { ResidentType } from "@/types/residentsType";
import {
  AccountDefaultData,
  contextDefaultData,
  ResidentDefaultData,
} from "@/data/defaultData";
import { AccountType } from "@/types/accountType";
import { DataIdProp, FormDialogProp } from "@/types/contextType";

export const ContextTheme = createContext(contextDefaultData);

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [residentData, setResidentData] =
    useState<ResidentType>(ResidentDefaultData);
  const [accountData, setAccountData] =
    useState<AccountType>(AccountDefaultData);
  const [paginateValue, setPaginateValue] = useState(0);
  const [isFormDialog, setIsFormDialog] = useState<FormDialogProp>({
    dialogBoxType: "none",
    isOpen: false,
  });
  const [dataId, setDataId] = useState<DataIdProp>({
    resident: 0,
    account: 0,
  } as DataIdProp);
  return (
    <ContextTheme.Provider
      value={{
        residentData,
        setResidentData,
        accountData,
        setAccountData,
        paginateValue,
        setPaginateValue,
        isFormDialog,
        setIsFormDialog,
        dataId,
        setDataId,
      }}
    >
      {children}
    </ContextTheme.Provider>
  );
};
