import React,{useState} from 'react'
import {Link} from "react-router-dom" 
import axios from 'axios'
import register from "../Images/register.jpg"
import "./register.css"
const url ="https://jsonplaceholderapi.herokuapp.com/users/register"


let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

function Register() {

    const [msg, setmsg] = useState("");

    const [state, setstate] = useState({
        name:"",
        email:"",
        password:""
    })

    const [errors, seterrors] = useState({
        name:"",
        email:"",
        password:""
    })

    

    const handleSubmit = async(e)=>{
        const {name,email,password} = errors
        e.preventDefault();
        

        if(name || email || password){
            setmsg("Please checkout the errors!")
        }
        else{
            const {data:{message}} = await axios.post(url,state);
            console.log(message);
            setmsg(message);
        }

        console.log(state);
    }

    const handleChange = ({target:{name,value}})=>{


        
        
        switch (name) {
            case "name":
               
                setstate({...state,name:value})
                if(value.length>=5){
                    seterrors({...errors,name:""})
                }
                else if(value.length<5){
                    seterrors({...errors,name:"Fullname Should be atleast 5 characters"})
                }
                break;
            case "email":
                setstate({...state,email:value})
                if(regex.test(value)){
                    seterrors({...errors,email:""})  
                }
                else{
                    seterrors({...errors,email:"Invalid email"}) 
                }
                break;
            case "password":
                setstate({...state,password:value})
                if(value.length>=4){
                    seterrors({...errors,password:""})
                }
                else if(value.length<4){
                    seterrors({...errors,password:"Password Should be atleast 4 characters"})
                }
                break;

        
            default:
                break;
        }
    }
    return (
        <div className='r'>
            <div className='r-l'>
                <img className='r-l-i' src={register} alt=''/>

            </div>
            <div className='r-r'>
                <div className='r-r-f'>
                    <div  className="rff" >
                        <h2 className='r-r-h'>Welcome..!</h2>
                      <form >
                        <label className='r-lable' >Fullname</label>
                        <br/>
                        <input  type="text" name="name" value={state.name} required onChange={handleChange}></input><br/><span><p className='ers'>{errors.name}</p></span><br/>
                        <label className='r-lable' >Email address</label>
                        <br/>
                        <input  type="email" required name="email" value={state.email} onChange={handleChange}></input><br/><span><p className='ers'>{errors.email}</p></span><br/>
                        
                        <label className='l-lable' >Password</label>
                        <br/>
                        <input  type="password" name='password' value={state.password}  onChange={handleChange} required></input><br/><span><p className='ers'>{errors.password}</p></span><br/>
                        
                        <div className='r-btn'>
                        <button className="r-bt" type="submit" onClick={handleSubmit}>Sign up</button>
                        </div>
                        
                     </form>
                        <p className='r-nav'>Already registered User? <Link to="/login"> Sign in</Link> </p>
                        <p className='rmsg'>{msg}</p>

                    </div>
                    

                </div>
            </div>
            
        </div>
    )
}

export default Register
