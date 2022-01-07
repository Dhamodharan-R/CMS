import React,{useState} from 'react'
import {Link} from "react-router-dom" 
import axios from 'axios'
import login from "../Images/login.jpg"
import "./login.css"


const url ="https://jsonplaceholderapi.herokuapp.com/users/login"

function Login() {

    const [msg,setmsg]=useState("")

    const [state, setstate] = useState({
        email:"",
        password:""
    })
    


    const handleChange =({target:{name,value}})=>{

        switch (name) {
            case "email":
            setstate({...state,email:value})
                
                break;
            case "password":
            setstate({...state,password:value})    
                
                break;
        
            default:
                break;
        }

    }

    const handleSubmit = async(e)=>{

        
        e.preventDefault();

        const {data} = await axios.post(url,state);
        console.log(data)
        if(data.Token){
        sessionStorage.setItem("logintoken",data.Token);
        
        setmsg(data.message);
            
        }
        
        else if(data.error){
            console.log(data.error.details[0].message)
             setmsg(data.error.details[0].message); 
            
            
        } 


    }


    return (
        <div className='l'>
            <div className='l-l'>
                <img className='l-l-i' src={login} alt=''/>

            </div>
            <div className='l-r'>
                <div className='l-r-f'>
                    <div  className="ff" >
                        <h2 className='l-r-h'>Welcome..!</h2>
                      <form>
                        <label className='l-lable'>Email address</label>
                        <br/>
                        <input  type="email" name='email' value={state.email} onChange={handleChange} required></input>
                        <br/>
                        <label className='l-lable' >Password</label>
                        <br/>
                        <input  type="password" name='password' value={state.password} onChange={handleChange} required></input>
                        <br/>
                        <div className='l-btn'>
                        <button className="l-bt" onClick={handleSubmit}>Sign in</button>
                        </div>
                        
                     </form>
                        <p className='l-nav'>Don't have an account? <Link to="/register"> Sign Up</Link> </p>
                        //<p className='lmsg'>{msg}<Link to="/posts">Go to posts</Link></p>
                    </div>
                    

                </div>
            </div>
            
        </div>
    )
}

export default Login
