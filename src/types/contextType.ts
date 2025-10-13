import { Dispatch, SetStateAction } from "react";
import { ResidentType } from "./residentsType";
import { AccountType } from "./accountType";

export type FormDialogProp = {
  dialogBoxType?:
    | "edit"
    | "editResident"
    | "createResident"
    | "createAccount"
    | "editAccount"
    | "createCertificate"
    | "none";
  isOpen: boolean;
};

export type DataIdProp = {
  resident?: number;
  account?: number;
};

export type ContextType = {
  residentData: ResidentType;
  setResidentData: Dispatch<SetStateAction<ResidentType>>;
  accountData: AccountType;
  setAccountData: Dispatch<SetStateAction<AccountType>>;
  paginateValue: number;
  setPaginateValue: Dispatch<SetStateAction<number>>;
  isFormDialog: FormDialogProp;
  setIsFormDialog: Dispatch<SetStateAction<FormDialogProp>>;
  dataId: DataIdProp;
  setDataId: Dispatch<SetStateAction<DataIdProp>>;
};
