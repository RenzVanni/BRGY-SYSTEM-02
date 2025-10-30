import React from 'react';
import { Dialog, DialogContent } from '../ui/dialog';
import { CreateResidentHeader, EditResidentHeader } from './components/CustomHeader';
import { Input } from '../ui/input';
import CustomInput from './components/CustomInput';
import CustomSelect from './components/CustomSelect';
import { updateOfficialMutation } from '@/hooks/useMutation';
import { officialsPositionData } from '@/data/officialsPosition';
import CustomButtonGroup from './components/CustomButtonGroup';
import CustomFile from './components/CustomFile';
import { updateHook } from '@/hooks/updateHook';
import { onOpenChangeHook } from '@/hooks/onOpenChangeHook';
import { useContextTheme } from '@/hooks/hooks';

const OfficialsFormDialog = () => {
  const { officialsData, setOfficialsData, isFormDialog } = useContextTheme();
  const { id, resident, term_start, term_end, position, imgurl } = officialsData;
  const { isOpen, dialogBoxType } = isFormDialog;

  const { mutate, isPending } = updateOfficialMutation();

  const { handleOpenChange } = onOpenChangeHook();
  const { onUpdateOfficial } = updateHook();

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) =>
        handleOpenChange({
          isOpen: open,
          type: 'officials'
        })
      }>
      <DialogContent className={`${isOpen && 'pt-12'}`} aria-describedby="">
        {dialogBoxType == 'createOfficial' && <CreateResidentHeader />}
        {dialogBoxType == 'editOfficial' && <EditResidentHeader picture={imgurl} />}

        <form onSubmit={(e) => onUpdateOfficial(e, mutate)} className="grid gap-4">
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

          <CustomFile setOfficialsData={setOfficialsData} />

          <Input type="hidden" name="resident_id" value={resident?.id} />
          <Input type="hidden" name="id" value={id} />

          <CustomButtonGroup isPending={isPending} btnFor="editOfficial" />
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default OfficialsFormDialog;
