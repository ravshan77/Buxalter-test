import React from "react";

const LoadingCard = () => {
  return (
    <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto col-span-full sm:col-span-6 xl:col-span-4 h-56 border-indigo-200 border">
      <div class="animate-pulse flex space-x-4 h-full">
        <div class="rounded-full bg-slate-200 h-16 w-16"></div>
        <div class="flex-1 space-y-6 py-1">
          <div class="h-2 bg-slate-200 rounded"></div>
          <div class="space-y-3">
            <div class="grid grid-cols-3 gap-4">
              <div class="h-2 bg-slate-200 rounded col-span-2"></div>
              <div class="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
            Loading...
            <div class="h-2 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingCard;
