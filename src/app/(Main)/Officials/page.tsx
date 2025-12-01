'use client';
import React from 'react';
import { officialsColumn } from '@/config/officials/officialsColumnDef';
import { DataTable } from '@/components/table/data-table';
import { OFFICIALS_PATH } from '@/constants/Backend_Slugs';
import { apiPaginateHooks } from '@/hooks/useApiHooks';
import CreateOfficialsFormDialog from '@/components/FormDialog/CreateOfficialsFormDialog';
import EditOfficialsFormDialog from '@/components/FormDialog/EditOfficialsFormDialog';

const page = () => {
  const { paginateOfficialsHook } = apiPaginateHooks(OFFICIALS_PATH);
  const { payload, pages } = paginateOfficialsHook();
  return (
    <>
      <DataTable columns={officialsColumn} data={payload} pages={pages} />
      <CreateOfficialsFormDialog />
      <EditOfficialsFormDialog />
    </>
  );
};

export default page;
