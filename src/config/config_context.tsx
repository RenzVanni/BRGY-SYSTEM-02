"use client";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import { DEFAULT_RESIDENT_DATA } from "@/constants/ResidentDefault";
import { ResidentProp } from "@/props/Resident_Prop";
import { ResidentDefaultData } from "@/data/defaultData";

type FormDialogProp = {
  dialogBoxType?:
    | "edit"
    | "editResident"
    | "create"
    | "createResident"
    | "createCertificate"
    | "none";
  isOpen: boolean;
};

type Prop = {
  isAddResident: boolean;
  setIsAddResident: Dispatch<SetStateAction<boolean>>;
  isEditResident: boolean;
  setIsEditResident: Dispatch<SetStateAction<boolean>>;
  isCreateCertificate: boolean;
  setIsCreateCertificate: Dispatch<SetStateAction<boolean>>;
  residentData: ResidentProp;
  setResidentData: Dispatch<SetStateAction<ResidentProp>>;
  paginateValue: number;
  setPaginateValue: Dispatch<SetStateAction<number>>;
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  isFormDialog: FormDialogProp;
  setIsFormDialog: Dispatch<SetStateAction<FormDialogProp>>;
};

const contextDefault: Prop = {
  isAddResident: false,
  setIsAddResident: () => {},
  isEditResident: false,
  setIsEditResident: () => {},
  isCreateCertificate: false,
  setIsCreateCertificate: () => {},
  residentData: ResidentDefaultData,
  setResidentData: () => {},
  paginateValue: 0,
  setPaginateValue: () => {},
  isEdit: false,
  setIsEdit: () => {},
  isFormDialog: { dialogBoxType: "none", isOpen: false },
  setIsFormDialog: () => {},
};

export const ContextTheme = createContext(contextDefault);

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isAddResident, setIsAddResident] = useState(false);
  const [isEditResident, setIsEditResident] = useState(false);
  const [isCreateCertificate, setIsCreateCertificate] = useState(false);
  const [residentData, setResidentData] =
    useState<ResidentProp>(ResidentDefaultData);
  const [paginateValue, setPaginateValue] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const [isFormDialog, setIsFormDialog] = useState<FormDialogProp>({
    dialogBoxType: "none",
    isOpen: false,
  });

  return (
    <ContextTheme.Provider
      value={{
        isAddResident,
        setIsAddResident,
        isEditResident,
        setIsEditResident,
        isCreateCertificate,
        setIsCreateCertificate,
        residentData,
        setResidentData,
        paginateValue,
        setPaginateValue,
        isEdit,
        setIsEdit,
        isFormDialog,
        setIsFormDialog,
      }}
    >
      {children}
    </ContextTheme.Provider>
  );
};
