import React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { genderData } from '@/data/gender';
import { Button } from '../ui/button';
import { RegistrationFormType } from '@/types/accountType';
import { Loader2 } from 'lucide-react';

const PersonalDetails = ({
  setIsNext,
  setRegistrationFormData,
  registrationFormData,
  isPending
}: {
  setIsNext: React.Dispatch<React.SetStateAction<number>>;
  setRegistrationFormData: React.Dispatch<React.SetStateAction<RegistrationFormType>>;
  registrationFormData: RegistrationFormType;
  isPending: boolean;
}) => {
  return (
    <>
      <div className="grid gap-2">
        <Label htmlFor="firstname">Firstname</Label>
        <Input
          id="firstname"
          type="text"
          name="firstname"
          placeholder="firstname"
          value={registrationFormData?.firstname}
          onChange={(e) => setRegistrationFormData((prev) => ({ ...prev, firstname: e.target.value }))}
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="middlename">Middlename</Label>
        <Input
          id="middlename"
          type="text"
          name="middlename"
          placeholder="middlename"
          value={registrationFormData?.middlename}
          onChange={(e) => setRegistrationFormData((prev) => ({ ...prev, middlename: e.target.value }))}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="lastname">Lastname</Label>
        <Input
          id="lastname"
          type="text"
          name="lastname"
          placeholder="lastname"
          value={registrationFormData?.lastname}
          onChange={(e) => setRegistrationFormData((prev) => ({ ...prev, lastname: e.target.value }))}
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="gender">Gender</Label>
        <Select
          value={registrationFormData?.gender}
          onValueChange={(e) => setRegistrationFormData((prev) => ({ ...prev, gender: e }))}>
          <SelectTrigger className="col-span-2" id="gender">
            <SelectValue placeholder="Gender" />
          </SelectTrigger>
          <SelectContent>
            {genderData?.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="birth_date">Birth Date</Label>
        <Input
          id="birth_date"
          type="date"
          name="birth_date"
          placeholder="birth_date"
          value={registrationFormData?.birth_date}
          onChange={(e) => setRegistrationFormData((prev) => ({ ...prev, birth_date: e.target.value }))}
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="address">Address</Label>
        <Input
          id="address"
          type="text"
          name="address"
          placeholder="address"
          value={registrationFormData?.address}
          onChange={(e) => setRegistrationFormData((prev) => ({ ...prev, address: e.target.value }))}
          required
        />
      </div>
      <div className="flex justify-between w-full">
        <Button onClick={() => setIsNext(0)} variant="outline" className="cursor-pointer">
          Back
        </Button>
        {isPending ? (
          <Button disabled variant="outline" className="w-fit">
            <Loader2 className="animate-spin" />
            Submit...
          </Button>
        ) : (
          <Button type="submit" variant="outline" className="w-fit">
            Submit
          </Button>
        )}
      </div>
    </>
  );
};

export default PersonalDetails;
