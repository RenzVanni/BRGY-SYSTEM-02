import { customColumnDef, CustomColumnDefProp } from '../column_Definition';
import { AccountColumnModel } from '@/types/accountType';

const columnData: CustomColumnDefProp[] = [
  { accessorKey: 'name', title: 'Resident' },
  { accessorKey: 'email', title: 'Email' },
  { accessorKey: 'username', title: 'Username' },
  { accessorKey: 'role', title: 'Role' }
];

export const accountColumn = customColumnDef<AccountColumnModel>({ prop: columnData });
