import React from 'react';
import { Label } from '../../ui/label';
import { Input } from '../../ui/input';
import { ResidentType } from '@/types/residentsType';
import { AccountType } from '@/types/accountType';
import { OfficialsType } from '@/types/officialsType';

type Prop = {
  label: string;
  type: 'text' | 'date' | 'email';
  name?:
    | 'firstname'
    | 'middlename'
    | 'lastname'
    | 'birth_place'
    | 'birth_date'
    | 'address'
    | 'contact_no'
    | 'voter_status'
    | 'citizenship'
    | 'osy'
    | 'pwd'
    | 'username'
    | 'email'
    | 'resident_id'
    | 'role'
    | 'term_start'
    | 'term_end';
  placeholder?: string;
  value: string | number;
  setResidentData?: React.Dispatch<React.SetStateAction<ResidentType>>;
  setAccountData?: React.Dispatch<React.SetStateAction<AccountType>>;
  setOfficialsData?: React.Dispatch<React.SetStateAction<OfficialsType>>;
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
    setOfficialsData,
    isRequired = true,
    isDisabled = false
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
        className="col-span-2 capitalize"
        value={value ?? ''}
        onChange={(e) => {
          setResidentData?.((prev) => ({
            ...prev,
            [name]: e.target.value
          }));
          setAccountData?.((prev) => ({
            ...prev,
            [name]: e.target.value
          }));
          setOfficialsData?.((prev) => ({
            ...prev,
            [name]: e.target.value
          }));
        }}
      />
    </div>
  );
};

export default CustomInput;
