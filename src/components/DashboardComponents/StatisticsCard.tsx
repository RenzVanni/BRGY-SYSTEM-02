import React from 'react';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';

export const StatisticsCard = ({ items }: { items: { description: string; value: number }[] }) => {
  return (
    <>
      {items.map((item) => (
        <Card className="min-w-[300px] w-full" key={item.description}>
          <CardHeader>
            <CardDescription>
              {item.description}
              {/* <UsersRound size={16} /> */}
            </CardDescription>

            <CardTitle className="text-2xl">{item.value}</CardTitle>
          </CardHeader>

          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">Trending up this month</div>
            <div className="text-muted-foreground">Visitors for the last 6 months</div>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default StatisticsCard;
