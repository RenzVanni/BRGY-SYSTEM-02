'use client';
import React, { useContext, useEffect, useState } from 'react';
import { officialsColumn } from '@/config/officials/officialsColumnDef';
import { DataTable } from '@/components/table/data-table';
import { fetchOfficials } from '@/data/DashboardData';
import { OfficialsType } from '@/types/officialsType';
import { useOfficials } from '@/hooks/useQuery';
import { ContextTheme } from '@/config/config_context';

const page = () => {
  // const [data, setData] = useState<OfficialsType[]>([]);
  const { paginateValue } = useContext(ContextTheme);
  const { data } = useOfficials(paginateValue, 10);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setData(await fetchOfficials());
  //   };

  //   fetchData();
  // }, []);
  return (
    <>
      <DataTable columns={officialsColumn} data={(data?.data as OfficialsType[]) ?? []} pages={paginateValue} />
    </>
  );
};

export default page;
