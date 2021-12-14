import React from 'react'
import {Outlet} from "react-router-dom"
import Login from '../Login/Login'

const userAuth = ()=>{
    const token = sessionStorage.getItem("logintoken")
    
    return token;
}

function Protected() {

    const isloggedin = userAuth();
    
    return isloggedin ? <Outlet/> : <Login/>
}

export default Protected
