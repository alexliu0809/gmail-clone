import { createContext, useContext, useState } from "react";
import { useLocalContect, useLocalContext } from "./context";
import { useEffect } from "react";
import mails_data from './mail_conf.json';
import { db } from "../lib/firebase";

const MailContext = createContext()

export function useMailContext(){
    return useContext(MailContext);
}


export function MailContextProvider({children}){
    const [receiveMails,setreceiveMails] = useState([])
    const [allMails, setallMails] = useState([])
    const [mailsOfWindow,setmailsOfWindow] = useState([])

    const [primaryUnreadNumber, setprimaryUnreadNumber] = useState(0)
    const [socialUnreadNumber, setsocialUnreadNumber] = useState(0)
    const [promoUnreadNumber, setpromoUnreadNumber] = useState(0)


    let mailArray = []

    const {currentUser, activeSideBarTab, activeMainTab} = useLocalContext();

    const GenMailsFromConfFile = () =>{
        console.log("GenMailsFromConfFile")
        
        // console.log("Mails",mails_data);
        for (let i = 0; i < mails_data.length; i++) {
          let mail_data = mails_data[i]
          mailArray.push(mail_data)
        }

        setallMails(mailArray)
        console.log("allMails",allMails);
    }

    /*
    An initial call using the callback you provide creates a document 
    snapshot immediately with the current contents of the single document.
    Then, each time the contents change, 
    another call updates the document snapshot.
    */ 
    useEffect (() => {
        db.collection("MailPreference")
        .doc(currentUser.email)
        .collection("Mail").onSnapshot((snapshot) => {
           console.log(snapshot.docs)
        })
    },[currentUser.email])

    useEffect (() => {
        GenMailsFromConfFile();
    },[])

    useEffect (() => {
        setprimaryUnreadNumber(allMails.filter((e) => {
            return e.read === false && e.category === "Primary"
        }).length);

        setsocialUnreadNumber(allMails.filter((e) => {
            return e.read === false && e.category === "Social"
        }).length);

        setpromoUnreadNumber(allMails.filter((e) => {
            return e.read === false && e.category === "Promotions"
        }).length);
    },[allMails])

    useEffect (() => {
        if (activeSideBarTab === 'Inbox'){
            console.log("New mailsType", activeMainTab, allMails.filter((mail)=>mail.category===activeMainTab))
            setmailsOfWindow(allMails.filter((mail)=>mail.category===activeMainTab))
        } else if (activeSideBarTab === 'All Mail'){
            setmailsOfWindow(allMails.filter(()=>true))
        } else {
            setmailsOfWindow([])
        }
    },[activeSideBarTab,activeMainTab,allMails])
    
    const value={setmailsOfWindow,mailsOfWindow,primaryUnreadNumber,socialUnreadNumber,promoUnreadNumber}
    return (
        <MailContext.Provider value={value}>
            {children}
        </MailContext.Provider>
    )
}

