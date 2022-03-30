import React from 'react'
import { useLocalContext } from '../../context/context'
import { Header, Sidebar, Compose } from "..";


import './styles.css'

const Home = () => {
    const {composeOpen, setcomposeOpen} = useLocalContext();

    return (
        <div className='home'>
            {composeOpen && <Compose />}
            <Header />
            <Sidebar />
        </div>
    )
}

export default Home