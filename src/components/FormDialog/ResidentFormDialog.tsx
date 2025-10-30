import React from 'react';
import { Dialog, DialogContent } from '../ui/dialog';
import { CreateCertificateHeader, CreateResidentHeader, EditResidentHeader } from './components/CustomHeader';
import { Input } from '../ui/input';
import CustomInput from './components/CustomInput';
import CustomSelect from './components/CustomSelect';
import { genderData } from '@/data/gender';
import { civilStatusData } from '@/data/civilStatus';
import { updateResidentMutation } from '@/hooks/useMutation';
import CustomFile from './components/CustomFile';
import CustomButtonGroup from './components/CustomButtonGroup';
import { updateHook } from '@/hooks/updateHook';
import { onOpenChangeHook } from '@/hooks/onOpenChangeHook';
import { useContextTheme } from '@/hooks/hooks';

const ResidentFormDialog = () => {
  const { mutate, isPending } = updateResidentMutation();
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
  const { onUpdateResident } = updateHook();

  return (
    <Dialog open={isOpen} onOpenChange={(open) => handleOpenChange({ isOpen: open, type: 'resident' })}>
      <DialogContent className={`${isOpen && 'pt-12'}`} aria-describedby="">
        {dialogBoxType == 'createResident' && <CreateResidentHeader />}
        {dialogBoxType == 'editResident' && <EditResidentHeader picture={profile_image_url} />}
        {dialogBoxType == 'createCertificate' && <CreateCertificateHeader />}

        <form onSubmit={(e) => onUpdateResident(e, mutate)} className="grid gap-4">
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

          <CustomFile setResidentData={setResidentData} />
          <Input type="hidden" name="id" value={id ?? 0} />

          <CustomButtonGroup isPending={isPending} btnFor="editResident" />
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ResidentFormDialog;
