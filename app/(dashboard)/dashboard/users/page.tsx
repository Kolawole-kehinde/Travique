import DashboardHeader from '@/features/dashboard/DashboardHeader'
import DashboardUserTable from '@/features/dashboard/users/DashboardUserTable'
import React from 'react'

const page = () => {
  return (
    <main className='space-y-6'>
       <DashboardHeader
      title="Manage Users"
      description="Filter, sort, and access detailed user profiles"
      showButton
      buttonLabel="Add new user"

    />
      <DashboardUserTable/>
    </main>
   
    
  )
}

export default page
