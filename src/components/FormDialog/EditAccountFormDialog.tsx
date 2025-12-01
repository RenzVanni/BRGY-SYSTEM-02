import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent } from '../ui/dialog';
import { CreateResidentHeader, EditResidentHeader } from './components/CustomHeader';
import { Input } from '../ui/input';
import CustomInput from './components/CustomInput';
import CustomButtonGroup from './components/CustomButtonGroup';
import { useContextTheme } from '@/hooks/hooks';
import CustomFile from './components/CustomFile';
import { apiRequestPartHooks } from '@/hooks/useApiHooks';
import { useGet } from '@/hooks/useQuery';
import { ACCOUNT_FETCH_ROLES, RESIDENTS_FIND_BY_NAME_AND_BIRTHDATE } from '@/constants/Backend_Slugs';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import { CheckedState } from '@radix-ui/react-checkbox';
import { useOpenChange } from '@/hooks/useOpenChangeHook';

const EditAccountFormDialog = () => {
  const { residentData, accountData, setAccountData, isFormDialog } = useContextTheme();

  const { id, username, email, resident, role, imgUrl } = accountData;
  const { fullname, birth_date } = resident;
  const { isOpen, dialogBoxType } = isFormDialog;

  const { data } = useGet<string[]>(ACCOUNT_FETCH_ROLES);

  const { handleOpenChange } = useOpenChange();
  const { accountRequestPartHook, isPending } = apiRequestPartHooks();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAccountData((prev) => ({ ...prev, role: ['user'], resident: residentData }));
    accountRequestPartHook();
  };

  const handleChangeRole = (isChecked: CheckedState, role: string) => {
    setAccountData((prev) => ({
      ...prev,
      role: isChecked ? [...prev.role, role] : prev.role.filter((r) => r != role)
    }));
  };
  return (
    <Dialog
      open={dialogBoxType == 'editAccount'}
      onOpenChange={(open) =>
        handleOpenChange({
          isOpen: open,
          type: 'account'
        })
      }>
      <DialogContent className="pt-12" aria-describedby="">
        {dialogBoxType == 'createAccount' && <CreateResidentHeader />}
        {dialogBoxType == 'editAccount' && <EditResidentHeader picture={imgUrl} data={resident} />}

        <form onSubmit={handleSubmit} className="grid gap-4">
          <CustomInput label="Username" name="username" placeholder="Enter Username..." value={username} type="text" />

          <CustomInput label="Email" name="email" placeholder="Enter Email..." value={email} type="text" />

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <Checkbox
                id="user"
                checked={role.includes('user')}
                onCheckedChange={(e) => handleChangeRole(e, 'user')}
              />
              <Label htmlFor="user">User</Label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox
                id="admin"
                checked={role.includes('admin')}
                onCheckedChange={(e) => handleChangeRole(e, 'admin')}
              />
              <Label htmlFor="admin">Admin</Label>
            </div>
          </div>

          <CustomFile setAccountData={setAccountData} />

          <Input type="hidden" name="resident_id" value={resident?.id || 0} />
          <Input type="hidden" name="id" value={id || 0} />

          <CustomButtonGroup isPending={isPending} btnFor="editAccount" />
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditAccountFormDialog;
