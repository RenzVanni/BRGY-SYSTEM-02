'use client';
import { accountColumn } from '@/config/account/accountColumnDef';
import { DataTable } from '@/components/table/data-table';
import React, { useContext, useEffect, useState } from 'react';
import { LOGIN } from '@/constants/navigation';
import { AccountType } from '@/types/accountType';
import { useRouter } from 'next/navigation';
import { ContextTheme } from '@/config/config_context';
import { useAccounts } from '@/hooks/useQuery';
import CustomDialog from '@/components/CustomDialog';
import FormDialog from '@/components/FormDialog/ResidentFormDialog';
import { paginateAccountsApi } from '@/app/api/accountApi';
import AccountFormDialog from '@/components/FormDialog/AccountFormDialog';

const page = () => {
  const { paginateValue } = useContext(ContextTheme);

  const { data, error, isPending, isSuccess, status } = useAccounts(paginateValue);

  return (
    <>
      <DataTable columns={accountColumn} data={(data?.data as AccountType[]) ?? []} pages={data?.pages} />

      <AccountFormDialog />
    </>
  );
};

export default page;
