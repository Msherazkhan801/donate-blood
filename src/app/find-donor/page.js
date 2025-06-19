'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { FaFilter, FaSearch } from 'react-icons/fa'
import { FaTint, FaMapMarkerAlt, FaHospitalUser, FaPhoneAlt, FaHandHoldingMedical } from 'react-icons/fa'

const requests = [
  {
    bloodType: 'B+',
    units: 2,
    patientName: 'Ahmed ali',
    location: 'Johar Town, Lahore',
    hospital: 'Shaukat Khanum Hospital',
    reason: 'Cancer treatment',
    requiredBy: '2025-06-21',
    distance: '2.1 km',
    urgent: true,
  },
  {
    bloodType: 'O-',
    units: 1,
    patientName: ' Ali',
    location: 'Model Town, Lahore',
    hospital: 'Ittefaq Hospital',
    reason: 'Accident emergency',
    requiredBy: '2025-06-20',
    distance: '4.3 km',
    urgent: true,
  },
  {
    bloodType: 'AB+',
    units: 3,
    patientName: 'Aslam ',
    location: 'Gulberg, Lahore',
    hospital: 'Hameed Latif Hospital',
    reason: 'Surgery required',
    requiredBy: '2025-06-23',
    distance: '3.6 km',
    urgent: false,
  },
]

export default function FindDonorPage() {
  return (
    <>
      <Navbar/>
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <div className="flex justify-center items-center gap-2 text-red-600 text-4xl">
          <FaSearch />
          <h1 className="text-3xl md:text-4xl font-bold text-black">Find Blood Requests</h1>
        </div>
        <p className="text-gray-700 mt-2">
          Search for patients in need of blood donation in your area
        </p>
      </div>

      {/* Search Filter Card */}
      <div className="bg-white rounded-md shadow p-6">
        <div className="flex items-center mb-4 text-lg font-semibold text-black">
          <FaFilter className="text-red-600 mr-2 text-xl" />
          Search Filters
        </div>
        <p className="text-gray-600 mb-6 text-sm">
          Filter blood requests by location, blood type and distance
        </p>

        {/* Filters Grid */}
        <form className="grid gap-4 md:grid-cols-3">
          {/* Blood Type */}
          <div>
            <label htmlFor="bloodType" className="block font-medium text-sm mb-1">Blood type</label>
            <select
              id="bloodType"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              <option>All types</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>AB+</option>
              <option>AB-</option>
              <option>O+</option>
              <option>O-</option>
            </select>
          </div>

          {/* City */}
          <div>
            <label htmlFor="city" className="block font-medium text-sm mb-1">City</label>
            <input
              id="city"
              type="text"
              placeholder="Enter city"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          {/* Distance */}
          <div>
            <label htmlFor="distance" className="block font-medium text-sm mb-1">Distance</label>
            <select
              id="distance"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              <option>Within 10 miles</option>
              <option>Within 20 miles</option>
              <option>Within 40 miles</option>
              <option>Within 100 miles</option>
            </select>
          </div>
        </form>

        {/* Search Button */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="flex items-center gap-2 bg-red-600 text-white font-semibold px-6 py-3 rounded hover:bg-red-700 transition"
          >
            <FaSearch />
            Search Blood Request
          </button>
        </div>
      </div>
    </section>
      <div className="p-6 md:p-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Blood Requests ({requests.length} found)</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {requests.map((req, idx) => (
          <div key={idx} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
            <div className="flex justify-between items-start mb-2">
              <div className="text-gray-800 font-semibold">
                <FaTint className="inline-block text-red-600 mr-1" />
                Blood Type: {req.bloodType}
              </div>
              {req.urgent && (
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-medium">
                  Immediate
                </span>
              )}
            </div>
            <p className="text-gray-700 mb-2">{req.units} unit(s) needed for {req.patientName}</p>
            <p className="text-gray-600 flex items-center mb-1">
              <FaMapMarkerAlt className="mr-2 text-gray-500" />
              {req.location}
            </p>
            <p className="text-gray-600 flex items-center mb-1">
              <FaHospitalUser className="mr-2 text-gray-500" />
              <strong>{req.hospital}</strong>
              <span className="ml-1">– {req.reason}</span>
            </p>
            <p className="text-sm text-gray-500 mb-2">Required by: {req.requiredBy}</p>
            <hr className="my-2" />
            <p className="text-sm text-gray-600 mb-3">Distance: {req.distance}</p>
            <div className="flex gap-2">
              <button className="flex items-center border border-gray-300 px-3 py-1 rounded text-sm hover:bg-gray-100">
                <FaPhoneAlt className="mr-2" /> Contact
              </button>
              <button className="flex items-center bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700">
                <FaHandHoldingMedical className="mr-2" /> Donate Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  )
}
