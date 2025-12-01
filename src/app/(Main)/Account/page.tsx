'use client';
import { accountColumn } from '@/config/account/accountColumnDef';
import { DataTable } from '@/components/table/data-table';
import React from 'react';
import { ACCOUNT_PATH } from '@/constants/Backend_Slugs';
import { apiPaginateHooks } from '@/hooks/useApiHooks';
import EditAccountFormDialog from '@/components/FormDialog/EditAccountFormDialog';
import CreateAccountFormDialog from '@/components/FormDialog/SendRegistrationEmailFormDialog';

const page = () => {
  const { paginateAccountsHook } = apiPaginateHooks(ACCOUNT_PATH);
  const { payload, pages } = paginateAccountsHook();
  return (
    <>
      <DataTable columns={accountColumn} data={payload} pages={pages} />
      <CreateAccountFormDialog />
      <EditAccountFormDialog />
    </>
  );
};

export default page;
