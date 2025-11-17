import React from 'react';
import { Label } from '../../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';
import { ResidentType } from '@/types/residentsType';
import { OfficialsType } from '@/types/officialsType';

type Prop<T> = {
  label: string;
  name: 'gender' | 'civil_status' | 'position' | 'status' | 'role';
  placeholder: string;
  value: string;
  data: string[];
  setData: React.Dispatch<React.SetStateAction<T>>;
};

const CustomSelect = <T,>(prop: Prop<T>) => {
  const { label, name, placeholder, value, data, setData } = prop;
  return (
    <div className="grid grid-cols-3 items-center gap-2">
      <Label htmlFor={name}>{label}</Label>
      <Select
        value={value ?? ''}
        onValueChange={(e) => {
          setData?.((prev) => ({
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
