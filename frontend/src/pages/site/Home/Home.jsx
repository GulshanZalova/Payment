import React, { useContext } from 'react'
import MainContext from '../../../context/context'
import List from '../../../components/List/List'

const Home = () => {
    return (
        <div className='container'>
            <List />
        </div>
    )
}

export default Home