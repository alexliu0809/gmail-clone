import { Checkbox } from "@material-ui/core";
import { CheckBox } from "@material-ui/icons";
import { useEffect } from "react";

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

  return (
    <div className={`main ${drawerOpen && "main--fullWidth"}`}>
        <div className="main__controlBtns">
            <CheckBox color="secondary" className="mail__check">
            </CheckBox>
            <Refresh>
            </Refresh>
            <MoreVert>
            </MoreVert>
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

        <div className="main__mails">
            {mailsOfWindow != undefined && mailsOfWindow.map((mail, _) => (
            <Mail data={mail}/>
            ))}
        </div>

    </div>
  );
};

export default Main;