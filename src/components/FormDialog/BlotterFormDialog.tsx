import React from 'react';
import { Dialog, DialogContent } from '../ui/dialog';
import { useContextTheme } from '@/hooks/hooks';
import { onOpenChangeHook } from '@/hooks/onOpenChangeHook';
import { ReportsHeader } from './components/CustomHeader';
import { Input } from '../ui/input';
import CustomInput from './components/CustomInput';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import CustomSelect from './components/CustomSelect';

const BlotterFormDialog = () => {
  const { isFormDialog, blotterData, setBlotterData } = useContextTheme();
  const { id, victim, complainant, respondent, location, time, date, details, status, type } = blotterData;
  const { isOpen, dialogBoxType } = isFormDialog;
  const { handleOpenChange } = onOpenChangeHook();

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) =>
        handleOpenChange({
          isOpen: open,
          type: 'blotter'
        })
      }>
      <DialogContent className="py-12" aria-describedby="">
        <ReportsHeader />
        <form action="" className="grid gap-4">
          <CustomInput label="Victim Name" name="victim" value={victim} type="text" />
          <CustomInput label="Complainant Name" name="complaint" value={complainant} type="text" />
          <CustomInput label="Respondent Name" name="respondent" value={respondent} type="text" />
          <CustomInput label="Location" name="location" value={location} type="text" />
          <CustomInput label="Time" name="time" value={time} type="time" />
          <CustomInput label="Date" name="date" value={date} type="date" />

          <Label htmlFor="details">Details</Label>
          <Textarea placeholder="Type your message here." id="details" value={details ?? ''} className="h-[150px]" />

          <Input type="hidden" name="id" value={id} />
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BlotterFormDialog;
