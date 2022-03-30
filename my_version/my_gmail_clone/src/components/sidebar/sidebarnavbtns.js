
import { Badge } from "@material-ui/core";
import { Inbox, Keyboard, Videocam } from "@material-ui/icons";import React, { useState } from "react";
import { useLocalContext } from '../../context/context'



const SidebarNavBtn = () => {  

  return (
      <div className="sidebar__btns">
        <SideButton name="Inbox" />
        <SideButton name="Sent" />
        <SideButton name="Starred" />
        <SideButton name="All Mail" />
        <SideButton name="Spam" />
      </div>
  );
};

export default SidebarNavBtn;

const SideButton = (props) => {
    const {drawerOpen, setactiveSideBarTab, activeSideBarTab} = useLocalContext();


    return (
        <div className={`sidebar__btn sidebar__topBtn ${
            !drawerOpen && "sidebar__btnClose"
              } ${activeSideBarTab === props.name && "sidebar__active"}`}
              onClick={() => setactiveSideBarTab(props.name)}
              >
            <div
            className={`sidebar__btnLeft ${
                !drawerOpen && "sidebar__btnLeftClose"
            }`}
            >
                  {drawerOpen ? (
                      <>
                      <Inbox className="sidebar__icon" />
                      <p>{props.name}</p>
                      </>
                  ) : (
                      <Badge badgeContent={0} color="error">
                      <Inbox className="sidebar__icon" />
                      </Badge>
                  )}
             </div>
  
            <div className={`sidebar__unread ${!drawerOpen && `sidebar__unreadClose`}`}>
                <p>10</p>
            </div>
          </div>

    )
}

