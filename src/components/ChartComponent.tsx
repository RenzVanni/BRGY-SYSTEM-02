import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent
} from './ui/chart';
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useQueryRequestParam } from '@/hooks/useQuery';
import { RESIDENTS_FIND_BY_YEAR } from '@/constants/Backend_Slugs';

const chartData = [
  { date: '2024-04-01', desktop: 222, mobile: 150 },
  { date: '2024-04-02', desktop: 97, mobile: 180 },
  { date: '2024-04-03', desktop: 167, mobile: 120 },
  { date: '2024-04-04', desktop: 242, mobile: 260 },
  { date: '2024-04-05', desktop: 373, mobile: 290 },
  { date: '2024-04-06', desktop: 301, mobile: 340 },
  { date: '2024-04-07', desktop: 245, mobile: 180 },
  { date: '2024-04-08', desktop: 409, mobile: 320 },
  { date: '2024-04-09', desktop: 59, mobile: 110 },
  { date: '2024-04-10', desktop: 261, mobile: 190 },
  { date: '2024-04-11', desktop: 327, mobile: 350 },
  { date: '2024-04-12', desktop: 292, mobile: 210 },
  { date: '2024-04-13', desktop: 342, mobile: 380 },
  { date: '2024-04-14', desktop: 137, mobile: 220 },
  { date: '2024-04-15', desktop: 120, mobile: 170 },
  { date: '2024-04-16', desktop: 138, mobile: 190 },
  { date: '2024-04-17', desktop: 446, mobile: 360 },
  { date: '2024-04-18', desktop: 364, mobile: 410 },
  { date: '2024-04-19', desktop: 243, mobile: 180 },
  { date: '2024-04-20', desktop: 89, mobile: 150 },
  { date: '2024-04-21', desktop: 137, mobile: 200 },
  { date: '2024-04-22', desktop: 224, mobile: 170 },
  { date: '2024-04-23', desktop: 138, mobile: 230 },
  { date: '2024-04-24', desktop: 387, mobile: 290 },
  { date: '2024-04-25', desktop: 215, mobile: 250 },
  { date: '2024-04-26', desktop: 75, mobile: 130 }
];

const chartConfig = {
  count: {
    label: 'Count',
    color: 'var(--chart-4)'
  },
  created_at: {
    label: 'Created_at',
    color: 'var(--chart-4)'
  }
} satisfies ChartConfig;

export const ChartComponent = () => {
  const [timeRange, setTimeRange] = useState('1');
  const { data, refetch } = useQueryRequestParam<{ count: number; created_at: string }[], number>({
    param: parseInt(timeRange),
    path: RESIDENTS_FIND_BY_YEAR,
    method: 'GET'
  });

  useEffect(() => {
    refetch();
  }, [timeRange]);

  // const filteredData = chartData.filter((item) => {
  //   const date = new Date(item.date);
  //   const referenceDate = new Date('2024-06-30');

  //   const startDate = new Date(referenceDate);
  //   startDate.setDate(startDate.getDate() - daysToSubtract);
  //   return date >= startDate;
  // });

  return (
    <Card className="w-full h-full">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Population</CardTitle>
          <CardDescription>Showing total population</CardDescription>
        </div>
        <Select value={timeRange} onValueChange={(e) => setTimeRange(e)}>
          <SelectTrigger className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex" aria-label="Select a value">
            <SelectValue placeholder="Last 1 year" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="1" className="rounded-lg">
              Last 1 year
            </SelectItem>
            <SelectItem value="5" className="rounded-lg">
              Last 5 years
            </SelectItem>
            <SelectItem value="10" className="rounded-lg">
              Last 10 years
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>

      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6 h-full">
        <ChartContainer config={chartConfig} className="aspect-auto h-full w-full">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="fillCount" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--chart-4)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--chart-4)" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="created_at"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              // minTickGap={32}
              interval="preserveStartEnd"
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString('en-US', {
                  month: 'short',
                  year: 'numeric'
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            {/* <Area dataKey="mobile" type="natural" fill="url(#fillMobile)" stroke="var(--color-mobile)" stackId="a" /> */}
            <Area dataKey="count" type="natural" fill="url(#fillCount)" stroke="var(--chart-4)" stackId="a" />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default ChartComponent;
