"use client";
import { createContext, Dispatch, SetStateAction, useState } from "react";

type Prop = {
  isAddResident: boolean;
  setIsAddResident: Dispatch<SetStateAction<boolean>>;
  isEditResident: boolean;
  setIsEditResident: Dispatch<SetStateAction<boolean>>;
  isCreateCertificate: boolean;
  setIsCreateCertificate: Dispatch<SetStateAction<boolean>>;
};

const contextDefault: Prop = {
  isAddResident: false,
  setIsAddResident: () => {},
  isEditResident: false,
  setIsEditResident: () => {},
  isCreateCertificate: false,
  setIsCreateCertificate: () => {},
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
  return (
    <ContextTheme.Provider
      value={{
        isAddResident,
        setIsAddResident,
        isEditResident,
        setIsEditResident,
        isCreateCertificate,
        setIsCreateCertificate,
      }}
    >
      {children}
    </ContextTheme.Provider>
  );
};
