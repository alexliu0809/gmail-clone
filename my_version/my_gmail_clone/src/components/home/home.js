import React from 'react'
import { useLocalContext } from '../../context/context'
import { Header, Sidebar, Compose, Main} from "..";


import './styles.css'

const Home = () => {
    const {composeOpen, setcomposeOpen} = useLocalContext();

    return (
        <div className='home'>
            {composeOpen && <Compose />}
            <Header />
            <Sidebar>
                <Main>
                </Main>
            </Sidebar>
        </div>
    )
}

export default Home