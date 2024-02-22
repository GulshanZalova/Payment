import React from 'react'
import Header from '../../layout/Header/Header'
import { Outlet } from 'react-router'
import Footer from '../../layout/Footer/Footer'

const AdminRoot = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default AdminRoot