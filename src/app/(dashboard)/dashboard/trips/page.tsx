import TravelForm from '@/src/components/TravelForm'
import DashboardHeader from '@/src/features/dashboard/DashboardHeader'
import React from 'react'

const page = () => {
  return (
    <main>
       <DashboardHeader
      title="Add new Trips"
      description="View and generate AI travel plans"
      showButton
      buttonLabel="Create a trip"

    />

      <div className="min-h-screen bg-gray-50 p-8">
      <TravelForm />
    </div>
    </main>
   
  )
}

export default page
