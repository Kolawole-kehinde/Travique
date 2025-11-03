import DashboardHeader from '@/features/dashboard/DashboardHeader'
import React from 'react'

const page = () => {
  return (
    <DashboardHeader
      title="Manage Users"
      description="Filter, sort, and access detailed user profiles"
      showButton
      buttonLabel="Add new user"

    />
  )
}

export default page
