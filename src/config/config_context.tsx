"use client";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import { DEFAULT_RESIDENT_DATA } from "@/constants/Resident_Prop";
import { RESIDENT_PROP } from "@/props/Resident_Prop";
// type Resident_Prop = {
//   id: string;
//   firstName: string;
//   middleName?: string;
//   lastName: string;
//   picture?: string;
//   birthDate: string;
//   birthPlace: string;
//   email?: string;
//   address: string;
//   sex: string;
//   status: string;
// };

type Prop = {
  isAddResident: boolean;
  setIsAddResident: Dispatch<SetStateAction<boolean>>;
  isEditResident: boolean;
  setIsEditResident: Dispatch<SetStateAction<boolean>>;
  isCreateCertificate: boolean;
  setIsCreateCertificate: Dispatch<SetStateAction<boolean>>;
  residentData: RESIDENT_PROP;
  setResidentData: Dispatch<SetStateAction<RESIDENT_PROP>>;
};

const contextDefault: Prop = {
  isAddResident: false,
  setIsAddResident: () => {},
  isEditResident: false,
  setIsEditResident: () => {},
  isCreateCertificate: false,
  setIsCreateCertificate: () => {},
  residentData: DEFAULT_RESIDENT_DATA,
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
  const [residentData, setResidentData] = useState<RESIDENT_PROP>(
    DEFAULT_RESIDENT_DATA
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
