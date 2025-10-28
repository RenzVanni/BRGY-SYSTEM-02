import { BlotterColumnModel } from '@/types/blotterType';
import { customColumnDef, CustomColumnDefProp } from '../column_Definition';

const columnData: CustomColumnDefProp[] = [
  { accessorKey: 'victim', title: 'Victim' },
  { accessorKey: 'complainant', title: 'Complainant' },
  { accessorKey: 'respondent', title: 'Respondent' },
  { accessorKey: 'location', title: 'Location' },
  { accessorKey: 'time', title: 'Time' },
  { accessorKey: 'date', title: 'Date' },
  { accessorKey: 'status', title: 'Status' },
  { accessorKey: 'type', title: 'Type' }
];

export const blotterColumn = customColumnDef<BlotterColumnModel>({ prop: columnData });
