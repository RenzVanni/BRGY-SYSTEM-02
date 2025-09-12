"use client";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import { DEFAULT_RESIDENT_DATA } from "@/constants/ResidentDefault";
import { ResidentProp } from "@/props/Resident_Prop";

type Prop = {
  isAddResident: boolean;
  setIsAddResident: Dispatch<SetStateAction<boolean>>;
  isEditResident: boolean;
  setIsEditResident: Dispatch<SetStateAction<boolean>>;
  isCreateCertificate: boolean;
  setIsCreateCertificate: Dispatch<SetStateAction<boolean>>;
  residentData: ResidentProp;
  setResidentData: Dispatch<SetStateAction<ResidentProp>>;
};

const contextDefault: Prop = {
  isAddResident: false,
  setIsAddResident: () => {},
  isEditResident: false,
  setIsEditResident: () => {},
  isCreateCertificate: false,
  setIsCreateCertificate: () => {},
  residentData: {} as ResidentProp,
  setResidentData: () => {},
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
  const [residentData, setResidentData] = useState<ResidentProp>(
    {} as ResidentProp
  );
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
      }}
    >
      {children}
    </ContextTheme.Provider>
  );
};
