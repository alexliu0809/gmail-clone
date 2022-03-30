
import { Avatar } from "@material-ui/core";
import { Badge } from "@material-ui/core";
import { VideocamOff } from "@material-ui/icons";
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

export function MeetBtn(){
    const {drawerOpen} = useLocalContext();
    return (
        <div className="navabr__meetOptions">
            <p className="navbar__meetTitle">
                Meet
            </p>
            <div
            className={`sidebar__btn sidebar__topBtn ${!drawerOpen && "sidebar__btnLeftClose"}`}
            >
                <div className={`sidebar__btnLeft ${!drawerOpen && "sidebar__btnLeftClose"}`}>
                    {drawerOpen ? (
                        <>
                        <Videocam className="sidebar__icon">
                        </Videocam>
                        <p>New meeting</p>
                        </>
                    ) : (
                        <Videocam className="sidebar__icon">

                        </Videocam>
                    )}
                </div>
            </div>

            <div
            className={`sidebar__btn sidebar__topBtn ${!drawerOpen && "sidebar__btnLeftClose"}`}
            >
                <div className={`sidebar__btnLeft ${!drawerOpen && "sidebar__btnLeftClose"}`}>
                    {drawerOpen ? (
                        <>
                        <Videocam className="sidebar__icon">
                        </Videocam>
                        <p>Join a meeting</p>
                        </>
                    ) : (
                        <Videocam className="sidebar__icon">

                        </Videocam>
                    )}
                </div>
            </div>

        </div>
    )
}


export function HangoutBtn(){
    const {drawerOpen, currentUser} = useLocalContext();
    return (
       <div className="sidebar__hangoutsOptions">
           <div className="sidebar__hangoutsWrapper">
            <p className="navbar__meetTitle">
                Hangouts
            </p>
            <div className="sidebar__Hangoutsbadge">
                <Badge anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                    }
                }
                overlap="circular"
                color="error"
                variant="dot"
                >
                    <Avatar className="sidebar_avatarSmaller">

                    </Avatar>
                </Badge>
                <p>{currentUser.email}</p>

            </div>

           </div>
       </div>


    )
}
