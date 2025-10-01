"use client";
import { fetchResidents, formatFetchedResidents } from "@/app/api/resident_api";
import CustomDialog from "@/components/CustomDialog";
import ResidentFormDialog from "@/components/FormDialog/ResidentFormDialog";
import { DataTable } from "@/components/table/data-table";
import { ContextTheme } from "@/config/config_context";
import {
  residentColumn,
  ResidentColumnModel,
} from "@/config/residents/residentsColumnsDef";
import { LOGIN } from "@/constants/navigation";
import { ResidentProp } from "@/props/Resident_Prop";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

const page = () => {
  const [data, setData] = useState<ResidentColumnModel[]>([]);
  const router = useRouter();
  const [isFormAvailable, setIsFormAvailable] = useState(false);
  const {
    setIsAddResident,
    setIsEditResident,
    setIsCreateCertificate,
    isAddResident,
    isEditResident,
    isCreateCertificate,
    residentData,
  } = useContext(ContextTheme);

  const isResidentPresent = Object.keys(residentData).length > 0;

  useEffect(() => {
    const fetchResidents = async () => {
      try {
        // const cookieHeader = (await cookies()).toString();
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_DEV_URL}/residents`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              // Cookie: cookieHeader,
            },
            credentials: "include",
          }
        );

        if (response.status == 401) {
          router.push(LOGIN);
          return;
        }

        const body = await response.json();

        const data = body.map((item) => {
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
            voter_status,
            citizenship,
            civil_status,
            osy,
            pwd,
            official_id,
            account_id,
            profile_image_url,
          } = item;

          const middlenameValid = middlename ? " " + middlename + " " : " ";
          const name = firstname + middlenameValid + lastname;

          return {
            id,
            name,
            gender,
            birth_date,
            birth_place,
            address,
            contact_no,
            voter_status,
            citizenship,
            civil_status,
            osy,
            pwd,
          };
        });

        setData(data);
        // return data;
      } catch (error: any) {
        throw new Error("Something went wrong fetching residents data!");
      }
    };

    fetchResidents();
  }, []);

  return (
    <>
      <DataTable columns={residentColumn} data={data} pages={0} />

      <ResidentFormDialog />

      {/* {isResidentPresent && (
        <CustomDialog
          isOpen={isAddResident}
          setIsOpen={setIsAddResident}
          is_Add_Resident={true}
          whatsType="create"
        />
      )}

      {isResidentPresent && (
        <CustomDialog
          data={residentData}
          isOpen={isEditResident}
          setIsOpen={setIsEditResident}
          is_Edit_Resident={true}
          whatsType="edit"
        />
      )}

      {isResidentPresent && (
        <CustomDialog
          data={residentData}
          isOpen={isCreateCertificate}
          setIsOpen={setIsCreateCertificate}
          is_Create_Certificate={true}
        />
      )} */}
    </>
  );
};

export default page;
