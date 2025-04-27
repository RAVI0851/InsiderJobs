import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { assets, JobCategories, JobLocations } from "../assets/assets";

const JobSearch = () => {
  const { searchFilter, isSearched, setsearchFilter } = useContext(AppContext);
  return (
    <div className="container mx-14 flex flex-col  py-6">
      {
        // sidebar

        isSearched &&
          (searchFilter.title !== "" || searchFilter.location !== "") && (
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="bg-white px-4 w-full lg:w-1/4 mb-4 ">
                <h3 className="font-medium text-lg">Current Search</h3>
                {searchFilter.title && (
                  <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-1.5 py-3 rounded">
                    {searchFilter.title}
                    <img
                      onClick={(e) =>
                        setsearchFilter((prev) => ({ ...prev, title: "" }))
                      }
                      src={assets.cross_icon}
                      alt=""
                    />
                  </span>
                )}
                {searchFilter.location && (
                  <span className="ml-2 inline-flex items-center gap-2 bg-red-50 border border-red-200 px-1.5 py-3 rounded">
                    {searchFilter.location}
                    <img
                      onClick={(e) =>
                        setsearchFilter((prev) => ({ ...prev, location: "" }))
                      }
                      src={assets.cross_icon}
                      alt=""
                    />
                  </span>
                )}

                {/* Category filter */}

                <div className="mt-5 mb-3 max-lg:hidden">
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

                <div className="mt-7 mb-3 max-lg:hidden">
                  <h4 className="font-medium text-lg">Search by location</h4>
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
                <p className="text-gray-500">Get your desired job from top companies</p>
              </section>
              </div>
          )
      }
      
    </div>
  );
};

export default JobSearch;
