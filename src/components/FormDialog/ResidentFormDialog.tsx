import { ContextTheme } from '@/config/config_context';
import { ResidentType } from '@/types/residentsType';
import React, { useActionState, useContext, useEffect, useState } from 'react';
import { Dialog, DialogContent } from '../ui/dialog';
import { CreateCertificateHeader, CreateResidentHeader, EditResidentHeader } from './components/CustomHeader';
import { Input } from '../ui/input';
import CustomInput from './components/CustomInput';
import CustomSelect from './components/CustomSelect';
import { genderData } from '@/data/gender';
import { civilStatusData } from '@/data/civilStatus';
import { Button } from '../ui/button';
import { resident_auth } from '@/app/api/resident_api';
import { ResidentDefaultData } from '@/data/defaultData';
import { Loader2 } from 'lucide-react';
import { updateResidentMutation } from '@/hooks/useMutation';
import { useFindResidentById } from '@/hooks/useQuery';
import { customOnOpenChange, onUpdateAccount, onUpdateResident } from '@/hooks/customHooks';
import { useFullname } from '@/hooks/methods';
import CustomFile from './components/CustomFile';
import CustomButtonGroup from './components/CustomButtonGroup';

const ResidentFormDialog = () => {
  const { mutate, isPending } = updateResidentMutation();
  const { residentData, setResidentData, isFormDialog, setIsFormDialog, previewImg, setPreviewImg } =
    useContext(ContextTheme);
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

  const fullname = useFullname(residentData);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    onUpdateResident({ e: e, data: residentData, mutate: mutate });
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) =>
        customOnOpenChange({
          isOpen: open,
          type: 'resident',
          setIsFormDialog: setIsFormDialog,
          setResidentData: setResidentData
        })
      }>
      <DialogContent className={`${isOpen && 'pt-12'}`} aria-describedby="">
        {dialogBoxType == 'createResident' && <CreateResidentHeader />}
        {dialogBoxType == 'editResident' && (
          <EditResidentHeader imageUrl={previewImg || profile_image_url} fullname={fullname} />
        )}
        {dialogBoxType == 'createCertificate' && <CreateCertificateHeader />}

        <form onSubmit={(e) => handleSubmit(e)} className="grid gap-4">
          <CustomInput
            label="Firstname"
            name="firstname"
            placeholder="Enter First Name..."
            value={firstname}
            type="text"
            setResidentData={setResidentData}
          />

          <CustomInput
            label="Middlename"
            name="middlename"
            placeholder="Enter Middle Name..."
            value={middlename}
            type="text"
            setResidentData={setResidentData}
            isRequired={false}
          />

          <CustomInput
            label="Lastname"
            name="lastname"
            placeholder="Enter Last Name..."
            value={lastname}
            type="text"
            setResidentData={setResidentData}
          />

          <CustomInput
            label="Address"
            name="address"
            placeholder="Enter Address..."
            value={address}
            type="text"
            setResidentData={setResidentData}
          />

          <CustomInput
            label="Birth Place"
            name="birth_place"
            placeholder="Enter birth place..."
            value={birth_place}
            type="text"
            setResidentData={setResidentData}
          />

          <CustomInput
            label="Birth Date"
            name="birth_date"
            placeholder="Enter birth date..."
            value={birth_date}
            type="date"
            setResidentData={setResidentData}
          />

          <CustomSelect
            label="Gender"
            name="gender"
            placeholder="Select Gender"
            value={gender}
            setResidentData={setResidentData}
            data={genderData}
          />

          <CustomSelect
            label="Civil Status"
            name="civil_status"
            placeholder="Select Civil Status"
            value={civil_status}
            setResidentData={setResidentData}
            data={civilStatusData}
          />

          <CustomInput
            label="Contact No"
            name="contact_no"
            placeholder="Enter contact no..."
            value={contact_no}
            type="text"
            setResidentData={setResidentData}
          />

          <CustomInput
            label="Citizenship"
            name="citizenship"
            placeholder="Enter Citizenship..."
            value={citizenship}
            type="text"
            setResidentData={setResidentData}
          />

          <CustomFile setPreviewImg={setPreviewImg} setResidentData={setResidentData} />
          <Input type="hidden" name="id" value={id ?? 0} />

          <CustomButtonGroup isPending={isPending} btnFor="editResident" />
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ResidentFormDialog;
