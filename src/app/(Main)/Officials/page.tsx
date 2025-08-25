"use client";
import React, { useEffect, useState } from "react";
import { columns, OfficialsModel } from "@/config/officials/columns";
import { DataTable } from "@/config/table/data-table";
import { fetchOfficials } from "@/data/DashboardData";

const page = () => {
  const [data, setData] = useState<OfficialsModel[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setData(await fetchOfficials());
    };

    fetchData();
  }, []);
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default page;
