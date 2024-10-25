import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from 'react'
import Home from './components/Home'

export default function page() {

  const cookie=cookies()
  if(cookie.has('token')){
    redirect('/main')
  }


  return (
    <>
<div className='mt-6'>
<Home/>
</div>
    </>
  )
}


