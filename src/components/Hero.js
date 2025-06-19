import React from 'react'
import { FaHeart, FaUsers } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="bg-red-50 py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Save Lives, Donate Blood
        </h1>
        <p className="text-gray-700 max-w-xl mx-auto mb-8">
          Connect blood donors with recipients in need. Join our community of
          life-savers and make a difference in someone’s life today.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="flex items-center bg-red-600 text-white px-6 py-3 rounded font-semibold hover:bg-red-700 transition">
            <FaHeart className="mr-2" /> Become a Donor
          </button>
          <button className="flex items-center bg-white border border-gray-300 text-black px-6 py-3 rounded font-semibold hover:shadow-md transition">
            <FaUsers className="mr-2" /> Request Blood
          </button>
        </div>
      </section>
  )
}

export default Hero