import { DisasterAndEmergencyColumnModel } from '@/types/disasterAndEmergencyType';
import { customColumnDef, CustomColumnDefProp } from '../column_Definition';

const columnData: CustomColumnDefProp[] = [
  { accessorKey: 'reporting', title: 'Reporting' },
  { accessorKey: 'location', title: 'Location' },
  { accessorKey: 'time', title: 'Time' },
  { accessorKey: 'date', title: 'Date' },
  { accessorKey: 'injured', title: 'Injured' },
  { accessorKey: 'missing', title: 'Missing' },
  { accessorKey: 'displaced', title: 'Displaced' },
  { accessorKey: 'casualties', title: 'Casualties' },
  { accessorKey: 'damage', title: 'Damage Assessment' },
  { accessorKey: 'type', title: 'Type' }
];

export const disasterAndEmergencyColumn = customColumnDef<DisasterAndEmergencyColumnModel>({ prop: columnData });
