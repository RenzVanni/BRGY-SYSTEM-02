"use client";
import CustomTitle from "@/components/CustomTitle";
import {
  accountColumn,
  AccountColumnModel,
  AccountDataDemo,
} from "@/config/account/accountColumnDef";
import { DataTable } from "@/config/table/data-table";
import React, { useEffect, useState } from "react";

const page = () => {
  const [data, setData] = useState<AccountColumnModel[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setData(await AccountDataDemo());
    };

    fetchData();
  }, []);
  return (
    <div className="container mx-auto py-10">
      <CustomTitle>Account</CustomTitle>
      <DataTable columns={accountColumn} data={data} />
    </div>
  );
};

export default page;
