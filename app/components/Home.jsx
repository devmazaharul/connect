import React from 'react'
import Login from '../form/Login'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='p-2 mt-4 '>
       <div className='py-4'>
       <div className='header text-center'>
       <Link href={'/'} className='text-3xl primaryText font-bold '>Connect</Link>
        </div>
        <div className='recentlogin text-center py-3 '>
            <p className='text-xl '>Recent logins</p>
    
        </div>
       </div>

        <div className='mx-auto'>
          <Login/>
        </div>
    
    </div>
  )
}
