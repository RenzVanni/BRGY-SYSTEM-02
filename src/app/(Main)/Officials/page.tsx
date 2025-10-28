'use client';
import React, { useContext, useEffect, useState } from 'react';
import { officialsColumn } from '@/config/officials/officialsColumnDef';
import { DataTable } from '@/components/table/data-table';
import { fetchOfficials } from '@/data/DashboardData';
import { OfficialsColumnModel, OfficialsType } from '@/types/officialsType';
import { useFindResidentById, useOfficials } from '@/hooks/useQuery';
import { ContextTheme } from '@/config/config_context';
import { mapResidents } from '@/hooks/mapper';
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
