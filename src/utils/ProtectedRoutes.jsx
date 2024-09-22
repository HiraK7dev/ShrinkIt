import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

function ProtectedRoutes() {

    const user = true;
    //User authentication will be implemented later

    return (
        <>
        <Header/>
            {
                user != null ? <Outlet /> : <></>
            }
        </>
    )
}

export default ProtectedRoutes