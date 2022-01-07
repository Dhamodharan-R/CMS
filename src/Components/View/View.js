import React ,{useEffect,useState } from 'react'
import { useParams} from 'react-router-dom'
import "./view.css"
import axios from 'axios';

 const url ="https://jsonplaceholder.typicode.com/users/"
 const urlp ="http://jsonplaceholder.typicode.com/posts"
 const urlc ="http://jsonplaceholder.typicode.com/comments"

function View() {
   const params = useParams();

   const [states, setstates] = useState({})

   const [posts, setposts] = useState({})

   useEffect( async() => {
      const  {data} = await axios.get(`${url}/${params._id}`)
      console.log(data);

       setstates(data)

    const {data:po} = await axios.get(`${urlp}/${params.ids}`)
    console.log(po);

    setposts(po)

    const {data:co } = await axios.get(`${urlc}/${params.id}`)

    console.log(co)
   }, [])

  const {name,username,email,address,website} = states; 
   const {title,body,id,userId}=posts;
    return (
        
        <div className='v'>
            <div className='v-u'>
                <h2>User Details</h2>
            <p><b>Name: </b>{name}</p>
           <p><b>User Name:</b>{username}</p>
           <p><b>Email:</b>{email}</p>
            <p><b>Address:</b>{address ? address.street +","+address.suite +"," +address.city +","+ address.zipcode : "Not available"} </p>
            <p><b>Website:</b>{website}</p>

            </div>
          
            <div className='v-c'>


            </div>
           
           
        </div>
    )
}
 
export default View
