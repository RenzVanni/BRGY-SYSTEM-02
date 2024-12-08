"use client";
import { dashboard_auth } from "@/actions/dashboard_auth";
import { fetchResidents } from "@/api/fetch_residents";
import CustomBarChart from "@/components/CustomBarChart";
import CustomTitle from "@/components/CustomTitle";

import React, { useEffect } from "react";

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
