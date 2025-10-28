import { ContextTheme } from '@/config/config_context';
import React, { useContext, useState } from 'react';
import { Dialog, DialogContent } from '../ui/dialog';
import { CreateResidentHeader, EditResidentHeader } from './components/CustomHeader';
import { Input } from '../ui/input';
import CustomInput from './components/CustomInput';
import { updateAccountMutation } from '@/hooks/useMutation';
import CustomButtonGroup from './components/CustomButtonGroup';
import { customOnOpenChange, onUpdateAccount } from '@/hooks/customHooks';
import { useContextTheme } from '@/hooks/hooks';
import { ResidentDefaultData } from '@/data/defaultData';
import { useFullname } from '@/hooks/methods';
import CustomFile from './components/CustomFile';

const AccountFormDialog = () => {
  const { accountData, setAccountData, isFormDialog, setIsFormDialog } = useContextTheme();
  const { id, username, email, resident, role, imgUrl } = accountData;
  const { isOpen, dialogBoxType } = isFormDialog;
  const fullname = useFullname(resident);

  const { mutate, isPending } = updateAccountMutation();

  const [previewImg, setPreviewImg] = useState(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    onUpdateAccount({ e: e, data: accountData, mutate: mutate });
  };
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
        {dialogBoxType == 'editAccount' && (
          <EditResidentHeader imageUrl={previewImg || imgUrl} fullname={fullname} />
        )}

        <form onSubmit={(e) => handleSubmit(e)} className="grid gap-4">
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

          <CustomFile setPreviewImg={setPreviewImg} setAccountData={setAccountData} />

          <Input type="hidden" name="resident_id" value={resident?.id ?? 0} />
          <Input type="hidden" name="id" value={id} />

          <CustomButtonGroup isPending={isPending} btnFor="editAccount" />
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AccountFormDialog;
