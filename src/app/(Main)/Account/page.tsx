'use client';
import { accountColumn } from '@/config/account/accountColumnDef';
import { DataTable } from '@/components/table/data-table';
import React from 'react';
import AccountFormDialog from '@/components/FormDialog/AccountFormDialog';
import { ACCOUNT_PATH } from '@/constants/Backend_Slugs';
import { apiPaginateHooks } from '@/hooks/apiHooks';

const page = () => {
  const { paginateAccountsHook } = apiPaginateHooks(ACCOUNT_PATH);
  const { payload, pages } = paginateAccountsHook();
  return (
    <>
      <DataTable columns={accountColumn} data={payload} pages={pages} />

      <AccountFormDialog />
    </>
  );
};

export default page;
