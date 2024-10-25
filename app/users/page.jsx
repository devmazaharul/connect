'use client'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { apiurl } from '../config/info'
import Link from 'next/link'
import  Axios from 'axios'
export default function Getusers() {
    
    const [users, setusers] = useState([])
    const [err, setErr] = useState('')
  
    useEffect(()=>{
       
        getUsers()
    },[])

    const getUsers=async()=>{
        try {
         const result=await fetch(apiurl+'users')
         if(result.ok){
             const {message,data}=await result.json()
             if(result.status==200){
                 setusers(data)
                 
             }
         }
        } catch  {
         toast.error("Connection error")
        }
     }
    const handleChange=async(id)=>{
        try {
         
            const res=await Axios.post(apiurl+"deleteuser",{id})
            if(res.status==200){
                toast.success(res.data.message)
                getUsers()
            }
            
        } catch  {
            toast.error("Connection error")
        }
    }





  return (
    <>
    {users.length==0?<p>No user found</p>:(
  <>
    {users && (
           <div>
           <table className="table-auto border">
       <thead>
         <tr>
           <th >Id</th>
           <th>Name</th>
           <th>Email</th>
           <th>Gender</th>
     
           <th>Created at</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>
         {users.map((user)=>(
             <tr>
                 <td>{user._id}</td>
                 <td>{user.fullname}</td>
                 <td>{user.email}</td>
                 <td>{user.gender}</td>
     
                 <td>{user.createdat}</td>
                 <td><button onClick={()=>handleChange(user._id)}  className='bg-indigo-500 px-2 text-white rounded-md'>Delete</button></td>
             </tr>
         ))}
       
       </tbody>
     </table>
         </div>
    )}
  </>
    )}
    </>
  )
}
