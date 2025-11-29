import React from 'react'
import DashboardStats from './DashboardStats'
import TripsSection from './TripsSection'
import DashboardCharts from './DashboardCharts'
import DashboardLists from './DashboardLists'

const DashbordComponents = () => {
  return (
    <main className='mt-10 space-y-6'>
       <DashboardStats/>
       <TripsSection/>
       <DashboardCharts/>
       <DashboardLists/>
    </main>
  )
}

export default DashbordComponents