'use client';
import React, { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '../ui/chart';
import { Cell, Pie, PieChart } from 'recharts';
import { TrendingUp } from 'lucide-react';
import { useGet, useQueryRequestParam } from '@/hooks/useQuery';
import { RESIDENTS_FETCH_GROUP_BY_GENDER, RESIDENTS_FIND_BY_YEAR } from '@/constants/Backend_Slugs';
import { number } from 'zod';

const chartConfig = {
  count: {
    label: 'Count',
    color: 'var(--chart-4)'
  },
  FEMALE: {
    label: 'Female',
    color: 'oklch(0.73 0.18 350)'
  },
  MALE: {
    label: 'Male',
    color: 'oklch(0.29 0.14 303)'
  }
} satisfies ChartConfig;

const PieChartComponent = () => {
  const { data } = useGet<{ count: number; gender: string }[]>(RESIDENTS_FETCH_GROUP_BY_GENDER);

  return (
    <Card className="flex flex-col h-full min-w-[300px]">
      <CardHeader>
        <CardTitle>Gender - Label</CardTitle>
        <CardDescription>Male & Female</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="[&_.recharts-pie-label-text]:fill-foreground mx-auto aspect-square max-h-[250px] pb-0">
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={data} dataKey="count" label nameKey="gender">
              {data?.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={chartConfig[entry.gender as keyof typeof chartConfig]?.color || 'var(--chart-1)'}
                />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">Showing total visitors for the last 6 months</div>
      </CardFooter>
    </Card>
  );
};

export default PieChartComponent;
