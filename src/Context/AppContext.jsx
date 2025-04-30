import { createContext, useEffect, useState } from "react";
import { JobLocations, jobsData } from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [searchFilter, setsearchFilter] = useState({
    title: "",
    location: "" //Making this true for just development ,make sure to change this
  });

  const [isSearched, setisSearched] = useState(false); //Making this true for just development ,make sure to change this to false

  //Pagination

  const [pageNo, setPageNo] = useState(1);

  //Fecthing jobs from
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    setJobs(jobsData);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    const matchesSearchlocation = (job) =>
      searchFilter.location === "" ||
      job.location.toLowerCase().includes(searchFilter.location.toLowerCase());
    const matchesSearchTitle = (job) =>
      searchFilter.title === "" ||
    job.title.toLowerCase().includes(searchFilter.title.toLowerCase());
    const matchesCategory = (job) =>
      selectedCategory.length === 0 || selectedCategory.includes(job.category);
    const matchesLocation = (job) =>
      selectedLocation.length === 0 || selectedLocation.includes(job.location);

    const newFilteredJobs = jobs.filter(
      (job) =>
        matchesSearchlocation(job) &&
        matchesSearchTitle(job) &&
        matchesCategory(job) &&
        matchesLocation(job)
    );

    setFilteredJobs(newFilteredJobs);
    setPageNo(1);
  }, [jobs, searchFilter, selectedCategory, selectedLocation]);

  const handleSelectedCategory = (category) => {
    setSelectedCategory((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c != category)
        : [...prev, category]
    );
  };

  const handleSelectedLocation = (location) => {
    setSelectedLocation((prev) =>
      prev.includes(location)
        ? prev.filter((l) => l != location)
        : [...prev, location]
    );
  };

  const value = {
    setsearchFilter,
    searchFilter,
    isSearched,
    setisSearched,
    jobs,
    setJobs,
    pageNo,
    setPageNo,
    selectedCategory,
    setSelectedCategory,
    selectedLocation,
    setSelectedLocation,
    handleSelectedCategory,
    handleSelectedLocation,
    filteredJobs
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
