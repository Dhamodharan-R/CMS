import React from 'react'
import wc from "../Images/wc.jpg"
import "./home.css"

function Home() {
    return (
        <div className='h'>
          
            <div className='h-l'>
            <marquee className="mq" width="50%" direction="left" height="50px">Login to get access to Posts Page</marquee>
                <h1 className='hh'>Blog App</h1>
                <p className='subh'>Created by using </p>
                <div className='hw'>
                    <ul className='hc'>
                        <li className='hli'>React js</li>
                        <li className='hli'>Node js</li>
                        <li className='hli'>Express js</li>
                        <li className='hli'>Mongodb</li>
                        <li className='hli'>Netlify</li>
                        
                    </ul>

                </div>
                

            </div>
            <div className='h-r'>
                <img className='lp' src={wc} alt='' />
            </div>
           
        </div>
    )
}

export default Home
