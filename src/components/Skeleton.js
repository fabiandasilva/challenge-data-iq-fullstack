import React from "react";

const Skeleton = () => {
  return (
    <div className="mb-24 md:mb-0">
      <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] animate-pulse">
        <div className="flex justify-center">
          <div className="flex justify-center -mt-[75px]">
            <div className="rounded-full bg-slate-700 h-[150px] w-[150px]"></div>
          </div>
        </div>
        <div className="px-6 my-1 pb-6 pt-0">
          <div className="h-5 w-20 bg-slate-700 rounded"></div>
          <div className="h-5 w-16 bg-slate-700 rounded mt-2"></div>
          <div className="mt-6 flex gap-1">
            <div className="h-5 w-5 bg-slate-700 rounded"></div>
            <div className="h-5 w-2/4 bg-slate-700 rounded"></div>
          </div>
          <div className="mt-3 flex gap-1">
            <div className="h-5 w-5 bg-slate-700 rounded"></div>
            <div className="h-5 w-2/4 bg-slate-700 rounded"></div>
          </div>
          <div className="mt-3 flex gap-1">
            <div className="h-5 w-5 bg-slate-700 rounded"></div>
            <div className="h-5 w-2/4 bg-slate-700 rounded"></div>
          </div>
          <div className="mt-3 flex gap-1">
            <div className="h-5 w-5 bg-slate-700 rounded"></div>
            <div className="h-5 w-2/4 bg-slate-700 rounded"></div>
          </div>
          <div className="h-9 w-24 bg-slate-700 rounded mx-auto mt-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
