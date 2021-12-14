import React from 'react'
import {Link} from "react-router-dom" 
import "./nav.css"
import log from "../Images/logo192.png"


function Nav() {
    return (
        <div className='n'>
            <div className='n-l'>
                <img className='n-l-logo' src={log} alt=''/>

            </div>
            <div className='n-r'>
                <ul className='n-r-ul'>

                    <li className='n-li'><Link className='lk' to="/">Home</Link></li>
                    <li className='n-li'><Link className='lk' to="/posts">Posts</Link></li>
                    <li className='n-li'><a className='lk' href="https://dhamodharan-portfolio.netlify.app/">About</a></li>
                    <li className='n-li'><Link className='lk' to="/login">Login</Link></li>
                    <li className='n-li'><Link className='lk' to="/register">Register</Link></li>
                   
                </ul>
            </div>

            
        </div>
    )
}

export default Nav
