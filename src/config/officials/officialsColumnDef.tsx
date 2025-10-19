import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';
import DataTableColumnHeader from '../../components/table/data-table-header';
import { customColumnDef, CustomColumnDefProp } from '../column_Definition';
import { OfficialsColumnModel, OfficialsType } from '@/types/officialsType';

const columnData: CustomColumnDefProp[] = [
  { accessorKey: 'resident', title: 'Resident' },
  { accessorKey: 'position', title: 'Position' },
  { accessorKey: 'term_start', title: 'Term Start' },
  { accessorKey: 'term_end', title: 'Term End' }
];

export const officialsColumn: ColumnDef<OfficialsColumnModel>[] = customColumnDef<OfficialsColumnModel>({
  prop: columnData
});
