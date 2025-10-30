'use client';
import React from 'react';
import { officialsColumn } from '@/config/officials/officialsColumnDef';
import { DataTable } from '@/components/table/data-table';
import OfficialsFormDialog from '@/components/FormDialog/OfficialsFormDialog';
import { apiHooks } from '@/hooks/apiHooks';
import { OFFICIALS_PATH } from '@/constants/Backend_Slugs';

const page = () => {
  const { paginateOfficialsHook } = apiHooks(OFFICIALS_PATH);
  const { payload, pages } = paginateOfficialsHook();
  return (
    <>
      <DataTable columns={officialsColumn} data={payload} pages={pages} />
      <OfficialsFormDialog />
    </>
  );
};

export default page;
