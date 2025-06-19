import React from 'react'

const State = () => {
  return (
  <section className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8 py-24 text-center bg-white">
        <div>
          <h2 className="text-2xl font-bold text-red-600">10,000+</h2>
          <p className="text-gray-600">Lives Saved</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-red-600">5,000+</h2>
          <p className="text-gray-600">Active Donors</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-red-600">24/7</h2>
          <p className="text-gray-600">Support Available</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-red-600">100+</h2>
          <p className="text-gray-600">Partner Hospitals</p>
        </div>
      </section>
  )
}

export default State