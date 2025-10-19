import { ContextTheme, customUseContext } from '@/config/config_context';
import { AccountDefaultData, OfficialsDefaultData, ResidentDefaultData } from '@/data/defaultData';
import { AccountType, LoginType } from '@/types/accountType';
import { ResidentType } from '@/types/residentsType';
import { Dispatch, SetStateAction, useContext } from 'react';
import { accountMapper } from './mapper';
import { UseMutateFunction } from '@tanstack/react-query';
import { ErrorResponse, SuccessResponse } from '@/types/commonType';
import { FormDialogProp } from '@/types/contextType';
import { OfficialsType } from '@/types/officialsType';
import { FormState, LoginFormSchema } from '@/lib/definitions';

type customOnOpenChangePropType = {
  isOpen: boolean;
  type: 'account' | 'resident' | 'officials';
  setAccountData?: React.Dispatch<React.SetStateAction<AccountType>>;
  setResidentData?: React.Dispatch<React.SetStateAction<ResidentType>>;
  setOfficialsData?: React.Dispatch<React.SetStateAction<OfficialsType>>;
  setIsFormDialog: React.Dispatch<React.SetStateAction<FormDialogProp>>;
};

export const customOnOpenChange = (prop: customOnOpenChangePropType) => {
  const { type, setAccountData, setResidentData, setOfficialsData, setIsFormDialog, isOpen } = prop;

  setIsFormDialog({ isOpen: isOpen, dialogBoxType: 'none' });
  if (type == 'account') {
    setAccountData(AccountDefaultData);
  }
  if (type == 'resident') {
    setResidentData(ResidentDefaultData);
  }
  if (type == 'officials') {
    setOfficialsData(OfficialsDefaultData);
  }
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

/**
 * * UPDATE METHODS
 */

type onUpdateAccountProp = {
  e: React.FormEvent<HTMLFormElement>;
  data: AccountType;
  mutate: UseMutateFunction<SuccessResponse, ErrorResponse, FormData, unknown>;
};

export const onUpdateAccount = (prop: onUpdateAccountProp) => {
  const { e, data, mutate } = prop;
  const { imgUrl } = data;
  e.preventDefault();

  const formData = new FormData();
  if (imgUrl != null) {
    formData.append('file', imgUrl);
  }
  const mappedAccount = accountMapper(data);
  formData.append('body', new Blob([JSON.stringify({ ...mappedAccount })], { type: 'application/json' }));

  mutate(formData);
};

type onUpdateResidentProp = {
  e: React.FormEvent<HTMLFormElement>;
  data: ResidentType;
  mutate: UseMutateFunction<SuccessResponse, ErrorResponse, FormData, unknown>;
};

export const onUpdateResident = async (prop: onUpdateResidentProp) => {
  const { e, data, mutate } = prop;
  const { profile_image_url } = data;
  e.preventDefault();

  const formData = new FormData();
  if (profile_image_url != null) {
    formData.append('file', profile_image_url);
  }
  formData.append(
    'resident',
    new Blob([JSON.stringify({ ...data, profile_image_url: undefined })], {
      type: 'application/json'
    })
  );
  mutate(formData);
};

/**
 * TODO - update officials
 */
type onUpdateOfficialsProp = {
  e: React.FormEvent<HTMLFormElement>;
  data: ResidentType;
  mutate: UseMutateFunction<SuccessResponse, ErrorResponse, FormData, unknown>;
};

// const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();
//   mutate({ id: id, resident_id: resident.id, term_start: term_start, term_end: term_end, position: position });
// };
