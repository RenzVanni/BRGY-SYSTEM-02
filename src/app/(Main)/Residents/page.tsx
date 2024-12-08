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

  const { setIsAddResident, isAddResident } = useContext(ContextTheme);
  return (
    <>
      <CustomTitle>Residents</CustomTitle>
      <DataTable columns={ResidentsColumns} data={data} />
      <CustomDialog setIsOpen={setIsAddResident} isOpen={isAddResident} />
    </>
  );
};

export default page;
