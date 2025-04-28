import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { assets, JobCategories, JobLocations } from "../assets/assets";
import JobCard from "./JobCard";
import Pagination from "./Pagination";

const JobSearch = () => {
  const { searchFilter, isSearched, setisSearched, setsearchFilter, jobs, pageNo, setPageNo } = useContext(AppContext);
  const [showfilter, setShowfilter] = useState(false);
  return (
    <div className="container mx-14 flex flex-col lg:flex-row py-6">
      <div className="whitespace-nowrap mx-8">
        {
          // sidebar

          isSearched &&
            (searchFilter.title !== "" || searchFilter.location !== "") && (
              <div className="flex flex-col lg:flex-row gap-6 whitespace-nowrap">
                <div className="bg-white px-4 w-full lg:w-1/4 mb-4 ">
                  <h3 className="font-medium mb-2 text-lg">Current Search</h3>
                  {searchFilter.title && (
                    <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-3 py-1 rounded">
                      {searchFilter.title}
                      <img
                        onClick={(e) =>
                          setsearchFilter((prev) => ({ ...prev, title: "" }))
                        }
                        src={assets.cross_icon}
                        alt="cross_icon"
                        className="px-2"
                      />
                    </span>
                  )}
                  {searchFilter.location && (
                    <span className="inline-flex items-center ml-2 gap-2 bg-red-50 border border-red-200 px-3 py-1 rounded">
                      {searchFilter.location}
                      <img
                        onClick={(e) => {
                          setsearchFilter((prev) => ({
                            ...prev,
                            location: ""
                          }));
                          setisSearched(false);
                        }}
                        src={assets.cross_icon}
                        alt="cross_icon"
                        className="px-2"
                      />
                    </span>
                  )}
                </div>
              </div>
            )
        }

        <button
          onClick={(e) => setShowfilter((prev) => !prev)}
          className="border px-4 bg-gray-50 py-2 mb-3 md:hidden"
        >
          {showfilter ? "Close" : "Filter"}
        </button>

        {/* Category filter */}

        <div className={showfilter ? "" : "max-lg:hidden"}>
          <h4 className="font-medium text-lg">Search by categories</h4>
          <ul className="mt-3 gap-2 font-normal">
            {JobCategories.map((category, index) => (
              <li key={index} className="flex items-center mt-3">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="mr-2 scale-125"
                />
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Location filter */}

        <div className={showfilter ? "" : "max-lg:hidden"}>
          <h4 className="font-medium text-lg mt-10">Search by location</h4>
          <ul className="mt-3 gap-2 font-normal">
            {JobLocations.map((location, index) => (
              <li key={index} className="flex items-center mt-3">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="mr-2 scale-125"
                />
                {location}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className="w-full lg-w-3/4 max-lg:">
        <h3 className="font-medium text-xl">Latest jobs</h3>
        <p className="text-gray-500 mb-8">
          Get your desired job from top companies
        </p>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`} >
          {jobs.slice((pageNo-1)*6,(pageNo*6)).map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>

        {/* Pagination */}
        
        <Pagination/>

      </section>
    </div>
  );
};
export default JobSearch;
