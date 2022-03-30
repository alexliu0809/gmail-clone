import React from 'react'

import { Header, Sidebar } from "..";


import './styles.css'

const Home = () => {
    return (
        <div className='home'>
            <Header />
            <Sidebar />
        </div>
    )
}

export default Home