import React from 'react';
import { Dialog, DialogContent } from '../ui/dialog';
import { CreateResidentHeader, EditResidentHeader } from './components/CustomHeader';
import { Input } from '../ui/input';
import CustomInput from './components/CustomInput';
import { updateAccountMutation } from '@/hooks/useMutation';
import CustomButtonGroup from './components/CustomButtonGroup';
import { useContextTheme } from '@/hooks/hooks';
import CustomFile from './components/CustomFile';
import { updateHook } from '@/hooks/updateHook';
import { onOpenChangeHook } from '@/hooks/onOpenChangeHook';

const AccountFormDialog = () => {
  const { accountData, setAccountData, isFormDialog } = useContextTheme();
  const { id, username, email, resident, role, imgUrl } = accountData;
  const { isOpen, dialogBoxType } = isFormDialog;

  const { mutate, isPending } = updateAccountMutation();

  const { handleOpenChange } = onOpenChangeHook();
  const { onUpdateAccount } = updateHook();

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) =>
        handleOpenChange({
          isOpen: open,
          type: 'account'
        })
      }>
      <DialogContent className={`${isOpen && 'pt-12'}`} aria-describedby="">
        {dialogBoxType == 'createAccount' && <CreateResidentHeader />}
        {dialogBoxType == 'editAccount' && <EditResidentHeader picture={imgUrl} />}

        <form onSubmit={(e) => onUpdateAccount(e, mutate)} className="grid gap-4">
          <CustomInput
            label="Username"
            name="username"
            placeholder="Enter Username..."
            value={username}
            type="text"
            setAccountData={setAccountData}
          />

          <CustomInput
            label="Email"
            name="email"
            placeholder="Enter Email..."
            value={email}
            type="text"
            setAccountData={setAccountData}
          />

          <CustomFile setAccountData={setAccountData} />

          <Input type="hidden" name="resident_id" value={resident?.id ?? 0} />
          <Input type="hidden" name="id" value={id} />

          <CustomButtonGroup isPending={isPending} btnFor="editAccount" />
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AccountFormDialog;
