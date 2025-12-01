import React, { useEffect, useRef, useState } from 'react';
import { Dialog, DialogContent } from '../ui/dialog';
import { CreateResidentHeader, EditResidentHeader } from './components/CustomHeader';
import { Input } from '../ui/input';
import CustomInput from './components/CustomInput';
import CustomButtonGroup from './components/CustomButtonGroup';
import { useContextTheme } from '@/hooks/hooks';
import CustomFile from './components/CustomFile';
import { apiRequestBodyHooks, apiRequestPartHooks } from '@/hooks/useApiHooks';
import { useGet, useSearch } from '@/hooks/useQuery';
import {
  ACCOUNT_FETCH_ROLES,
  NOTIFICATIONS_SEND_REGISTRATION_LINK_FROM_ADMIN,
  RESIDENTS_FIND_BY_NAME_AND_BIRTHDATE
} from '@/constants/Backend_Slugs';
import CustomSelect from './components/CustomSelect';
import { AccountType } from '@/types/accountType';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import { CheckedState } from '@radix-ui/react-checkbox';
import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from '../ui/command';
import toast from 'react-hot-toast';
import { onSearchHook } from '@/hooks/customHooks';
import { useOpenChange } from '@/hooks/useOpenChangeHook';
import { SendEmailRegistrationAdminDTO } from '@/types/notificationType';
import { useRequestBodyMutation } from '@/hooks/useMutation';

const CreateAccountFormDialog = () => {
  const {
    isFormDialog,
    residentData,
    setResidentData,
    setRegisterAccountData,
    sendEmailRegistrationAdmin,
    setSendEmailRegistrationAdmin
  } = useContextTheme();
  const { email, is_admin } = sendEmailRegistrationAdmin;

  const { mutate, isPending } = useRequestBodyMutation<SendEmailRegistrationAdminDTO>();

  const { isOpen, dialogBoxType } = isFormDialog;

  const { handleOpenChange } = useOpenChange();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ body: sendEmailRegistrationAdmin, path: NOTIFICATIONS_SEND_REGISTRATION_LINK_FROM_ADMIN, method: 'POST' });
  };
  const { setSearchData, refetch, data: search } = onSearchHook();

  const handleRefetch = (param: string) => {
    setSearchData((prev) => ({ ...prev, name: param }));
    refetch();
  };

  return (
    <Dialog
      open={dialogBoxType == 'createAccount'}
      onOpenChange={(open) =>
        handleOpenChange({
          isOpen: open,
          type: 'account'
        })
      }>
      <DialogContent className="pt-12 lg:!max-w-[1000px] lg:!w-[1000px] lg:flex" aria-describedby="">
        <CreateResidentHeader />

        <form onSubmit={handleSubmit} className="lg:flex gap-12 w-full">
          <div>
            <Command className="border-none bg-transparent">
              <CommandInput placeholder="Search resident..." onValueChange={(e) => handleRefetch(e)} />
              <CommandList className="h-[200px] overflow-y-scroll">
                <CommandEmpty>No results found</CommandEmpty>
                {search?.pages?.map((item) =>
                  item?.data?.map((resident: any) => (
                    <CommandItem
                      key={resident.id}
                      onSelect={() => {
                        setResidentData(resident);
                        setSendEmailRegistrationAdmin((prev) => ({ ...prev, resident_id: resident?.id }));
                      }}
                      className="cursor-pointer">
                      {resident.fullname}
                    </CommandItem>
                  ))
                )}
              </CommandList>
            </Command>
            {/* <div ref={loadMoreRef} className="py-10 text-center">
              {isFetchingNextPage ? 'Loading more...' : 'Scroll to load more'}
            </div> */}
          </div>
          <div className="grid gap-4">
            <CustomInput
              label="Name"
              name="fullname"
              placeholder="Search resident..."
              value={residentData?.fullname}
              type="text"
              isDisabled={true}
            />

            <CustomInput<SendEmailRegistrationAdminDTO>
              label="Email"
              name="email"
              placeholder="Enter Email..."
              value={email}
              type="text"
              setData={setSendEmailRegistrationAdmin}
            />

            <div className="flex items-center gap-3">
              <Checkbox
                id="is_admin"
                checked={sendEmailRegistrationAdmin.is_admin}
                onCheckedChange={(e) =>
                  setSendEmailRegistrationAdmin((prev) => ({ ...prev, is_admin: e ? true : false }))
                }
                className="cursor-pointer"
              />
              <Label htmlFor="is_admin" className="capitalize">
                Admin
              </Label>
            </div>

            <Input type="hidden" name="resident_id" value={residentData?.id || 0} />

            <CustomButtonGroup isPending={isPending} />
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateAccountFormDialog;
