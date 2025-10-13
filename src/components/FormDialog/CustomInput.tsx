import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { ResidentType } from "@/types/residentsType";
import { AccountType } from "@/types/accountType";

type Prop = {
  label: string;
  type: "text" | "date" | "email";
  name:
    | "firstname"
    | "middlename"
    | "lastname"
    | "birth_place"
    | "birth_date"
    | "address"
    | "contact_no"
    | "voter_status"
    | "citizenship"
    | "osy"
    | "pwd"
    | "username"
    | "email"
    | "resident_id"
    | "role";
  placeholder?: string;
  value: string | number;
  setResidentData?: React.Dispatch<React.SetStateAction<ResidentType>>;
  setAccountData?: React.Dispatch<React.SetStateAction<AccountType>>;
  isRequired?: boolean;
  isDisabled?: boolean;
};
const CustomInput = (prop: Prop) => {
  const {
    label,
    type,
    name,
    placeholder,
    value,
    setResidentData,
    setAccountData,
    isRequired = true,
    isDisabled = false,
  } = prop;

  return (
    <div className="grid grid-cols-3 items-center gap-2">
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        required={isRequired}
        disabled={isDisabled}
        className="col-span-2"
        value={value ?? ""}
        onChange={(e) => {
          setResidentData((prev) => ({
            ...prev,
            [name]: e.target.value,
          })) ??
            setAccountData((prev) => ({
              ...prev,
              [name]: e.target.value,
            }));
        }}
      />
    </div>
  );
};

export default CustomInput;
