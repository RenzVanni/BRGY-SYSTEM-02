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

const page = () => {
  const [officials, setOfficials] = useState<OfficialsColumnModel[]>([]);
  const { paginateValue } = useContext(ContextTheme);
  const { data, isSuccess, status, error } = useOfficials(paginateValue, 10);

  useEffect(() => {
    if (isSuccess && officials.length <= 0) {
      const officialData = data?.data as OfficialsType[];
      const mappedOfficials = officialData?.map((item) => {
        const { id, resident, term_end, term_start, position } = item;
        const { firstname, middlename, lastname } = item.resident;
        const middlenameValid = middlename ? ' ' + middlename + ' ' : ' ';
        const name = firstname + middlenameValid + lastname;
        return {
          id: id,
          resident: name,
          resident_id: resident.id,
          term_start: term_start,
          term_end: term_end,
          position: position
        };
      });
      setOfficials(mappedOfficials);
    }
  }, [isSuccess]);
  return (
    <>
      <DataTable columns={officialsColumn} data={officials ?? []} pages={data?.pages} />
      <OfficialsFormDialog />
    </>
  );
};

export default page;
