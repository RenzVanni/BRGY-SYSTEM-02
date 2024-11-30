import { getResidentsData } from "@/api/fetchTableData";
import CustomTitle from "@/components/CustomTitle";
import { DataTable } from "@/components/Table";
import { Resident, ResidentsColumns } from "@/config/column_Definition";
import Link from "next/link";
import React from "react";

const page = async () => {
  const data = await getResidentsData();

  return (
    <>
      <CustomTitle>Residents</CustomTitle>
      <DataTable columns={ResidentsColumns} data={data} />
    </>
  );
};

export default page;
