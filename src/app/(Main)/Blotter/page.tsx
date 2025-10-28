'use client';
import { DataTable } from '@/components/table/data-table';
import { blotterColumn } from '@/config/blotter/blotterColumnDef';
import { BLOTTER_PATH } from '@/constants/Backend_Slugs';
import { apiHooks } from '@/hooks/apiHooks';
import React from 'react';

const page = () => {
  const { paginateBlotterHook } = apiHooks(BLOTTER_PATH);
  const { payload, pages } = paginateBlotterHook();
  console.log('payload: ', payload);
  return (
    <>
      <DataTable columns={blotterColumn} data={payload} pages={pages} />
    </>
  );
};

export default page;
