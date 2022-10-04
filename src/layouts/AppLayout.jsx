import React from 'react';
import { Outlet } from 'react-router-dom'
import Header from '../components/Header';

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <div className="app__content">
                <Outlet />
            </div>
        </div>
    );
};

export default AppLayout;