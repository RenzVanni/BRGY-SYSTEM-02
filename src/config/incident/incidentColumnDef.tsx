import { IncidentColumnModel } from '@/types/incidentType';
import { customColumnDef, CustomColumnDefProp } from '../column_Definition';

const columnData: CustomColumnDefProp[] = [
  { accessorKey: 'complainant_name', title: 'Complainant' },
  { accessorKey: 'respondent_name', title: 'Respondent' },
  { accessorKey: 'witness_name', title: 'Witness' },
  { accessorKey: 'reporting_name', title: 'Reporting' },
  { accessorKey: 'location', title: 'Location' },
  { accessorKey: 'time', title: 'Time' },
  { accessorKey: 'date', title: 'Date' },
  { accessorKey: 'type', title: 'Type' }
];

export const incidentColumn = customColumnDef<IncidentColumnModel>({ prop: columnData });
