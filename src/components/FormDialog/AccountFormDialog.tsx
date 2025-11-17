import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent } from '../ui/dialog';
import { CreateResidentHeader, EditResidentHeader } from './components/CustomHeader';
import { Input } from '../ui/input';
import CustomInput from './components/CustomInput';
import CustomButtonGroup from './components/CustomButtonGroup';
import { useContextTheme } from '@/hooks/hooks';
import CustomFile from './components/CustomFile';
import { onOpenChangeHook } from '@/hooks/onOpenChangeHook';
import { apiRequestPartHooks } from '@/hooks/apiHooks';
import { useGet } from '@/hooks/useQuery';
import { ACCOUNT_FETCH_ROLES, RESIDENTS_FIND_BY_NAME_AND_BIRTHDATE } from '@/constants/Backend_Slugs';
import CustomSelect from './components/CustomSelect';
import { AccountRequestDTO, AccountType } from '@/types/accountType';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import { CheckedState } from '@radix-ui/react-checkbox';
import { ResidentType } from '@/types/residentsType';
import { useRequestBodyMutation } from '@/hooks/useMutation';
import { RequestBodyType } from '@/types/commonType';
import { AccountFormDefaultData } from '@/data/defaultData';

const AccountFormDialog = () => {
  const { accountData, setAccountData, isFormDialog } = useContextTheme();
  const [accountFormData, setAccountFormData] = useState<AccountRequestDTO>(AccountFormDefaultData);
  const {
    mutate,
    isSuccess,
    data: mutatedData
  } = useRequestBodyMutation<ResidentType, { name: string; birth_date: string }>();

  const [validateResident, setValidateResident] = useState<{ name: string; birth_date: string }>({
    name: '',
    birth_date: ''
  });

  const { id, username, email, resident, role, imgUrl } = accountData;
  const { fullname, birth_date } = resident;
  const { isOpen, dialogBoxType } = isFormDialog;

  const { data } = useGet<string[]>(ACCOUNT_FETCH_ROLES);

  const { handleOpenChange } = onOpenChangeHook();
  const { accountRequestPartHook, isPending } = apiRequestPartHooks();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // e.preventDefault();
    // mutate({ body: {name: accountFormData?.username, birth_date: accountFormData?.birth_date}, path: RESIDENTS_FIND_BY_NAME_AND_BIRTHDATE, method: 'GET' });
    // if (isSuccess) {
    //   setAccountData((prev) => ({ ...prev, role: ['user'], resident: mutatedData }));
    //   accountRequestPartHook();
    // }
  };

  const handleChangeRole = (isChecked: CheckedState, role: string) => {
    // setAccountData((prev) => ({
    //   ...prev,
    //   role: isChecked ? [...prev.role, role] : prev.role.filter((r) => r != role)
    // }));
    // setAccountFormData((prev) => ({
    //   ...prev,
    //   role: isChecked ? [...prev.role, role] : prev.role.filter((r) => r != role)
    // }));
  };
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
        {dialogBoxType == 'editAccount' && <EditResidentHeader picture={imgUrl} data={resident} />}

        <form onSubmit={handleSubmit} className="grid gap-4">
          <CustomInput<{ name: string; birth_date: string }>
            label="Full Name"
            name="name"
            placeholder="Enter Fullname..."
            value={validateResident?.name || fullname}
            type="text"
            setData={setValidateResident}
          />
          <CustomInput<AccountRequestDTO>
            label="Birth Date"
            name="birth_date"
            value={validateResident?.birth_date || birth_date}
            type="date"
            setData={setAccountFormData}
          />
          <CustomInput<AccountRequestDTO>
            label="Username"
            name="username"
            placeholder="Enter Username..."
            value={username}
            type="text"
            setData={setAccountFormData}
          />

          <CustomInput<AccountRequestDTO>
            label="Email"
            name="email"
            placeholder="Enter Email..."
            value={email}
            type="text"
            setData={setAccountFormData}
          />

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

export default AccountFormDialog;
