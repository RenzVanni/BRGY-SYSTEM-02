'use client';
import ChartComponent from '@/components/ChartComponent';
import PieChartComponent from '@/components/DashboardComponents/PieChartComponent';
import StatisticsCard from '@/components/DashboardComponents/StatisticsCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent } from '@/components/ui/chart';
import { RESIDENTS_FIND_BY_YEAR } from '@/constants/Backend_Slugs';
import { statisticsCardData } from '@/data/DashboardData';
import { useQueryRequestParam } from '@/hooks/useQuery';
import { Pie, PieChart } from 'recharts';

const page = () => {
  return (
    <>
      <div className="w-full space-y-3 sm:space-y-0 flex gap-3 overflow-x-scroll">
        <StatisticsCard items={statisticsCardData} />
      </div>
      <div className="flex items-start justify-start gap-3 h-[450px]">
        <PieChartComponent />
        <ChartComponent />
      </div>
    </>
  );
};

export default page;
