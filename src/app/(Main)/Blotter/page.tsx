'use client';
import BlotterFormDialog from '@/components/FormDialog/BlotterFormDialog';
import { DataTable } from '@/components/table/data-table';
import { blotterColumn } from '@/config/blotter/blotterColumnDef';
import { BLOTTER_PATH } from '@/constants/Backend_Slugs';
import { apiPaginateHooks } from '@/hooks/useApiHooks';
import React from 'react';

const page = () => {
  const { paginateBlotterHook } = apiPaginateHooks(BLOTTER_PATH);
  const { payload, pages } = paginateBlotterHook();
  console.log('payload: ', payload);
  return (
    <>
      <DataTable columns={blotterColumn} data={payload} pages={pages} />
      <BlotterFormDialog />
    </>
  );
};

export default page;
