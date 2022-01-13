import React from 'react'
import { Routes, Route } from 'react-router'
import {Navigate} from "react-router";
import cookie from 'cookie'
import Listings from './Listings'
import Login from './Login'
import Landing from "./Landing";
import BizDetails from "./BizDetails";


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/login" element={<Login />} />
            <Route
                exact path="/listings"
                element={
                    <RequireAuth redirectTo="/login">
                        <Listings />
                    </RequireAuth>
                }
            />
            <Route
                exact path={'/bizDetails/:id'}
                element={<BizDetails />} />
        </Routes>
    );
}

function RequireAuth({ children, redirectTo }) {
    let isAuthenticated = checkAuth();
    return isAuthenticated ? children: <Navigate to={redirectTo}/>;
}


const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedIn"] ? true : false
}
export default Router