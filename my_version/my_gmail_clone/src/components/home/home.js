import React from 'react'
import { useLocalContext } from '../../context/context'
import { Header, Sidebar, Compose, Main, ViewMail} from "..";


import './styles.css'

const Home = ({showMails=true, mailState}) => {
    const {composeOpen, setcomposeOpen} = useLocalContext();

    return (
        <div className='home'>
            {composeOpen && <Compose />}
            <Header />
            <Sidebar>
                {showMails ? (
                    <Main>

                    </Main>
                ) : (<ViewMail mailState={mailState}></ViewMail>)
                }
            </Sidebar>
        </div>
    )
}

export default Home