"use client";
import { countAccounts } from "@/app/api/accountService";
import ChartComponent from "@/components/ChartComponent";
import StatisticsCard from "@/components/DashboardComponents/StatisticsCard";
import { LOGIN } from "@/constants/navigation";
import { statisticsCardData } from "@/data/DashboardData";
import { AccountType } from "@/types/account";
import { cookies } from "next/headers";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

const page = () => {
  return (
    <>
      <div className="w-full space-y-3 md:space-y-0 md:gap-3 md:grid md:grid-cols-2 lg:grid-cols-3">
        <StatisticsCard items={statisticsCardData} />
      </div>
      {/* <ChartComponent /> */}
    </>
  );
};

export default page;
