import { createContext, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    
    const [searchFilter, setsearchFilter] = useState({
        title:'',
        location:'Banglore' //Making this true for just development ,make sure to change this
    })
    
    const [isSearched,setisSearched] = useState(false); //Making this true for just development ,make sure to change this to false

    //Pagination

    const [pageNo,setPageNo] = useState(1);

    //Fecthing jobs from
    const [jobs,setJobs] = useState([]);

    const fetchJobs = async()=>{
        setJobs(jobsData)
    }

    useEffect(()=>{
        fetchJobs();
    },[])



    const value = {
        setsearchFilter,searchFilter,
        isSearched,setisSearched,jobs,setJobs,pageNo,setPageNo
    }
    return <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
}