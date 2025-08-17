"use client";
import { fetchResidents } from "@/api/resident_api";
import CustomDialog from "@/components/CustomDialog";
import CustomTitle from "@/components/CustomTitle";
import { DataTable } from "@/components/Table";
import { ContextTheme } from "@/config/config_context";
import { ResidentsColumns } from "@/config/residents/resident_column_definition";
import { LOGIN } from "@/constants/navigation";
import { deleteSession } from "@/lib/session";
import { RESIDENT_PROP } from "@/props/Resident_Prop";
import { redirect } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

const page = () => {
  const [data, setData] = useState<RESIDENT_PROP[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await fetchResidents();
      if (response != undefined) {
        setData(response);
      }
      console.log("this is from useffect: ", response);
    };
    fetch();
  }, []);

  const {
    setIsAddResident,
    setIsEditResident,
    setIsCreateCertificate,
    isAddResident,
    isEditResident,
    isCreateCertificate,
    residentData,
  } = useContext(ContextTheme);

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
    profile_image_url,
  } = residentData;
  return (
    <>
      <DataTable columns={ResidentsColumns} data={data} />

      <CustomDialog
        isOpen={isAddResident}
        setIsOpen={setIsAddResident}
        is_Add_Resident={true}
        whatsType="create"
      />

      <CustomDialog
        id={id}
        firstname={firstname}
        middlename={middlename}
        lastname={lastname}
        profileImageUrl={profile_image_url}
        birthDate={birth_date}
        birthPlace={birth_place}
        address={address}
        civilStatus={civil_status}
        gender={gender}
        isOpen={isEditResident}
        setIsOpen={setIsEditResident}
        is_Edit_Resident={true}
        whatsType="edit"
      />

      <CustomDialog
        id={id}
        firstname={firstname}
        middlename={middlename}
        lastname={lastname}
        profileImageUrl={profile_image_url}
        birthDate={birth_date}
        birthPlace={birth_place}
        address={address}
        civilStatus={civil_status}
        gender={gender}
        isOpen={isCreateCertificate}
        setIsOpen={setIsCreateCertificate}
        is_Create_Certificate={true}
      />
    </>
  );
};

export default page;
