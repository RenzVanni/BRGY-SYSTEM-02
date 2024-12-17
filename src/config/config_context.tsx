"use client";
import { createContext, Dispatch, SetStateAction, useState } from "react";

type Resident_Prop = {
  id: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  picture?: string;
  birthDate: string;
  birthPlace: string;
  email?: string;
  address: string;
  sex: string;
  status: string;
};

type Prop = {
  isAddResident: boolean;
  setIsAddResident: Dispatch<SetStateAction<boolean>>;
  isEditResident: boolean;
  setIsEditResident: Dispatch<SetStateAction<boolean>>;
  isCreateCertificate: boolean;
  setIsCreateCertificate: Dispatch<SetStateAction<boolean>>;
  residentData: Resident_Prop;
  setResidentData: Dispatch<SetStateAction<Resident_Prop>>;
};

const contextDefault: Prop = {
  isAddResident: false,
  setIsAddResident: () => {},
  isEditResident: false,
  setIsEditResident: () => {},
  isCreateCertificate: false,
  setIsCreateCertificate: () => {},
  residentData: {
    id: "",
    firstName: "",
    middleName: "",
    lastName: "",
    picture: "",
    birthDate: "",
    birthPlace: "",
    email: "",
    address: "",
    sex: "",
    status: "",
  },
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
  const [residentData, setResidentData] = useState<Resident_Prop>({
    id: "",
    firstName: "",
    middleName: "",
    lastName: "",
    picture: "",
    birthDate: "",
    birthPlace: "",
    email: "",
    address: "",
    sex: "",
    status: "",
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
      }}
    >
      {children}
    </ContextTheme.Provider>
  );
};
