import { Checkbox } from "@material-ui/core";
import { CheckBox } from "@material-ui/icons";
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
import "./styles.css";

const Main = () => {
    const { drawerOpen } = useLocalContext();
    const [ activeMainTab, setactiveMainTab ] = useState("Primary")

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

        <div className="main__tabs">
            <div className={`main__tab ${activeMainTab === "Primary" && " main__tabPrimary--active"}`}
            onClick={() => {setactiveMainTab("Primary")}}
            >
                <Inbox />
                <p>Primary</p>
                <div className="mail__unread primary--unread">
                5 new
                </div>
            </div>

            <div className={`main__tab ${activeMainTab === "Social" && " main__tabSocial--active"}`}
            onClick={() => {setactiveMainTab("Social")}}
            >
                <People />
                <p>Social</p>
                <div className="mail__unread social--unread">
                5 new
                </div>
            </div>

            <div className={`main__tab ${activeMainTab === "Promotions" && " main__tabPromotions--active"}`}
            onClick={() => {setactiveMainTab("Promotions")}}
            >
                <LocalOffer />
                <p>Promotions</p>
                <div className="mail__unread promotions--unread">
                5 new
                </div>
            </div>

        </div>

    </div>
  );
};

export default Main;