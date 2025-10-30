'use client';
import StatisticsCard from '@/components/DashboardComponents/StatisticsCard';
import { statisticsCardData } from '@/data/DashboardData';

const page = () => {
  return (
    <>
      <div className="w-full space-y-3 sm:space-y-0 sm:gap-3 sm:grid sm:grid-cols-2 lg:grid-cols-3">
        <StatisticsCard items={statisticsCardData} />
      </div>
      {/* <ChartComponent /> */}
    </>
  );
};

export default page;
