"use client";
import { fetchAccounts } from "@/api/accountService";
import {
  accountColumn,
  AccountColumnModel,
} from "@/config/account/accountColumnDef";
import { DataTable } from "@/components/table/data-table";
import React, { useEffect, useState } from "react";

const page = () => {
  const [data, setData] = useState<AccountColumnModel[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setData(await fetchAccounts());
    };

    fetchData();
  }, []);
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={accountColumn} data={data} />
    </div>
  );
};

export default page;
