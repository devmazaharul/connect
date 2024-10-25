'use client'
import { site_data } from '@/app/site_data/Data'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import "./dashboard.css"
import toast from 'react-hot-toast'
import  Axios  from 'axios'
import { apiurl } from '@/app/config/info'
import  jsCookie  from 'js-cookie';

export default function Rsidebar() {
const userToken=jsCookie.get('token')

const [state, setstate] = useState({})

  useEffect(()=>{
    const getCurrentuserinfo=async()=>{
      try {
        const {status,data}=await Axios.post(apiurl+'userinfo',{token:userToken})
        if(status==200){
          setstate(data.responce)
        }
      } catch (error) {
        toast.error("Connection error")
      }
    }
    getCurrentuserinfo()
  },[])





  return (
    <div>
     
      <div className="p-2  ">

      <div className='flex gap-2 py-1 mb-2 items-center justify-between'>
        <main className='flex gap-2 items-center'>
          <Image width={100} height={100} className='profilemage shadow-md'  alt="prfile image" src={'/mazaharul-islam.png'} />
          <div>
            <p>{state.fullname}</p>
            <p className='text-sm text-gray-500'>{state.userStatus}</p>
          </div>
        </main>
      <div>
        <button className='text-sky-500'>Switch</button>
      </div>

      </div>

     <div className='text-lg px-2 font-semibold text-gray-500'>
     <p>Suggested for you</p>

     </div>

      {
          site_data.map((item,i)=>(
            <div key={Math.random()} className='flex  justify-between gap-2 my-2  py-2   px-2  items-center'>
          <div className='flex items-center gap-2'>
          <Image className="friendsimage" alt="friends image" width={40} height={40} src={'/mazaharul-islam.png'}/>
            
            <div>
            <h1 className='font-semibold'>{item.name}</h1>
            <h1 className='text-sm text-gray-500'>{item.title}</h1>
            </div>
          </div>

            <Link href={'/'} className='text-sky-500'>{item.follow?"Unfollow":"Follow"}</Link>
            </div>
          ))
        }
        
      </div>
    </div>
  )
}
