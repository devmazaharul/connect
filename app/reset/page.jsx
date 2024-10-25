import Reset from '../form/Reset'
import Link from 'next/link'

export async function generateMetadata({ params }) {
  return {
    title: 'Reset',
  }
}

export default function page() {
  return (
    <>
     <div className='py-4 mt-4'>
    <div className='header text-center'>
    <Link href={'/'} className='text-3xl primaryText font-bold '>Connect</Link>
     </div>
    
    </div>

    <Reset/>
    </>
  )
}
