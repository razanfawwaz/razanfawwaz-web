import React from "react";

export default function TechStack({ children, title }) {
  return (
    <>
      <div className="py-2 px-4 flex items-center justify-center drop-shadow-xl">
        <div className="py-4 px-4 bg-slate-100/5 hover:bg-slate-200/30 backdrop-filter backdrop-blur bg-opacity-20 rounded-lg w-[90%] md:w-full  lg:w-full xl:w-full shadow-xl shadow-black/10 flex items-center">
          <p className="text-3xl text-white">{children}</p>
          <p className="ml-2 text-lg text-white font-semibold">{title}</p>
        </div>
      </div>
    </>
  );
}
