import React from 'react'
import Login from './Login'

export default function layout() {
  return (
    <>
     <div className='p-2'>
       <div className='py-4'>
       <div className='header text-center'>
            <h1 className='text-3xl text-sky-400 font-bold '>Connect</h1>
        </div>
        <div className='recentlogin text-center py-3'>
            <p className='text-xl '>Recent logins</p>
    
        </div>
       </div>

        <div className='mx-auto'>
            <Login/>
        </div>
    
    </div>

    </>
  )
}
