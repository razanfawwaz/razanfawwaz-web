import React from "react";

export default function TechStack({ children, title }) {
  return (
    <>
      <div className="py-2 flex items-center justify-center">
        <div className="py-4 px-6 bg-gradient-to-r from-blue-500 to-blue-600 backdrop-filter backdrop-blur bg-opacity-20 rounded-lg w-[90%] md:w-full  lg:w-full xl:w-full  drop-shadow-xl flex items-center">
          <p className="text-3xl text-white">{children}</p>
          <p className="ml-2 text-lg text-white font-semibold">{title}</p>
        </div>
      </div>
    </>
  );
}
