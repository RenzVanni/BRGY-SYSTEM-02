import { ComplaintColumnModel } from '@/types/complaintType';
import { customColumnDef, CustomColumnDefProp } from '../column_Definition';

const columnData: CustomColumnDefProp[] = [
  { accessorKey: 'complainant', title: 'Complainant' },
  { accessorKey: 'respondent', title: 'Respondent' },
  { accessorKey: 'witness', title: 'Witness' },
  { accessorKey: 'location', title: 'Location' },
  { accessorKey: 'time', title: 'Time' },
  { accessorKey: 'date', title: 'Date' },
  { accessorKey: 'type', title: 'Type' }
];

export const complaintColumn = customColumnDef<ComplaintColumnModel>({ prop: columnData });
