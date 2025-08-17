import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const loading = () => {
  return (
    <>
      <div className="w-full space-y-3 md:space-y-0 md:gap-3 md:grid md:grid-cols-2 lg:grid-cols-3">
        <Skeleton className="min-w-[200px] w-full h-[200px]"></Skeleton>
        <Skeleton className="min-w-[200px] w-full h-[200px]"></Skeleton>
        <Skeleton className="min-w-[200px] w-full h-[200px]"></Skeleton>
      </div>
      <Skeleton className="flex-1 w-full"></Skeleton>
    </>
  );
};

export default loading;
