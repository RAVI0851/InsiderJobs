import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    
    const [searchFilter, setsearchFilter] = useState({
        title:'',
        location:''
    })
    
    const [isSearched,setisSearched] = useState(false);

    const value = {
        setsearchFilter,searchFilter,
        isSearched,setisSearched
    }
    return <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
}