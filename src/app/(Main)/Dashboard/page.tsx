"use client";
import CustomTitle from "@/components/CustomTitle";
import { CustomBarChart } from "@/config/chart_config";

import React from "react";

const page = () => {
  return (
    <>
      <CustomTitle>Dashboard</CustomTitle>
      <div className=" w-full md:space-x-3 md:flex">
        <CustomBarChart />
        <CustomBarChart />
      </div>
    </>
  );
};

export default page;
