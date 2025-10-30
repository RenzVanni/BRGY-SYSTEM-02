'use client';
import ResidentFormDialog from '@/components/FormDialog/ResidentFormDialog';
import { DataTable } from '@/components/table/data-table';
import { residentColumn } from '@/config/residents/residentsColumnsDef';
import { RESIDENTS_PATH } from '@/constants/Backend_Slugs';
import { apiHooks } from '@/hooks/apiHooks';
import React from 'react';

const page = () => {
  const { paginateResidentsHook } = apiHooks(RESIDENTS_PATH);
  const { payload, pages } = paginateResidentsHook();
  return (
    <>
      <DataTable columns={residentColumn} data={payload} pages={pages} />

      <ResidentFormDialog />
    </>
  );
};

export default page;
