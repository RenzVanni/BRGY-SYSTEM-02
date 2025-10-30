import { ColumnDef } from '@tanstack/react-table';
import { customColumnDef, CustomColumnDefProp } from '../column_Definition';
import { OfficialsColumnModel } from '@/types/officialsType';

const columnData: CustomColumnDefProp[] = [
  { accessorKey: 'resident', title: 'Resident' },
  { accessorKey: 'position', title: 'Position' },
  { accessorKey: 'term_start', title: 'Term Start' },
  { accessorKey: 'term_end', title: 'Term End' }
];

export const officialsColumn: ColumnDef<OfficialsColumnModel>[] = customColumnDef<OfficialsColumnModel>({
  prop: columnData
});
