import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const loading = () => {
  return (
    <div className="flex items-center space-x-3 p-3">
      <Skeleton className="w-64 h-full rounded-xl" />
      <Skeleton className="flex-1 h-full rounded-xl" />
    </div>
  );
};

export default loading;
