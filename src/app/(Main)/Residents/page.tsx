'use client';
import { formatFetchedResidents } from '@/app/api/resident_api';
import { paginateResidentsApi } from '@/app/api/residentApi';
import CustomDialog from '@/components/CustomDialog';
import ResidentFormDialog from '@/components/FormDialog/ResidentFormDialog';
import { DataTable } from '@/components/table/data-table';
import { ContextTheme } from '@/config/config_context';
import { residentColumn } from '@/config/residents/residentsColumnsDef';
import { RESIDENTS_PATH } from '@/constants/Backend_Slugs';
import { LOGIN } from '@/constants/navigation';
import { apiHooks } from '@/hooks/apiHooks';
import { mapResidents } from '@/hooks/mapper';
import { usePaginate, useResidents } from '@/hooks/useQuery';
import { ResidentColumnModel, ResidentType } from '@/types/residentsType';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';

const page = () => {
  const { paginateResidentsHook } = apiHooks(RESIDENTS_PATH);
  const { payload, pages } = paginateResidentsHook();
  return (
    <>
      <DataTable columns={residentColumn} data={payload} pages={pages} />

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
