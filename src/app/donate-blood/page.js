'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React, { useState } from 'react'
import { FaUser, FaTint, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

const Page = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    weight: '',
    bloodType: '',
    lastDonation: '',
    medical: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    emergencyName: '',
    emergencyPhone: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submitted data:', formData)

    // You can now send `formData` via fetch/axios to your API
    // fetch('/api/submit', { method: 'POST', body: JSON.stringify(formData) })
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white px-4 py-10 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="text-center mb-10">
              <div className="text-5xl text-red-500 mb-2">❤️</div>
          {/* <img src="/assets/images/logo.png" alt="logo" className="h-12 w-12 text-5xl text-red-500 mb-2 center" /> */}

              <h1 className="text-3xl font-bold">Become a Blood Donor</h1>
              <p className="text-gray-600 mt-2">Join our community of life-savers. Your donation can save up to 3 lives.</p>
            </div>

            {/* Personal Info */}
            <Section title="Personal Information" icon={<FaUser />} description="Please provide your basic personal details">
              <Input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name *" />
              <Input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name *" />
              <Input name="email" value={formData.email} onChange={handleChange} placeholder="Email Address *" type="email" />
              <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number *" type="tel" />
              <Input name="dob" value={formData.dob} onChange={handleChange} placeholder="Date of Birth *" type="date" />
              <Input name="weight" value={formData.weight} onChange={handleChange} placeholder="Weight (kg) *" type="number" />
            </Section>

            {/* Medical Info */}
            <Section title="Medical Information" icon={<FaTint />} description="Medical details required for safe blood donation">
              <select
                name="bloodType"
                value={formData.bloodType}
                onChange={handleChange}
                className="input border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
              >
                <option value="">Select Blood Type</option>
                <option>A+</option>
                <option>B+</option>
                <option>O+</option>
                <option>AB+</option>
                <option>A-</option>
                <option>B-</option>
                <option>O-</option>
                <option>AB-</option>
              </select>
              <Input name="lastDonation" value={formData.lastDonation} onChange={handleChange} placeholder="Last Donation Date" type="date" />
              <textarea
                name="medical"
                value={formData.medical}
                onChange={handleChange}
                placeholder="Please list any medical conditions, medications, or allergies..."
                className=" input mt-4 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                rows={3}
              />
            </Section>

            {/* Address Info */}
            <Section title="Address Information" icon={<FaMapMarkerAlt />} description="Your location helps us match you with nearby recipients">
              <Input name="address" value={formData.address} onChange={handleChange} placeholder="Street Address *" />
              <Input name="city" value={formData.city} onChange={handleChange} placeholder="City *" />
              <Input name="state" value={formData.state} onChange={handleChange} placeholder="State *" />
              <Input name="zip" value={formData.zip} onChange={handleChange} placeholder="ZIP Code *" />
            </Section>

            {/* Emergency Contact */}
            <Section title="Emergency Contact" icon={<FaPhone />} description="Someone we can contact in case of emergency">
              <Input name="emergencyName" value={formData.emergencyName} onChange={handleChange} placeholder="Emergency Contact Name *" />
              <Input name="emergencyPhone" value={formData.emergencyPhone} onChange={handleChange} placeholder="Emergency Contact Phone *" />
            </Section>

            <div className="text-center mt-6">
              <button type="submit" className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition">
                Register as Donar
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Page

// Reusable input
const Input = ({ name, value, onChange, placeholder, type = 'text' }) => (
  <input
    name={name}
    value={value}
    onChange={onChange}
    type={type}
    placeholder={placeholder}
    className="input border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
  />
)

// Section wrapper
const Section = ({ title, icon, description, children }) => (
  <section className="mb-8 border rounded-xl p-6 shadow-sm">
    <h2 className="text-xl font-semibold flex items-center gap-2 text-black">
      <span className="text-red-500">{icon}</span>
      {title}
    </h2>
    <p className="text-gray-500 mb-4">{description}</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
  </section>
)
