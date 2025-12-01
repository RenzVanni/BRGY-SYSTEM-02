'use client';

import { DataTable } from '@/components/table/data-table';
import { incidentColumn } from '@/config/incident/incidentColumnDef';
import { INCIDENT_PATH } from '@/constants/Backend_Slugs';
import { apiPaginateHooks } from '@/hooks/useApiHooks';
import React from 'react';

const page = () => {
  const { paginateIncidentHook } = apiPaginateHooks(INCIDENT_PATH);
  const { payload, pages } = paginateIncidentHook();
  return (
    <>
      <DataTable columns={incidentColumn} data={payload} pages={pages} />
    </>
  );
};

export default page;
