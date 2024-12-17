"use client";
import { fetchResidents } from "@/api/fetch_residents";
import CustomDialog from "@/components/CustomDialog";
import CustomTitle from "@/components/CustomTitle";
import { DataTable } from "@/components/Table";
import { Resident, ResidentsColumns } from "@/config/column_Definition";
import { ContextTheme } from "@/config/config_context";
import React, { useContext, useEffect, useState } from "react";

const page = () => {
  const [data, setData] = useState<Resident[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await fetchResidents();
      setData(response?.data);
    };
    fetch();
  }, []);
  console.log(data);

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
    firstName,
    middleName,
    lastName,
    picture,
    birthDate,
    birthPlace,
    email,
    address,
    sex,
    status,
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
        firstName={firstName}
        middleName={middleName}
        lastName={lastName}
        picture="/images/eun.jpeg"
        email={email}
        birthDate={birthDate}
        birthPlace={birthPlace}
        address={address}
        status={status}
        sex={sex}
        isOpen={isEditResident}
        setIsOpen={setIsEditResident}
        is_Edit_Resident={true}
        whatsType="edit"
      />

      <CustomDialog
        id={id}
        firstName={firstName}
        middleName={middleName}
        lastName={lastName}
        picture="/images/eun.jpeg"
        birthDate={birthDate}
        birthPlace={birthPlace}
        address={address}
        status={status}
        sex={sex}
        isOpen={isCreateCertificate}
        setIsOpen={setIsCreateCertificate}
        is_Create_Certificate={true}
      />
    </>
  );
};

export default page;
