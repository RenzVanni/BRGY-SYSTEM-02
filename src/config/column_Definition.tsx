"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useContext, useState } from "react";
import CustomDialog from "@/components/CustomDialog";
import { format } from "path";
import { ContextTheme } from "./config_context";
import { RESIDENT_PROP } from "@/constants/Resident_Prop";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
];

//Residents Columns
export type Resident = {
  id: string;
  firstname: string;
  middlename: string;
  lastname: string;
  gender: string;
  birthDate: Date;
  birthPlace: string;
  address: string;
  contactNo: string;
  citizenship: string;
  civilStatus: string;
  voterStatus: string;
  osy: string;
  pwd: string;
  profileImageUrl: string;
};

export const ResidentsColumns: ColumnDef<RESIDENT_PROP>[] = [
  {
    accessorKey: "fullname",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Fullname
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const { firstname, middlename, lastname } = row.original;
      return `${firstname} ${
        middlename !== null ? middlename : " "
      } ${lastname}`;
    },
    sortingFn: (rowA, rowB) => {
      const fullnameA = `${rowA.original.firstname} ${
        rowA.original.middlename ?? ""
      } ${rowA.original.lastname}}`;
      const fullnameB = `${rowB.original.firstname} ${
        rowB.original.middlename ?? ""
      } ${rowB.original.lastname}}`;
      return fullnameA.localeCompare(fullnameB);
    },
  },
  {
    accessorKey: "address",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Address
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "placeOfBirth",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Place of Birth
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return row.original.birthPlace;
    },
  },
  {
    accessorKey: "dateOfBirth",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date of Birth
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const formatBirthDate = new Date(row.original.birthDate)
        .toISOString()
        .split("T")[0];
      return formatBirthDate;
    },
  },
  {
    accessorKey: "age",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Age
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const birthDate = new Date(row.original.birthDate);
      const today = new Date();

      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDifference = today.getMonth() - birthDate.getMonth();

      if (
        monthDifference < 0 ||
        (monthDifference === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }
      return age;
    },
  },
  {
    accessorKey: "gender",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Gender
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "civilStatus",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Civil Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return row.original.civilStatus;
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    id: "actions",
    cell: ({ row }) => {
      const {
        id,
        firstname,
        middlename,
        lastname,
        gender,
        birthDate,
        birthPlace,
        address,
        contactNo,
        citizenship,
        civilStatus,
        voterStatus,
        osy,
        pwd,
        profileImageUrl,
      } = row.original;

      const {
        isEditResident,
        setIsEditResident,
        isCreateCertificate,
        setIsCreateCertificate,
        setResidentData,
      } = useContext(ContextTheme);

      const formatBirthDate = new Date(birthDate).toISOString().split("T")[0];
      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-3">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => {
                  setIsEditResident((prev) => !prev);
                  setResidentData({
                    id,
                    firstname,
                    middlename,
                    lastname,
                    gender,
                    birthDate: formatBirthDate,
                    birthPlace,
                    address,
                    contactNo,
                    citizenship,
                    civilStatus,
                    voterStatus,
                    osy,
                    pwd,
                    profileImageUrl,
                  });
                }}
              >
                <span>Edit Resident</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setIsCreateCertificate((prev) => !prev);
                  setResidentData({
                    id,
                    firstname,
                    middlename,
                    lastname,
                    gender,
                    birthDate: formatBirthDate,
                    birthPlace,
                    address,
                    contactNo,
                    citizenship,
                    civilStatus,
                    voterStatus,
                    osy,
                    pwd,
                    profileImageUrl,
                  });
                }}
              >
                <span>Create Certificate</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      );
    },
  },
];
