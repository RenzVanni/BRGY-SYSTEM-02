'use client';

import { DataTable } from '@/components/table/data-table';
import { disasterAndEmergencyColumn } from '@/config/disasterAndEmergency/daeColumnDef';
import { DAE_PATH } from '@/constants/Backend_Slugs';
import { apiPaginateHooks } from '@/hooks/apiHooks';
import React from 'react';

const page = () => {
  const { paginateDAEHook } = apiPaginateHooks(DAE_PATH);
  const { payload, pages } = paginateDAEHook();
  return (
    <>
      <DataTable columns={disasterAndEmergencyColumn} data={payload} pages={pages} />
    </>
  );
};

export default page;
