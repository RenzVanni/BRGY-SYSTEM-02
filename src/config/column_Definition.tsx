"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import DataTableColumnHeader from "../components/table/data-table-header";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type CustomColumnDefProp = {
  accessorKey: string;
  title: string;
};

export const customColumnDef = <TDATA,>({
  prop,
}: {
  prop: CustomColumnDefProp[];
}): ColumnDef<TDATA>[] => {
  return [
    {
      id: "select",
      header: ({ table }) => (
        <div className="flex items-center">
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(e) => table.toggleAllPageRowsSelected(!!e)}
            aria-label="Select All"
          />
        </div>
      ),
      cell: ({ row }) => (
        <div className="flex items-center">
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(e) => row.toggleSelected(!!e)}
            aria-label="Select Row"
          />
        </div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    ...prop.map((item) => {
      return {
        accessorKey: item.accessorKey,
        header: ({ column }: { column: any }) => {
          return <DataTableColumnHeader column={column} title={item.title} />;
        },
      };
    }),
    {
      id: "actions",
      cell: ({ row }) => {
        const payment = row.original;

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
              <DropdownMenuItem className="font-semibold">
                View
              </DropdownMenuItem>
              <DropdownMenuItem className="font-semibold">
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem className="text-destructive font-semibold">
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];
};
