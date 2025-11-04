import React from 'react'
import DashboardStats from './DashboardStats'
import TripsSection from './TripsSection'

const DashbordComponents = () => {
  return (
    <main className='mt-10 space-y-6'>
       <DashboardStats/>
       <TripsSection/>
    </main>
  )
}

export default DashbordComponents