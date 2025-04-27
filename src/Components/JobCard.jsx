import React from "react";
import { assets } from "../assets/assets";

const JobCard = () => {
  return (
    <div className="border-4 flex flex-col w-[18rem] h-[18rem] p-4 shadow-md rounded-md">
      <img
        src={assets.company_icon}
        alt="Company_logo"
        className="w-[2rem] h-[2rem] m-2 "
      />
      <h1 className="text-black text-2xl">Full stack developer</h1>
      <div className="flex">
        <p className="p-2 border border-blue-50 rounded-md bg-blue-50 m-2 text-gray-700 ">
          California
        </p>
        <p className="p-2 border border-red-50 rounded-md bg-red-50 m-2 text-gray-700">
          {" "}
          Senior level
        </p>
      </div>
      <p className="text-sm">
        You will be responsible for frontend and backend development tasks. You
        will work closely with our
      </p>
      <div>
        <button className="bg-blue-500 border rounded-md m-2 text-white p-2">Apply now</button>
        <button className="border-2 rounded-md m-2 p-2">Learn more</button>
      </div>
    </div>
  );
};

export default JobCard;
