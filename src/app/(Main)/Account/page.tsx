'use client';
import { accountColumn } from '@/config/account/accountColumnDef';
import { DataTable } from '@/components/table/data-table';
import React from 'react';
import AccountFormDialog from '@/components/FormDialog/AccountFormDialog';
import { ACCOUNT_PATH } from '@/constants/Backend_Slugs';
import { apiPaginateHooks } from '@/hooks/apiHooks';

const page = () => {
  // const { paginateValue } = useContext(ContextTheme);
  // const { data } = usePaginate(paginateValue, 3, ACCOUNT_PATH);

  // const accounts = data?.data?.map((item) => accountMapperForData(item)) ?? [];
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
