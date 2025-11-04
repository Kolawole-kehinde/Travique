import React from 'react'
import DashboardStats from './DashboardStats'
import TripsSection from './TripsSection'
import DashboardCharts from './DashboardCharts'

const DashbordComponents = () => {
  return (
    <main className='mt-10 space-y-6'>
       <DashboardStats/>
       <TripsSection/>
       <DashboardCharts/>
    </main>
  )
}

export default DashbordComponents