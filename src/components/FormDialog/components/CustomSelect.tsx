import React from 'react';
import { Label } from '../../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';
import { ResidentType } from '@/types/residentsType';
import { OfficialsType } from '@/types/officialsType';

type prop = {
  label: string;
  name: 'gender' | 'civil_status' | 'position' | 'status';
  placeholder: string;
  value: string;
  setResidentData?: React.Dispatch<React.SetStateAction<ResidentType>>;
  setOfficialsData?: React.Dispatch<React.SetStateAction<OfficialsType>>;
  data: string[];
};

const CustomSelect = (prop: prop) => {
  const { label, name, setResidentData, placeholder, value, data, setOfficialsData } = prop;
  return (
    <div className="grid grid-cols-3 items-center gap-2">
      <Label htmlFor={name}>{label}</Label>
      <Select
        value={value ?? ''}
        onValueChange={(e) => {
          setResidentData?.((prev) => ({
            ...prev,
            [name]: e
          }));
          setOfficialsData?.((prev) => ({
            ...prev,
            [name]: e
          }));
        }}
        name={name}>
        <SelectTrigger className="col-span-2" id={name}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {data?.map((item) => (
            <SelectItem key={item} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CustomSelect;
