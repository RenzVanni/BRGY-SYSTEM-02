"use client";
import { fetchResidents, formatFetchedResidents } from "@/api/resident_api";
import CustomDialog from "@/components/CustomDialog";
import { DataTable } from "@/components/table/data-table";
import { ContextTheme } from "@/config/config_context";
import {
  residentColumn,
  ResidentColumnModel,
} from "@/config/residents/residentsColumnsDef";
import { RESIDENT_PROP } from "@/props/Resident_Prop";
import React, { useContext, useEffect, useState } from "react";

const page = () => {
  const [data, setData] = useState<ResidentColumnModel[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await formatFetchedResidents();
      setData(response);
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
      <DataTable columns={residentColumn} data={data} />

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
