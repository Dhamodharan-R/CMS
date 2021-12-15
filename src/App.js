import React from 'react'
import {BrowserRouter, Routes,Route} from "react-router-dom" 
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Nav from './Components/Nav/Nav'
import Posts from './Components/Posts/Posts'
import Register from './Components/Register/Register'
import Protected from './Components/ProtectedPage/Protected'
import Pagenotfound from './Components/404Page/Pagenotfound'
import Footer from './Components/footer/Footer'
import View from './Components/View/View'


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
                <Route path="/view/:_id/:ids" element={<View/>}/>
                <Route element={<Protected/>} >
                     <Route path="/posts" element={<Posts/>}/>
                </Route>
                
            </Routes>
            <Footer/>
            </BrowserRouter>
            
        
    )
}

export default App
