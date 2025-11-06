'use client';

import { DataTable } from '@/components/table/data-table';
import { healthAndEmergencyColumn } from '@/config/healthAndSanitation/hasColumnDef';
import { HAS_PATH } from '@/constants/Backend_Slugs';
import { apiPaginateHooks } from '@/hooks/apiHooks';
import React from 'react';

const page = () => {
  const { paginateHASHook } = apiPaginateHooks(HAS_PATH);
  const { payload, pages } = paginateHASHook();
  return (
    <>
      <DataTable columns={healthAndEmergencyColumn} data={payload} pages={pages} />
    </>
  );
};

export default page;
