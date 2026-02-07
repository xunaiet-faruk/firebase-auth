import React from 'react';
import Navabr from './Navabr';
import { Outlet } from 'react-router';

const Layout = () => {
    return (
        <div>
            <Navabr />
            <Outlet />
        </div>
    );
};

export default Layout;