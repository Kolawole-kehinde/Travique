import TravelForm from '@/src/components/CreateTripsForm'
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

      <div className="mt-2.5 w-full max-w-3xl px-4 lg:px-8 mx-auto">
      <TravelForm />
    </div>
    </main>
   
  )
}

export default page
