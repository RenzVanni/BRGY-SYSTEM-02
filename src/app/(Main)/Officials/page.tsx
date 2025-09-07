"use client";
import React, { useEffect, useState } from "react";
import {
  officialsColumn,
  OfficialsModel,
} from "@/config/officials/officialsColumnDef";
import { DataTable } from "@/components/table/data-table";
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
      <DataTable columns={officialsColumn} data={data} />
    </div>
  );
};

export default page;
