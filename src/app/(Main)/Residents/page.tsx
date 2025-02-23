"use client";
import { fetchResidents } from "@/api/fetch_residents";
import CustomDialog from "@/components/CustomDialog";
import CustomTitle from "@/components/CustomTitle";
import { DataTable } from "@/components/Table";
import { Resident, ResidentsColumns } from "@/config/column_Definition";
import { ContextTheme } from "@/config/config_context";
import { RESIDENT_PROP } from "@/constants/Resident_Prop";
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
  console.log("This is the table: ", data);

  const dialogOption = [
    { is_Add_Resident: true, whatsType: "create" },
    {
      is_Edit_Resident: true,
      whatsType: "edit",
    },
    {
      is_Create_Certificate: true,
      whatsType: "",
    },
  ];

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
  } = residentData;
  return (
    <>
      <CustomTitle>Residents</CustomTitle>
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
        profileImageUrl={profileImageUrl}
        birthDate={birthDate}
        birthPlace={birthPlace}
        address={address}
        civilStatus={civilStatus}
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
        profileImageUrl={profileImageUrl}
        birthDate={birthDate}
        birthPlace={birthPlace}
        address={address}
        civilStatus={civilStatus}
        gender={gender}
        isOpen={isCreateCertificate}
        setIsOpen={setIsCreateCertificate}
        is_Create_Certificate={true}
      />
    </>
  );
};

export default page;
