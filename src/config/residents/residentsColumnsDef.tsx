import { ColumnDef } from "@tanstack/react-table";
import { customColumnDef, CustomColumnDefProp } from "../column_Definition";

export type ResidentProp = {
  id: number;
  firstname: string;
  middlename: string;
  lastname: string;
  gender: string;
  birth_date: string;
  birth_place: string;
  address: string;
  contact_no: string;
  voter_status: string;
  citizenship: string;
  civil_status: string;
  osy: boolean;
  pwd: boolean;
  official_id: number;
  account_id: number;
  profile_image_url: string;
};

export type ResidentColumnModel = {
  id: number;
  name: string;
  gender: string;
  birth_date: string;
  birth_place: string;
  address: string;
  contact_no: string;
  voter_status: string;
  citizenship: string;
  civil_status: string;
  osy: boolean;
  pwd: boolean;
};

const columnData: CustomColumnDefProp[] = [
  { accessorKey: "name", title: "Name" },
  { accessorKey: "gender", title: "Gender" },
  { accessorKey: "birth_date", title: "Birth Date" },
  { accessorKey: "birth_place", title: "Birth Place" },
  { accessorKey: "address", title: "Address" },
  { accessorKey: "contact_no", title: "Contact" },
  { accessorKey: "voter_status", title: "Voter Status" },
  { accessorKey: "citizenship", title: "Citizenship" },
  { accessorKey: "civil_status", title: "Civil Status" },
  { accessorKey: "osy", title: "OSY" },
  { accessorKey: "pwd", title: "PWD" },
];

export const residentColumn: ColumnDef<ResidentColumnModel>[] =
  customColumnDef<ResidentColumnModel>({ prop: columnData });
