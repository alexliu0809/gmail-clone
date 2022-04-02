import { createContext, useContext, useState } from "react";
import { useLocalContect, useLocalContext } from "./context";
import { useEffect } from "react";
import mails_data from './mail_conf.json';
import { db } from "../lib/firebase";
import ReactDOM from 'react-dom';

import { MailComp } from "../components";
import React from 'react'



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
          const instance = new MailComp({
            participant_id:mails_data[i].participant_id,
            participant_email:mails_data[i].participant_email,
            from:mails_data[i].from,
            from_name:mails_data[i].from_name,
            mailfrom: mails_data[i].mailfrom,
            to: mails_data[i].to,
            body: mails_data[i].body,
            subject:mails_data[i].subject,
            read:mails_data[i].read,
            category: mails_data[i].category,
            date: mails_data[i].date
        });

        // const instance = <MailComp2 
        //     participant_id={mails_data[i].participant_id}
        //     participant_email={mails_data[i].participant_email}
        //     from={mails_data[i].from}
        //     from_name={mails_data[i].from_name}
        //     mailfrom={mails_data[i].mailfrom}
        //     to={mails_data[i].to}
        //     body={mails_data[i].body}
        //     subject={mails_data[i].subject}
        //     read={mails_data[i].read}
        //     category={mails_data[i].category}
        //     date={mails_data[i].date}
        // />
          console.log("instance",instance,instance.state.from,instance.state.from_name);
          mailArray.push(instance)
        }

        setallMails(mailArray)
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
        console.log("allMails", allMails)
        setprimaryUnreadNumber(allMails.filter((e) => {
            return e.state.read === false && e.state.category === "Primary"
        }).length);

        setsocialUnreadNumber(allMails.filter((e) => {
            return e.state.read === false && e.state.category === "Social"
        }).length);

        setpromoUnreadNumber(allMails.filter((e) => {
            return e.state.read === false && e.state.category === "Promotions"
        }).length);
    },[allMails])

    useEffect (() => {
        if (activeSideBarTab === 'Inbox'){
            console.log("New mailsType", activeMainTab, allMails.filter((mail)=>mail.state.category===activeMainTab))
            setmailsOfWindow(allMails.filter((mail)=>mail.state.category===activeMainTab))
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