'use client';

import { DataTable } from '@/components/table/data-table';
import { complaintColumn } from '@/config/complaint/complaintColumnDef';
import { COMPLAINT_PATH } from '@/constants/Backend_Slugs';
import { apiPaginateHooks } from '@/hooks/apiHooks';
import React from 'react';

const page = () => {
  const { paginateComplaintHook } = apiPaginateHooks(COMPLAINT_PATH);
  const { payload, pages } = paginateComplaintHook();
  return (
    <>
      <DataTable columns={complaintColumn} data={payload} pages={pages} />
    </>
  );
};

export default page;
