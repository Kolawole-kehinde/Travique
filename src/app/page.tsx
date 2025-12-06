import React, { Suspense } from 'react'
import AuthLayout from '../features/auth/AuthLayout'
import AuthForm from '../features/auth/AuthForm'

const Homepage = () => {
  return (
   <AuthLayout descrition="Sign in with Google to explore AI-generated itineraries, trending destinations, and much more">
      <Suspense fallback={<div>Loading...</div>}>
        <AuthForm />
      </Suspense>
   </AuthLayout>
  )
}

export default Homepage