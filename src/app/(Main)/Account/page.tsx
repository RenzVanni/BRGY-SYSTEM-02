'use client';
import { accountColumn } from '@/config/account/accountColumnDef';
import { DataTable } from '@/components/table/data-table';
import React, { useContext, useEffect, useState } from 'react';
import { LOGIN } from '@/constants/navigation';
import { AccountColumnModel, AccountType } from '@/types/accountType';
import { useRouter } from 'next/navigation';
import { ContextTheme } from '@/config/config_context';
import { useAccounts, usePaginate } from '@/hooks/useQuery';
import CustomDialog from '@/components/CustomDialog';
import FormDialog from '@/components/FormDialog/ResidentFormDialog';
import { paginateAccountsApi } from '@/app/api/accountApi';
import AccountFormDialog from '@/components/FormDialog/AccountFormDialog';
import { accountMapperForData } from '@/hooks/mapper';
import { ACCOUNT_PATH } from '@/constants/Backend_Slugs';
import { apiHooks } from '@/hooks/apiHooks';

const page = () => {
  // const { paginateValue } = useContext(ContextTheme);
  // const { data } = usePaginate(paginateValue, 3, ACCOUNT_PATH);

  // const accounts = data?.data?.map((item) => accountMapperForData(item)) ?? [];
  const { paginateAccountsHook } = apiHooks(ACCOUNT_PATH);
  const { payload, pages } = paginateAccountsHook();
  return (
    <>
      <DataTable columns={accountColumn} data={payload} pages={pages} />

      <AccountFormDialog />
    </>
  );
};

export default page;
