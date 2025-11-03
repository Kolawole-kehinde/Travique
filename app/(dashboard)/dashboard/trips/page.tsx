import DashboardHeader from '@/features/dashboard/DashboardHeader'
import React from 'react'

const page = () => {
  return (
    <DashboardHeader
      title="Add new Trips"
      description="View and generate AI travel plans"
      showButton
      buttonLabel="Create a trip"

    />
  )
}

export default page
