'use client';

import { Button } from '@/components/ui/button';
import { ResidentType } from '@/types/residentsType';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';
import { useContext } from 'react';
import { ContextTheme } from '../config_context';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

//Residents Columns
export const ResidentsColumns: ColumnDef<ResidentType>[] = [
  {
    accessorKey: 'fullname',
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Fullname
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const { firstname, middlename, lastname } = row.original;
      return `${firstname} ${middlename !== null ? middlename : ' '} ${lastname}`;
    },
    sortingFn: (rowA, rowB) => {
      const fullnameA = `${rowA.original.firstname} ${rowA.original.middlename ?? ''} ${rowA.original.lastname}}`;
      const fullnameB = `${rowB.original.firstname} ${rowB.original.middlename ?? ''} ${rowB.original.lastname}}`;
      return fullnameA.localeCompare(fullnameB);
    }
  },
  {
    accessorKey: 'address',
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Address
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    }
  },
  {
    accessorKey: 'placeOfBirth',
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Place of Birth
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return row.original.birth_place;
    }
  },
  {
    accessorKey: 'dateOfBirth',
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Date of Birth
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const formatBirthDate = new Date(row.original.birth_date).toISOString().split('T')[0];
      return formatBirthDate;
    }
  },
  {
    accessorKey: 'age',
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Age
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const birthDate = new Date(row.original.birth_date);
      const today = new Date();

      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDifference = today.getMonth() - birthDate.getMonth();

      if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    }
  },
  {
    accessorKey: 'gender',
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Gender
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return row.original.gender;
    }
  },
  {
    accessorKey: 'civilStatus',
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Civil Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return row.original.civil_status;
    }
  },
  {
    accessorKey: 'actions',
    header: 'Actions',
    id: 'actions',
    cell: ({ row }) => {
      const {
        id,
        firstname,
        middlename,
        lastname,
        gender,
        birth_date,
        birth_place,
        address,
        contact_no,
        citizenship,
        civil_status,
        voter_status,
        osy,
        pwd,
        official_id,
        account_id,
        profile_image_url
      } = row.original;

      const { setResidentData } = useContext(ContextTheme);

      const formatBirthDate = new Date(birth_date).toISOString().split('T')[0];
      const setResidentValue = {
        id,
        firstname,
        middlename,
        lastname,
        gender,
        birth_date: formatBirthDate,
        birth_place,
        address,
        contact_no,
        citizenship,
        civil_status,
        voter_status,
        osy,
        pwd,
        official_id,
        account_id,
        profile_image_url
      };

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
                  setResidentData(setResidentValue);
                }}>
                <span>Edit Resident</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                    setResidentData(setResidentValue);
                }}>
                <span>Create Certificate</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      );
    }
  }
];
