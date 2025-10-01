import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const loading = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center justify-between py-4">
        <Skeleton className="max-w-sm h-[35px]"></Skeleton>

        <div className="flex gap-3">
          <Skeleton className="w-[50px] h-[35px]"></Skeleton>
          <Skeleton className="w-[50px] h-[35px]"></Skeleton>
          <Skeleton className="w-[50px] h-[35px]"></Skeleton>
        </div>
      </div>
      <Skeleton className="flex-1 w-full h-full"></Skeleton>
    </div>
  );
};

export default loading;
