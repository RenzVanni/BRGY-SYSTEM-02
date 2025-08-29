"use client";
import React, { useEffect, useState } from "react";
import { columns, OfficialsModel } from "@/config/officials/columns";
import { DataTable } from "@/config/table/data-table";
import { fetchOfficials } from "@/data/DashboardData";
import { instance } from "@/api/config/axios_config";
import { fetchToken } from "@/api/auth/auth";

const page = () => {
  const [data, setData] = useState<OfficialsModel[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setData(await fetchOfficials());
    };

    const token = async () => {
      const response = await fetch(
        "http://localhost:8222/api/v1/accounts/token",
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }
      );

      console.log("Use Client Token: ", response.status);
    };

    fetchToken();
    token();

    fetchData();
  }, []);
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default page;
