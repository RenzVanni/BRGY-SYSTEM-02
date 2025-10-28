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
import { OfficialsDefaultData, ResidentDefaultData } from '@/data/defaultData';
import { Loader2 } from 'lucide-react';
import { updateOfficialMutation, updateResidentMutation } from '@/hooks/useMutation';
import { AccountType } from '@/types/accountType';
import { OfficialsType } from '@/types/officialsType';
import { officialsPositionData } from '@/data/officialsPosition';
import CustomButtonGroup from './components/CustomButtonGroup';
import { customOnOpenChange, onUpdateOfficial } from '@/hooks/customHooks';
import { useFullname } from '@/hooks/methods';
import CustomFile from './components/CustomFile';

const OfficialsFormDialog = () => {
  const { officialsData, setOfficialsData, isFormDialog, setIsFormDialog, residentData } = useContext(ContextTheme);
  const { id, resident, term_start, term_end, position, imgurl } = officialsData;
  const { isOpen, dialogBoxType } = isFormDialog;
  const fullname = useFullname(resident);

  console.log('Officials: ', officialsData);

  const [previewImg, setPreviewImg] = useState(null);

  const { mutate, isPending } = updateOfficialMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    onUpdateOfficial({ e: e, data: officialsData, mutate: mutate });
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) =>
        customOnOpenChange({
          isOpen: open,
          type: 'officials',
          setIsFormDialog: setIsFormDialog,
          setOfficialsData: setOfficialsData
        })
      }>
      <DialogContent className={`${isOpen && 'pt-12'}`} aria-describedby="">
        {dialogBoxType == 'createOfficial' && <CreateResidentHeader />}
        {dialogBoxType == 'editOfficial' && <EditResidentHeader imageUrl={previewImg || imgurl} fullname={fullname} />}

        <form onSubmit={(e) => handleSubmit(e)} className="grid gap-4">
          <CustomSelect
            label="Position"
            name="position"
            placeholder="Select Position"
            value={position}
            setOfficialsData={setOfficialsData}
            data={officialsPositionData}
          />

          <CustomInput
            label="Term Start"
            name="term_start"
            value={term_start}
            type="date"
            setOfficialsData={setOfficialsData}
          />

          <CustomInput
            label="Term End"
            name="term_end"
            value={term_end}
            type="date"
            setOfficialsData={setOfficialsData}
          />

          <Input
            id="picture"
            type="file"
            onChange={(e) => {
              setPreviewImg(URL.createObjectURL(e.target.files[0]));
              setOfficialsData((prev) => ({
                ...prev,
                imgUrl: e.target.files?.[0]
              }));
            }}
            hidden
          />

          <CustomFile setPreviewImg={setPreviewImg} setOfficialsData={setOfficialsData} />

          <Input type="hidden" name="resident_id" value={resident?.id} />
          <Input type="hidden" name="id" value={id} />

          <CustomButtonGroup isPending={isPending} btnFor="editOfficial" />
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default OfficialsFormDialog;
