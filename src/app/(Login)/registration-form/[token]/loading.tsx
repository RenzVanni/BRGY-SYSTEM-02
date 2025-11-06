import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

const loading = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-full max-w-[450px]">
        <div className="flex flex-col items-center">
          <Skeleton className="h-12 w-[80%] mb-6" />
          <Skeleton className="h-8 w-full mb-12" />
        </div>
        <Skeleton className="h-8 w-24 mb-4" />
        <Skeleton className="h-8 w-full mb-8" />
        <Skeleton className="h-8 w-24 mb-4" />
        <Skeleton className="h-8 w-full mb-8" />
      </div>
    </div>
  );
};

export default loading;
