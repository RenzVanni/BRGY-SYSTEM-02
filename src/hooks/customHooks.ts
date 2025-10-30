import { AccountDefaultData, OfficialsDefaultData, ResidentDefaultData } from '@/data/defaultData';
import { AccountType, LoginType } from '@/types/accountType';
import { ResidentType } from '@/types/residentsType';
import { Dispatch, SetStateAction, useContext } from 'react';
import { accountMapper, updateOfficialRequestDTOMapper } from './mapper';
import { UseMutateFunction } from '@tanstack/react-query';
import { ErrorResponse, SuccessResponse } from '@/types/commonType';
import { FormDialogProp } from '@/types/contextType';
import { OfficialsType } from '@/types/officialsType';
import { FormState, LoginFormSchema } from '@/lib/definitions';
import { useContextTheme } from './hooks';
import { updateResidentMutation } from './useMutation';

export const useFullname = () => {
  const { residentData, accountData, officialsData } = useContextTheme();
  let data = residentData ?? accountData?.resident ?? officialsData?.resident;

  if (!data) return '';
  const { firstname, middlename, lastname } = data;

  const checkMiddleName = middlename == undefined ? ' ' : ' ' + middlename + ' ';
  return firstname + checkMiddleName + lastname;
};

/**
 * * Login Method
 */
type onLoginProp = {
  e: React.FormEvent<HTMLFormElement>;
  mutate: UseMutateFunction<SuccessResponse, ErrorResponse, FormData, unknown>;
};

export const onLogin = (prop: onLoginProp): FormState => {
  const { e, mutate } = prop;
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const username = formData.get('username');
  const password = formData.get('password');

  const validateFields = LoginFormSchema.safeParse({
    username: username,
    password: password
  });

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors
    };
  }

  mutate(formData);
  return {};
};