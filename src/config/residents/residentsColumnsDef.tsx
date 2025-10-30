'use client';

import { ColumnDef } from '@tanstack/react-table';
import { customColumnDef, CustomColumnDefProp } from '../column_Definition';
import { ResidentColumnModel } from '@/types/residentsType';
import { onEditHook } from '@/hooks/toggleEditHook';
import { RESIDENTS_PATH } from '@/constants/Backend_Slugs';
import { apiHooks } from '@/hooks/apiHooks';
import { DataTable } from '@/components/table/data-table';

const columnData: CustomColumnDefProp[] = [
  { accessorKey: 'name', title: 'Name' },
  { accessorKey: 'gender', title: 'Gender' },
  { accessorKey: 'birth_date', title: 'Birth Date' },
  { accessorKey: 'birth_place', title: 'Birth Place' },
  { accessorKey: 'address', title: 'Address' },
  { accessorKey: 'contact_no', title: 'Contact' },
  { accessorKey: 'voter_status', title: 'Voter Status' },
  { accessorKey: 'citizenship', title: 'Citizenship' },
  { accessorKey: 'civil_status', title: 'Civil Status' },
  { accessorKey: 'osy', title: 'OSY' },
  { accessorKey: 'pwd', title: 'PWD' }
];

// export const ResidentTable = () => {
//   const { toggleEdit } = onEditHook();
//   const { paginateResidentsHook } = apiHooks(RESIDENTS_PATH);
//   const { payload, pages } = paginateResidentsHook();
//   const residentColumn: ColumnDef<ResidentColumnModel>[] = customColumnDef<ResidentColumnModel>({
//     prop: columnData,
//     onEdit: toggleEdit
//   });
//   return <DataTable columns={residentColumn} data={payload} pages={pages} />;
// };
export const residentColumn: ColumnDef<ResidentColumnModel>[] = customColumnDef<ResidentColumnModel>({
  prop: columnData
});
