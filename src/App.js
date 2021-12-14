import React from 'react'
import {BrowserRouter, Routes,Route,Link} from "react-router-dom" 
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Nav from './Components/Nav/Nav'
import Posts from './Components/Posts/Posts'
import Register from './Components/Register/Register'
import Protected from './Components/ProtectedPage/Protected'
import Pagenotfound from './Components/404Page/Pagenotfound'


function App() {
    return (
        
            <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="*" element={<Pagenotfound/>}/>
                <Route element={<Protected/>} >
                     <Route path="/posts" element={<Posts/>}/>
                </Route>
                
            </Routes>
            </BrowserRouter>
            
        
    )
}

export default App
