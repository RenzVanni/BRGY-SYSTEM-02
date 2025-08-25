import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import DataTableColumnHeader from "../table/data-table-header";

export type OfficialsModel = {
  id: number;
  resident_id: number;
  term_start: string;
  term_end: string;
  position: string;
};

export const columns: ColumnDef<OfficialsModel>[] = [
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
  {
    accessorKey: "resident_id",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Officials" />;
    },
  },
  {
    accessorKey: "position",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Position" />;
    },
  },
  {
    accessorKey: "term_start",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Term Start" />;
    },
    // header: "Amount",
    // cell: ({ row }) => {
    //   const amount = parseFloat(row.getValue("amount"));
    //   const formatted = new Intl.NumberFormat("en-US", {
    //     style: "currency",
    //     currency: "PHP",
    //   }).format(amount);

    //   return <div>{formatted}</div>;
    // },
  },
  {
    accessorKey: "term_end",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Term End" />;
    },
  },
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
            <DropdownMenuItem className="font-semibold">View</DropdownMenuItem>
            <DropdownMenuItem className="font-semibold">Edit</DropdownMenuItem>
            <DropdownMenuItem className="text-destructive font-semibold">
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
