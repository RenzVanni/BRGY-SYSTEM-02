import { ColumnDef } from '@tanstack/react-table';
import { customColumnDef, CustomColumnDefProp } from '../column_Definition';
import { AccountType } from '@/types/accountType';

const columnData: CustomColumnDefProp[] = [
  { accessorKey: 'resident_id', title: 'Resident' },
  { accessorKey: 'email', title: 'Email' },
  { accessorKey: 'username', title: 'Username' },
  { accessorKey: 'role', title: 'Role' }
];

export const accountColumn: ColumnDef<AccountType>[] = customColumnDef<AccountType>({ prop: columnData });
