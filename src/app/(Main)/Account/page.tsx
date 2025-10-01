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
import CustomDialog from "@/components/CustomDialog";
import FormDialog from "@/components/FormDialog/ResidentFormDialog";

const page = () => {
  const context = useContext(ContextTheme);
  const { isEdit, setIsEdit, residentData } = context;

  const { paginateValue } = context;
  const router = useRouter();

  const { data, error, isPending, isSuccess, status } =
    useAccounts(paginateValue);

  console.log(status);
  // if (status == "401") {
  //   router.push(LOGIN);
  // }

  return (
    <>
      <DataTable
        columns={accountColumn}
        data={data?.data ?? []}
        pages={data?.pages}
      />

      <FormDialog />
    </>
  );
};

export default page;
