"use client";

import { Button } from "@/components/ui/button";
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
import { Checkbox } from "@/components/ui/checkbox";
import { ContextTheme } from "./config_context";
import { useContext, useEffect, useState } from "react";
import { fetchResidentById } from "@/app/api/resident_api";
import { ResidentProp } from "@/props/Resident_Prop";

export type CustomColumnDefProp = {
  accessorKey: string;
  title: string;
};

export const customColumnDef = <
  TDATA extends { id: number | string; resident_id: number }
>({
  prop,
}: {
  prop: CustomColumnDefProp[];
}): ColumnDef<TDATA>[] => {
  return [
    {
      id: "select",
      header: ({ table }) => (
        <div className="flex items-center justify-center">
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected()
                ? true
                : table.getIsSomePageRowsSelected()
                ? "indeterminate"
                : false
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
        // const [data, setData] = useState<ResidentProp>();

        // const fetchy = async () => {
        //   const residentId = row.original.id;

        //   const response = await fetch(
        //     `${process.env.NEXT_PUBLIC_BACKEND_DEV_URL}/residents/${residentId}`,
        //     {
        //       method: "GET",
        //       headers: {
        //         "Content-Type": "application/json",
        //       },
        //       credentials: "include",
        //     }
        //   );

        //   console.log("Actions Edit: ", await response.json());
        // };

        // const resident = async () => {
        //   let residentId: number;
        //   if (row.original.resident_id != null) {
        //     residentId = row.original.resident_id;
        //   } else if (typeof row.original.id == "number") {
        //     residentId = row.original.id;
        //   }
        //   const response = await fetchResidentById(residentId);
        //   setData(response);
        //   console.log("edit resident: ", data);
        // };

        // fetchy();
        // resident();
        const {
          setIsEditResident,
          setResidentData,
          setIsEdit,
          setIsFormDialog,
        } = useContext(ContextTheme);

        const onEdit = async () => {
          setIsFormDialog({ dialogBoxType: "editResident", isOpen: true });
          setIsEditResident(true);
          let residentId: number;
          if (row.original.resident_id != null) {
            residentId = row.original.resident_id;
          } else if (typeof row.original.id == "number") {
            residentId = row.original.id;
          }
          console.log("Edit Data ", row.original);

          const response = await fetchResidentById(residentId);
          console.log("Res ", response);
          // setData(response);
          setResidentData(response);
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
              <DropdownMenuItem className="font-semibold">
                View
              </DropdownMenuItem>
              <DropdownMenuItem className="font-semibold" onClick={onEdit}>
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
