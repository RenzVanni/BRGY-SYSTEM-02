"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import CustomTitle from "@/components/CustomTitle";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { columns, Payment } from "@/config/officials/columns";
import { DataTable } from "@/config/table/data-table";

const getData = async (): Promise<Payment[]> => {
  return [
    { id: "728ed52f", amount: 100, status: "pending", email: "m@example.com" },
    {
      id: "298ed52f",
      amount: 178,
      status: "processing",
      email: "pen@example.com",
    },
    {
      id: "298fl52f",
      amount: 898,
      status: "pending",
      email: "zen@example.com",
    },
    {
      id: "298ed578l",
      amount: 192,
      status: "success",
      email: "gk@example.com",
    },
    {
      id: "2923kd52f",
      amount: 188,
      status: "processing",
      email: "lek@example.com",
    },
  ];
};
const page = () => {
  const [data, setData] = useState<Payment[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setData(await getData());
    };

    fetchData();
  }, []);
  // const data = await getData();
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default page;
