"use client";
import { dashboard_auth } from "@/actions/dashboard_auth";
import { fetchResidents } from "@/api/resident_api";
import ChartComponent from "@/components/ChartComponent";
import CustomBarChart from "@/components/CustomBarChart";
import CustomTitle from "@/components/CustomTitle";
import StatisticsCard from "@/components/DashboardComponents/StatisticsCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { statisticsCardData } from "@/data/DashboardData";
import { UsersRound } from "lucide-react";

import React, { useEffect } from "react";

const page = () => {
  return (
    <>
      <div className="w-full space-y-3 md:space-y-0 md:gap-3 md:grid md:grid-cols-2 lg:grid-cols-3">
        <StatisticsCard items={statisticsCardData} />
      </div>
      <ChartComponent />
    </>
  );
};

export default page;
