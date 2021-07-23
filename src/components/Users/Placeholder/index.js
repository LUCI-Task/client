import React from "react";

export default function LazyLoadPlaceholder() {
  return (
    <div className="flex flex-col gap-5 p-2 my-4 bg-white shadow-lg select-none sm:p-4 sm:h-30 rounded-xl sm:flex-row">
      <div className="w-12 h-12 my-3 bg-gray-200  rounded-xl animate-pulse"></div>
      <div className="flex flex-row flex-1 gap-5 sm:p-2">
        <div className="flex flex-col flex-1 gap-3">
          <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
          <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
          <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
        </div>
        <div className="flex flex-col flex-1 gap-3">
          <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
          <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
          <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
}
