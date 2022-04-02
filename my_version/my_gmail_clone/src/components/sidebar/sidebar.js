import React from 'react'
import clsx from "clsx";
import './styles.css'
import { useLocalContext } from '../../context/context'
import { FormatColorTextSharp } from '@material-ui/icons';
import { Avatar, Badge, Drawer, makeStyles } from "@material-ui/core";
import SidebarNavBtn, {MeetBtn, HangoutBtn}  from './sidebarnavbtns';

const drawerWidth = 256;

const Sidebar = ( { children }) => {
    

    // imported from material-ui
    const useStyles = makeStyles((theme) => ({
        root: {
          display: "flex",
        },
      
        drawerOpen: {
          width: drawerWidth,
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
        drawerClose: {
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          overflowX: "hidden",
          width: theme.spacing(7) + 1,
          [theme.breakpoints.up("sm")]: {
            width: "70px",
          },
        },
      }));


    const {currentUser, drawerOpen, composeOpen, setcomposeOpen} = useLocalContext();
    const classes = useStyles();

    return (
        <div className='sidebar'>
            <div className={classes.root}>
                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {
                    [classes.drawerOpen]: drawerOpen,
                    [classes.drawerClose]: !drawerOpen,
                    })}
                    classes={{
                    paper: clsx({
                        [classes.drawerOpen]: drawerOpen,
                        [classes.drawerClose]: !drawerOpen,
                    }),
                    }}
                > 
                
                <div
                    className={`sidebar__compose ${
                    !drawerOpen && "sidebar__composeClose"
                    }`}
                    onClick={() => setcomposeOpen(!composeOpen)}
                >
                <img
                className="sidebar__addIMG"
                src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png"
                alt="add"
                />
                <p>Compose</p>
                </div>

                <SidebarNavBtn>
                </SidebarNavBtn>
                <MeetBtn />
                <HangoutBtn />
                </Drawer>
                {children}
            </div>
        </div>
        
    )
}

export default Sidebar