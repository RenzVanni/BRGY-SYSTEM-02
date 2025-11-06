'use client';
import React from 'react';
import { officialsColumn } from '@/config/officials/officialsColumnDef';
import { DataTable } from '@/components/table/data-table';
import OfficialsFormDialog from '@/components/FormDialog/OfficialsFormDialog';
import { OFFICIALS_PATH } from '@/constants/Backend_Slugs';
import { apiPaginateHooks } from '@/hooks/apiHooks';

const page = () => {
  const { paginateOfficialsHook } = apiPaginateHooks(OFFICIALS_PATH);
  const { payload, pages } = paginateOfficialsHook();
  return (
    <>
      <DataTable columns={officialsColumn} data={payload} pages={pages} />
      <OfficialsFormDialog />
    </>
  );
};

export default page;
