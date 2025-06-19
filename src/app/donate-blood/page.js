import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen">
        <div className="text-red-600 text-2xl font-semibold flex items-center gap-3">
          <span>😔</span>
          <span>Coming Soon</span>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default page
