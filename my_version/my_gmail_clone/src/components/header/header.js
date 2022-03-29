import React from 'react'
import { Apps, Menu, Search, Settings, HelpOutline } from '@material-ui/icons'
import './styles.css'
import { Avatar } from '@material-ui/core'
import { Popover } from '@material-ui/core'

const Header = () => {
    return (
        <div className='home__header'>
            <div className='home__left'>
                <Menu
                className="home__menuIcon"
                />
                <img className="home__logo" src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r2.png" alt="Gmail" />
            </div>

            <div className='home__center'>
                <Search />
                <input className='home__input' placeholder="Search Mail"></input>
            </div>

            <div className='home__right'>
                <HelpOutline>                    
                </HelpOutline>
                <Settings />
                <Apps />
                <Avatar styles={{cursor: "pointer"}}></Avatar>
                <Popover className='home__popover'></Popover>
            </div>
        </div>
    )
}

export default Header