import { ContextTheme } from '@/config/config_context';
import React, { useContext, useState } from 'react';
import { Dialog, DialogContent } from '../ui/dialog';
import { CreateResidentHeader, EditResidentHeader } from './components/CustomHeader';
import { Input } from '../ui/input';
import CustomInput from './components/CustomInput';
import { updateAccountMutation } from '@/hooks/useMutation';
import CustomButtonGroup from './components/CustomButtonGroup';
import { getFullname } from '@/hooks/methods';
import { customOnOpenChange, onUpdateAccount } from '@/hooks/customHooks';

const AccountFormDialog = () => {
  const { accountData, setAccountData, isFormDialog, setIsFormDialog } = useContext(ContextTheme);
  const { id, username, email, resident, role, imgUrl } = accountData;
  const { isOpen, dialogBoxType } = isFormDialog;
  const fullname = getFullname(resident?.firstname, resident?.middlename, resident?.lastname);

  const { mutate, isPending } = updateAccountMutation();

  const [previewImg, setPreviewImg] = useState(null);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) =>
        customOnOpenChange({
          isOpen: open,
          type: 'account',
          setAccountData: setAccountData,
          setIsFormDialog: setIsFormDialog
        })
      }>
      <DialogContent className={`${isOpen && 'pt-12'}`} aria-describedby="">
        {dialogBoxType == 'createAccount' && <CreateResidentHeader />}
        {dialogBoxType == 'editAccount' && <EditResidentHeader imageUrl={previewImg || imgUrl} fullname={fullname} />}

        <form onSubmit={(e) => onUpdateAccount({ e: e, data: accountData, mutate: mutate })} className="grid gap-4">
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

          <Input
            id="picture"
            type="file"
            onChange={(e) => {
              setPreviewImg(URL.createObjectURL(e.target.files[0]));
              setAccountData((prev) => ({
                ...prev,
                imgUrl: e.target.files?.[0]
              }));
            }}
            hidden
          />

          <Input type="hidden" name="resident_id" value={resident?.id ?? 0} />
          <Input type="hidden" name="id" value={id} />

          <CustomButtonGroup isPending={isPending} btnFor="editAccount" />
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AccountFormDialog;
