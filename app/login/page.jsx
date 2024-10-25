import { cookies } from 'next/headers'
import Login from '../form/Login'
import Link from 'next/link'
import { redirect } from 'next/navigation'
export async function generateMetadata({ params }) {
  return {
    title: 'Login',
  }
}


export default function page() {

  const cookie=cookies()
  if(cookie.has('token')){
    redirect('/main')
  }


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

    <Login/>

    </>
  )
}
