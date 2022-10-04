import React from 'react';
import {Routes, Route} from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import Home from '../pages/Home';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<Home />}/>
            </Route>
        </Routes>
    );
};

export default AppRouter;