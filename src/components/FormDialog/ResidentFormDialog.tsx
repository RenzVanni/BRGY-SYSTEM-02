import React from 'react';
import { Dialog, DialogContent } from '../ui/dialog';
import { CreateCertificateHeader, CreateResidentHeader, EditResidentHeader } from './components/CustomHeader';
import { Input } from '../ui/input';
import CustomInput from './components/CustomInput';
import CustomSelect from './components/CustomSelect';
import { genderData } from '@/data/gender';
import { civilStatusData } from '@/data/civilStatus';
import CustomFile from './components/CustomFile';
import CustomButtonGroup from './components/CustomButtonGroup';
import { onOpenChangeHook } from '@/hooks/onOpenChangeHook';
import { useContextTheme } from '@/hooks/hooks';
import { apiRequestPartHooks } from '@/hooks/apiHooks';
import { ResidentType } from '@/types/residentsType';

const ResidentFormDialog = () => {
  const { residentData, setResidentData, isFormDialog, setIsFormDialog, previewImg, setPreviewImg } = useContextTheme();
  const { isOpen, dialogBoxType } = isFormDialog;

  const {
    id,
    firstname,
    middlename,
    lastname,
    gender,
    birth_date,
    birth_place,
    address,
    contact_no,
    citizenship,
    civil_status,
    voter_status,
    osy,
    pwd,
    profile_image_url,
    official_id,
    account_id
  } = residentData;

  const { handleOpenChange } = onOpenChangeHook();
  const { residentRequestPartHook, isPending } = apiRequestPartHooks();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    residentRequestPartHook();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => handleOpenChange({ isOpen: open, type: 'resident' })}>
      <DialogContent className={`${isOpen && 'pt-12'}`} aria-describedby="">
        {dialogBoxType == 'createResident' && <CreateResidentHeader />}
        {dialogBoxType == 'editResident' && <EditResidentHeader picture={profile_image_url} data={residentData} />}
        {dialogBoxType == 'createCertificate' && <CreateCertificateHeader />}

        <form onSubmit={handleSubmit} className="grid gap-4">
          <CustomInput
            label="Firstname"
            name="firstname"
            placeholder="Enter First Name..."
            value={firstname}
            type="text"
          />

          <CustomInput
            label="Middlename"
            name="middlename"
            placeholder="Enter Middle Name..."
            value={middlename}
            type="text"
            isRequired={false}
          />

          <CustomInput label="Lastname" name="lastname" placeholder="Enter Last Name..." value={lastname} type="text" />

          <CustomInput label="Address" name="address" placeholder="Enter Address..." value={address} type="text" />

          <CustomInput
            label="Birth Place"
            name="birth_place"
            placeholder="Enter birth place..."
            value={birth_place}
            type="text"
          />

          <CustomInput
            label="Birth Date"
            name="birth_date"
            placeholder="Enter birth date..."
            value={birth_date}
            type="date"
          />

          <CustomSelect<ResidentType>
            label="Gender"
            name="gender"
            placeholder="Select Gender"
            value={gender}
            data={genderData}
            setData={setResidentData}
          />

          <CustomSelect<ResidentType>
            label="Civil Status"
            name="civil_status"
            placeholder="Select Civil Status"
            value={civil_status}
            data={civilStatusData}
            setData={setResidentData}
          />

          <CustomInput
            label="Contact No"
            name="contact_no"
            placeholder="Enter contact no..."
            value={contact_no}
            type="text"
          />

          <CustomInput
            label="Citizenship"
            name="citizenship"
            placeholder="Enter Citizenship..."
            value={citizenship}
            type="text"
          />

          <CustomFile setResidentData={setResidentData} />
          <Input type="hidden" name="id" value={id ?? 0} />

          <CustomButtonGroup isPending={isPending} btnFor="editResident" />
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ResidentFormDialog;
