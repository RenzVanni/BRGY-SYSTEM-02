'use client';
import { formatFetchedResidents } from '@/app/api/resident_api';
import { paginateResidentsApi } from '@/app/api/residentApi';
import CustomDialog from '@/components/CustomDialog';
import ResidentFormDialog from '@/components/FormDialog/ResidentFormDialog';
import { DataTable } from '@/components/table/data-table';
import { ContextTheme } from '@/config/config_context';
import { residentColumn } from '@/config/residents/residentsColumnsDef';
import { LOGIN } from '@/constants/navigation';
import { mapResidents } from '@/hooks/mapper';
import { useResidents } from '@/hooks/useQuery';
import { ResidentColumnModel, ResidentType } from '@/types/residentsType';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';

const page = () => {
  const [resident, setResident] = useState<ResidentColumnModel[]>([]);
  // const isResidentPresent = Object.keys(residentData).length > 0;

  const { paginateValue } = useContext(ContextTheme);

  const { data, error, isPending, isSuccess, status } = useResidents(paginateValue);

  useEffect(() => {
    if (isSuccess) {
      const mapped = data?.data?.map((resident) => {
        return mapResidents(resident);
      });
      setResident(mapped);
    }
  }, [isSuccess, data]);

  return (
    <>
      <DataTable columns={residentColumn} data={resident} pages={data?.pages} />

      <ResidentFormDialog />

      {/* {isResidentPresent && (
        <CustomDialog
          isOpen={isAddResident}
          setIsOpen={setIsAddResident}
          is_Add_Resident={true}
          whatsType="create"
        />
      )}

      {isResidentPresent && (
        <CustomDialog
          data={residentData}
          isOpen={isEditResident}
          setIsOpen={setIsEditResident}
          is_Edit_Resident={true}
          whatsType="edit"
        />
      )}

      {isResidentPresent && (
        <CustomDialog
          data={residentData}
          isOpen={isCreateCertificate}
          setIsOpen={setIsCreateCertificate}
          is_Create_Certificate={true}
        />
      )} */}
    </>
  );
};

export default page;
