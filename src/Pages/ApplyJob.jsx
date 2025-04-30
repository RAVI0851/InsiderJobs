import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import Navbar from "../Components/Navbar";
import { assets } from "../assets/assets";
import kconvert from 'k-convert'
import moment from 'moment'
import Loading from "../Components/Loading";

const ApplyJob = () => {
  const { id } = useParams();
  const { jobs } = useContext(AppContext);

  const [jobData, setJobData] = useState(null);

  

  useEffect(() => {
    const fetchJob = async () => {
      const data = jobs.filter((job) => job._id === id);
      if (data.length > 0) {
        setJobData(data[0]);
        console.log(data[0]);
      }
    };
    fetchJob();
  }, [id, jobs]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return jobData && !loading ? (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-2 border-blue-500 bg-blue-50 rounded-lg p-6 md:p-14 mt-10 shadow-md w-full max-w-6xl mx-auto gap-6">
        {/* Left section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
          {/* Logo */}
          <img
            src={jobData.companyId.image}
            alt="Company_Logo"
            className="w-16 h-16 rounded object-contain"
          />
  
          {/* Job Info */}
          <div className="w-full">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
              {jobData.title}
            </h2>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-2">
              <span className="flex items-center space-x-1">
                <img src={assets.suitcase_icon} alt="suitcase" className="w-4 h-4" />
                <span>{jobData.companyId.name}</span>
              </span>
              <span className="flex items-center space-x-1">
                <img src={assets.location_icon} alt="location" className="w-4 h-4" />
                <span>{jobData.location}</span>
              </span>
              <span className="flex items-center space-x-1">
                <img src={assets.person_icon} alt="person-icon" className="w-4 h-4" />
                <span>{jobData.level}</span>
              </span>
              <span className="flex items-center space-x-1">
                <span>$</span>
                <span>CTC: {kconvert.convertTo(jobData.salary)}</span>
              </span>
            </div>
          </div>
        </div>
  
        {/* Right section */}
        <div className="flex flex-col items-end w-full md:w-auto space-y-2">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow w-full md:w-auto text-center">
            Apply now
          </button>
          <span className="text-sm text-gray-500 text-end md:text-left">
            Posted {moment(jobData.date).fromNow()}
          </span>
        </div>
      </div>
  
      {/* Job description */}
      <div className="mt-10 px-4 md:px-0 md:ml-[12rem] lg:w-2/3 mx-auto">
        <h1 className="text-black font-bold text-lg mb-2">Job Description</h1>
        <p dangerouslySetInnerHTML={{ __html: jobData.description }}></p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md mt-7  shadow w-full md:w-auto text-center">
            Apply now
          </button>
      </div>
      
    </div>
  ) : (
    <div>
      <Loading/>
    </div>
  );
  
};

export default ApplyJob;
