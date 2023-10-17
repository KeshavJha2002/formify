import React from 'react'
import { UserButton } from '@clerk/nextjs'

const page = () => {
  return (
    <div>
      App
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}

export default page
