import { ColumnDef } from '@tanstack/react-table';
import { customColumnDef, CustomColumnDefProp } from '../column_Definition';
import { AccountColumnModel, AccountType } from '@/types/accountType';

const columnData: CustomColumnDefProp[] = [
  { accessorKey: 'name', title: 'Resident' },
  { accessorKey: 'email', title: 'Email' },
  { accessorKey: 'username', title: 'Username' },
  { accessorKey: 'role', title: 'Role' }
];

export const accountColumn: ColumnDef<AccountColumnModel>[] = customColumnDef<AccountColumnModel>({ prop: columnData });
