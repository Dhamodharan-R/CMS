import React from 'react'
import imge from "../Images/13.png"
import "./404.css"
function Pagenotfound() {
    return (
        <div className='pnf'>
            <img className='pnfi' src={imge} alt='404 Page doesnt exist'/>
        </div>
    )
}

export default Pagenotfound
