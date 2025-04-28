import React from "react";
import { assets } from "../assets/assets";

const JobCard = ({job}) => {
  return (
    <div className="border flex flex-col w-[20rem] h-[18rem] p-4 my-2 shadow-md rounded-md]">
      <img
        src={assets.company_icon}
        alt="Company_logo"
        className="w-[2rem] h-[2rem] m-2 "
      />
      <h1 className="text-black text-xl">{job.title}</h1>
      <div className="flex">
        <p className="p-2 border text-sm border-blue-200 rounded-md bg-blue-50 m-2 text-gray-700 ">
          {job.location}
        </p>
        <p className="p-2 border text-sm border-red-200 rounded-md bg-red-50 m-2 text-gray-700">
          {job.level}
        </p>
      </div>
      <div className="flex flex-col">
      <p className="text-sm" dangerouslySetInnerHTML={{__html:job.description.slice(0,120)}}>
      </p>
      </div>
      <div>
        <button className="bg-blue-500 border rounded-md m-2 text-white p-2">Apply now</button>
        <button className="border-2 rounded-md m-2 p-2">Learn more</button>
      </div>
    </div>
  );
};

export default JobCard;
