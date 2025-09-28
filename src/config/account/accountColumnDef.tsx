import { ColumnDef } from "@tanstack/react-table";
import { customColumnDef, CustomColumnDefProp } from "../column_Definition";
import { AccountType } from "@/types/account";

// export type AccountColumnModel = {
//   id: number;
//   username: string;
//   email: string;
//   resident_id: number;
//   role: [string];
// };

const columnData: CustomColumnDefProp[] = [
  { accessorKey: "resident_id", title: "Resident" },
  { accessorKey: "email", title: "Email" },
  { accessorKey: "username", title: "Username" },
  { accessorKey: "role", title: "Role" },
];

export const accountColumn: ColumnDef<AccountType>[] =
  customColumnDef<AccountType>({ prop: columnData });
