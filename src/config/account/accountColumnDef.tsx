import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import DataTableColumnHeader from "../table/data-table-header";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

export const AccountDataDemo = async (): Promise<AccountColumnModel[]> => {
  return [
    {
      id: 1,
      email: "jia@gmail.com",
      username: "jia",
      password: "12345678",
      resident_id: 1,
    },
    {
      id: 2,
      email: "renz@gmail.com",
      username: "renz",
      password: "876287634",
      resident_id: 3,
    },
    {
      id: 3,
      email: "yul@gmail.com",
      username: "yul",
      password: "123409978",
      resident_id: 3,
    },
    {
      id: 4,
      email: "heize@gmail.com",
      username: "heize",
      password: "12345009",
      resident_id: 4,
    },
  ];
};

export type AccountColumnModel = {
  id: number;
  email: string;
  username: string;
  password: string;
  resident_id: number;
};

export const accountColumn: ColumnDef<AccountColumnModel>[] = [
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
      return <DataTableColumnHeader column={column} title="User" />;
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Email" />;
    },
  },
  {
    accessorKey: "username",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Username" />;
    },
  },
  {
    accessorKey: "password",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Password" />;
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
