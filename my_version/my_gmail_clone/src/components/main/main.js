import { Checkbox } from "@material-ui/core";
import { CheckBox } from "@material-ui/icons";
import { useEffect } from "react";
import ReactDOM from 'react-dom';

import {
  Error,
  Inbox,
  LocalOffer,
  MoreVert,
  People,
  Refresh,
  
} from "@material-ui/icons";
import React, { useState } from "react";
import { useLocalContext } from '../../context/context'
import { useMailContext } from '../../context/mailcontext'

import "./styles.css";
import { Mail } from "..";

const Main = () => {
    const { drawerOpen, activeSideBarTab, activeMainTab, setactiveMainTab } = useLocalContext();
    const { mailsOfWindow, primaryUnreadNumber, socialUnreadNumber, promoUnreadNumber } = useMailContext();
    console.log("mailsOfWindow", mailsOfWindow)
  return (
    <div className={`main ${drawerOpen && "main--fullWidth"}`}>

        <div className="main__controlBtns">
            <Checkbox color="secondary" className="main__check" />
            <Refresh />
            <MoreVert />
        </div>
        
        
        {activeSideBarTab === 'Inbox' &&

            <div className="main__tabs">
            <div className={`main__tab ${activeMainTab === "Primary" && " main__tabPrimary--active"}`}
            onClick={() => {setactiveMainTab("Primary")}}
            >
                <Inbox />
                <p>Primary</p>
                {primaryUnreadNumber !== 0 && 
                <div className="mail__unread primary--unread">
                {primaryUnreadNumber} new
                </div>
                }
                
            </div>

            <div className={`main__tab ${activeMainTab === "Social" && " main__tabSocial--active"}`}
            onClick={() => {setactiveMainTab("Social")}}
            >
                <People />
                <p>Social</p>
                {socialUnreadNumber !== 0 &&
                <div className="mail__unread social--unread">
                {socialUnreadNumber} new
                </div>
                }
                
            </div>

            <div className={`main__tab ${activeMainTab === "Promotions" && " main__tabPromotions--active"}`}
            onClick={() => {setactiveMainTab("Promotions")}}
            >
                <LocalOffer />
                <p>Promotions</p>
                { promoUnreadNumber !== 0 &&
                    <div className="mail__unread promotions--unread">
                    {promoUnreadNumber} new
                    </div>
                }
                
            </div>

        </div>
        }

        <div className="main__mails" id="main_mailsofwindow">
            {mailsOfWindow !== undefined && 
            mailsOfWindow.map((mailstate, _) => (
            <Mail mailState={mailstate}>
            </Mail>
            ))
            }
        </div>

    </div>
  );
};

export default Main;