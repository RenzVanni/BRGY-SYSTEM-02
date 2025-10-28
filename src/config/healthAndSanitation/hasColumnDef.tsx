import { HealthAndSanitationColumnModel } from '@/types/healthAndSanitationType';
import { customColumnDef, CustomColumnDefProp } from '../column_Definition';

const columnData: CustomColumnDefProp[] = [
  { accessorKey: 'reporting', title: 'Reporting' },
  { accessorKey: 'location', title: 'Location' },
  { accessorKey: 'time', title: 'Time' },
  { accessorKey: 'date', title: 'Date' }
];

export const healthAndEmergencyColumn = customColumnDef<HealthAndSanitationColumnModel>({ prop: columnData });
