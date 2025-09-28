"use client";
import { fetchAccounts } from "@/app/api/accountService";
import { accountColumn } from "@/config/account/accountColumnDef";
import { DataTable } from "@/components/table/data-table";
import React, { useContext, useEffect, useState } from "react";
import { LOGIN } from "@/constants/navigation";
import { AccountType } from "@/types/account";
import { useRouter } from "next/navigation";
import { ContextTheme } from "@/config/config_context";
import { useAccounts } from "@/hooks/useAccounts";

const page = () => {
  const [tableData, setTableData] = useState<AccountType[]>([]);
  const context = useContext(ContextTheme);
  const { paginateValue, setPaginateValue } = context;
  const router = useRouter();

  const { data, error, isPending, isSuccess, status } =
    useAccounts(paginateValue);

  if (parseInt(status) == 401) {
    router.push(LOGIN);
  }

  console.log(data);

  // if (isSuccess) {
  //   setTableData(data.data);
  //   console.log("Success ", data.data);
  // }

  // useEffect(() => {
  //   if (isSuccess) {
  //     setTableData(data.data);
  //   }
  //   console.log("Paginate Value: ", paginateValue);
  // }, [isSuccess]);
  // setTableData(data.data);

  // useEffect(() => {
  //   if (paginateValue < 0) {
  //     setPaginateValue(0);
  //   }
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       `http://localhost:3000/api/search?query=/accounts?page=${paginateValue}`,
  //       {
  //         credentials: "include",
  //       }
  //     );

  //     // console.log("STATUS ", response.status);

  //     if (response.status == 401) {
  //       return router.push(LOGIN);
  //     }

  //     if (response.status == 204) {
  //       setData([]);
  //       setPaginateValue(0);
  //       return;
  //     }

  //     if (response.status == 200) {
  //       const accounts = await response.json();
  //       // console.log(accounts.data);
  //       setData(accounts.data);
  //     }

  //     // console.log("Client ", response);
  //   };

  //   fetchData();
  // }, [paginateValue]);
  return (
    <div className="container mx-auto py-10">
      <DataTable
        columns={accountColumn}
        data={data?.data ?? []}
        pages={data?.pages}
      />
    </div>
  );
};

export default page;
