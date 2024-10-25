import React from 'react'
import Signup from '../form/Signup'
import Link from 'next/link'

export async function generateMetadata({ params }) {
  return {
    title: 'Register',
  }
}

export default function page() {
  return (

<>
<div className='py-4 mt-4'>
    <div className='header text-center'>
         <Link href={'/'} className='text-3xl primaryText font-bold '>Connect</Link>
     </div>
     <div className='recentlogin text-center py-3'>
         <p className='text-xl '>Recent logins</p>
 
     </div>
    </div>
    <Signup/>
</>
  )
}
