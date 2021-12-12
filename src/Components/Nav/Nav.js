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

                    <li className='n-li'><button className='n-b'><Link to="/">Home</Link></button></li>
                    <li className='n-li'><button className='n-b'><Link to="/posts">Posts</Link></button></li>
                    <li className='n-li'><button className='n-b'><a href="https://dhamodharan-portfolio.netlify.app/">About</a></button></li>
                    <li className='n-li'><button className='n-b'><Link to="/login">Login</Link></button></li>
                    <li className='n-li'><button className='n-b'><Link to="/register">Register</Link></button></li>
                   
                </ul>
            </div>

            
        </div>
    )
}

export default Nav
