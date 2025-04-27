import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    
    const [searchFilter, setsearchFilter] = useState({
        title:'',
        location:'Banglore' //Making this true for just development ,make sure to change this
    })
    
    const [isSearched,setisSearched] = useState(true); //Making this true for just development ,make sure to change this to false

    const value = {
        setsearchFilter,searchFilter,
        isSearched,setisSearched
    }
    return <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
}