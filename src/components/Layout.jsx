import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './Navbar';

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <h2>footer</h2>
        </div>
    );
};

export default Layout;