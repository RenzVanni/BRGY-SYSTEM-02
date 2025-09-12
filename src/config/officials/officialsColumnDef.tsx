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
import DataTableColumnHeader from "../../components/table/data-table-header";
import { customColumnDef, CustomColumnDefProp } from "../column_Definition";

export type OfficialsModel = {
  id: number;
  resident_id: number;
  term_start: string;
  term_end: string;
  position: string;
};

const columnData: CustomColumnDefProp[] = [
  { accessorKey: "resident_id", title: "Resident" },
  { accessorKey: "position", title: "Position" },
  { accessorKey: "term_start", title: "Term Start" },
  { accessorKey: "term_end", title: "Term End" },
];

export const officialsColumn: ColumnDef<OfficialsModel>[] =
  customColumnDef<OfficialsModel>({ prop: columnData });
