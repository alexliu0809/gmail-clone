import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { auth } from "../lib/firebase"
// shared environment
const UserContext = createContext();

export function useLocalContext(){
    return useContext(UserContext)
};

// accepts an arg: children
export function ContextProvider({ children }){
    const [currentUser, setCurrentUser] = useState('');
    const [appState, setAppState] = useState("login");
    const [drawerOpen, setdrawerOpen] = useState(true);
    const [activeSideBarTab, setactiveSideBarTab] = useState("Inbox");
    const [composeOpen, setcomposeOpen] = useState(false);
    const [activeMainTab, setactiveMainTab] = useState("Primary")
    
    useEffect(() => {
        // some logic is executed whenever val in [] is changed
        // if [] empty, runs once
        
        auth.onAuthStateChanged((user) => {
            if (user){
                setAppState("loading")
                setCurrentUser(user)
            } else{
                setCurrentUser(null)
                setAppState("login")
            }
            //console.log("currentUser",currentUser)
        })
    },[]);

    const value = {
        currentUser,
        appState,
        setAppState,
        drawerOpen, 
        setdrawerOpen,
        activeSideBarTab, 
        setactiveSideBarTab,
        composeOpen,
        setcomposeOpen,
        activeMainTab, 
        setactiveMainTab
    };

    return(
        <UserContext.Provider value={value}>
                {children}
        </UserContext.Provider>
    )
}