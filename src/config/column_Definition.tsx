'use client';

import { Button } from '@/components/ui/button';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';
import DataTableColumnHeader from '../components/table/data-table-header';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Checkbox } from '@/components/ui/checkbox';
import { ContextTheme } from './config_context';
import { useContext, useEffect, useState } from 'react';
import { fetchResidentById } from '@/app/api/resident_api';
import { ResidentType } from '@/types/residentsType';
import { usePathname } from 'next/navigation';
import { useFindResidentById } from '@/hooks/useQuery';
import { findResidentByIdApi } from '@/app/api/residentApi';
import { findAccountByIdApi } from '@/app/api/accountApi';
import { findOfficialByIdApi } from '@/app/api/officialsApi';

export type CustomColumnDefProp = {
  accessorKey: string;
  title: string;
};

export const customColumnDef = <TDATA extends { id: number | string; resident_id?: number }>({
  prop
}: {
  prop: CustomColumnDefProp[];
}): ColumnDef<TDATA>[] => {
  return [
    {
      id: 'select',
      header: ({ table }) => (
        <div className="flex items-center justify-center">
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ? true : table.getIsSomePageRowsSelected() ? 'indeterminate' : false
            }
            onCheckedChange={(e) => table.toggleAllPageRowsSelected(!!e)}
            aria-label="Select All"
          />
        </div>
      ),
      cell: ({ row }) => (
        <div className="flex items-center justify-center">
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(e) => row.toggleSelected(!!e)}
            aria-label="Select Row"
          />
        </div>
      ),
      enableSorting: false,
      enableHiding: false
    },
    ...prop.map((item) => {
      return {
        accessorKey: item.accessorKey,
        header: ({ column }: { column: any }) => {
          return <DataTableColumnHeader column={column} title={item.title} />;
        }
      };
    }),
    {
      id: 'actions',
      cell: ({ row }) => {
        const path = usePathname();
        const { setResidentData, setIsFormDialog, setAccountData, setOfficialsData } = useContext(ContextTheme);

        const onEdit = async () => {
          if (path == '/Residents') {
            setIsFormDialog({ dialogBoxType: 'editResident', isOpen: true });
            const response = await findResidentByIdApi(row.original.id as number);
            setResidentData(response);
          }
          if (path == '/Account') {
            setIsFormDialog({ dialogBoxType: 'editAccount', isOpen: true });
            const response = await findAccountByIdApi(row.original.id as string);
            setAccountData(response);
          }
          if (path == '/Officials') {
            setIsFormDialog({ dialogBoxType: 'editOfficial', isOpen: true });
            const response = await findOfficialByIdApi(row.original.id as number);
            setOfficialsData(response);
          }
          // let residentId: number;
          // if (row.original.resident_id != null) {
          //   residentId = row.original.resident_id;
          // } else if (typeof row.original.id == "number") {
          //   residentId = row.original.id;
          // }
          // // const { data } = useFindResidentById(residentId);

          // const response = await fetchResidentById(residentId);
          // setResidentData(response);
        };

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem className="font-semibold">View</DropdownMenuItem>
              <DropdownMenuItem className="font-semibold" onClick={onEdit}>
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem className="text-destructive font-semibold">Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      }
    }
  ];
};
