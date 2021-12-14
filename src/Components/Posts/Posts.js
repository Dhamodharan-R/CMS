import { useEffect,useState } from "react"
import React from 'react'
import axios from "axios"
import "./posts.css"

const url = "https://jsonplaceholderapi.herokuapp.com/posts";

function Posts() {

    const [postt, setpostt] = useState({
        id:"",
        userId:"",
        title:"",
        body:"",
        _id:"",
    })
    const [state, setstate] = useState([])



    const handleChange = ({target:{name,value}})=>{

        switch (name) {
            case "id":
                setpostt({...postt,id:value})
                break;
            case "userId":
                setpostt({...postt,userId:value})
                break;
            case "title":
                setpostt({...postt,title:value})
                break;
            case "body":
                setpostt({...postt,body:value})
                break;   

            default:
                break;
        }



    }

    const handleSubmit =async (event)=>{
        
        const{id,userId,title,body}=postt
        event.preventDefault();

        if(postt._id){
            console.log("update")
        }
        else {
            const data =await axios.post(url,{id:id,userId:userId,title:title,body:body})
            console.log(postt);
            console.log(data);
        }  
    }

    const handleDelete = async(_id)=>{
        console.log(_id);
        const data = await axios.delete(`${url}/${_id}`) 
        console.log(data)
    }

    const handleUpdate =(post)=>{

        console.log(post)
        setpostt(post)
        
    }

    useEffect(async () => {
        const {data} = await axios.get(url)
        
        setstate(data)
    }, [])

    return (
        <div className='p'>
            <div className="post-form">
                <form action="" onSubmit={handleSubmit}>
                    <label className="p-lable">Id</label><br/>
                    <input type="text" name="id" value={postt.id} onChange={handleChange} required/><br/>
                    <label className="p-lable">UserId</label><br/>
                    <input type="text"  placeholder="Enter between 1 to 10" name="userId" value={postt.userId} onChange={handleChange} required/><br/>
                    <label className="p-lable">Title</label><br/>
                    <input type="text" name="title" value={postt.title} onChange={handleChange} required/><br/>
                    <label className="p-lable">Body</label><br/>
                    <input type="text" name="body" value={postt.body} onChange={handleChange} required/><br/>
                    <div className="p-btm">
                    <button type="submit" >Submit</button><br/>
                    </div>
                </form>
            </div>
           <table className="p-t">
               <thead>
                   <tr>
                       <th>Id</th>
                       <th>UserId</th>
                       <th>Title</th>
                       <th>Body</th>
                       <th>Action</th>
                   </tr>
               </thead>
               <tbody>
                   {state.map((post)=>{
                       return(
                           <tr key={post._id}>
                           <td>{post.id}</td>
                           <td>{post.userId}</td>
                           <td>{post.title}</td>
                           <td>{post.body}</td>
                           <td><button onClick={()=>{handleDelete(`${post._id}`)}}>Delete</button><br/><button onClick={()=>{handleUpdate(post)}}>Update</button><br/><button>View</button></td>
                           </tr>
                       )
                   })}
               </tbody>
           </table>
        </div>
    )
}

export default Posts
