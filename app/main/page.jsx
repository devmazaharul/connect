import { cookies } from 'next/headers'
import React from 'react'

export async function generateMetadata({ params }) {
  return {
    title: 'Dashboard',
  }
}

export default function page() {



  return (
    <div>page</div>
  )
}
