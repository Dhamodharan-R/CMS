import React from 'react'
import {Outlet} from "react-router-dom"
import Login from '../Login/Login'

const userAuth = ()=>{
    const token = localStorage.getItem("token")
    console.log(token);
    return token;
}

function Protected() {

    const isloggedin = userAuth();
    console.log(isloggedin)
    return isloggedin ? <Outlet/> : <Login/>
}

export default Protected
