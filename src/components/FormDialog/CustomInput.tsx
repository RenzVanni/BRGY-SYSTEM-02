import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { ResidentProp } from "@/props/Resident_Prop";

type Prop = {
  label: string;
  type: "text" | "date";
  name:
    | "birth_place"
    | "birth_date"
    | "address"
    | "contact_no"
    | "voter_status"
    | "citizenship"
    | "osy"
    | "pwd";
  placeholder: string;
  value: string;
  setResidentData: React.Dispatch<React.SetStateAction<ResidentProp>>;
};
const CustomInput = (prop: Prop) => {
  const { label, type, name, placeholder, value, setResidentData } = prop;

  return (
    <div className="grid grid-cols-3 items-center gap-2">
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        required
        className="col-span-2"
        value={value ?? ""}
        onChange={(e) =>
          setResidentData((prev) => ({
            ...prev,
            [name]: e.target.value,
          }))
        }
      />
    </div>
  );
};

export default CustomInput;
