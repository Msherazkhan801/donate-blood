'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React, { useState } from 'react'
import { FaUserInjured, FaTint, FaHospital, FaMapMarkerAlt } from 'react-icons/fa'

const Page = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    bloodType: '',
    unitsNeeded: '',
    urgency: '',
    requiredDate: '',
    condition: '',
    notes: '',
    hospitalName: '',
    doctorName: '',
    doctorPhone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submitted data:', formData)
    // Send data to API here
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white px-4 py-10 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="text-center mb-10">
              <div className="text-5xl text-red-500 mb-2">🩸</div>
              <h1 className="text-3xl font-bold">Request Blood</h1>
              <p className="text-gray-600 mt-2">{`Submit your blood request and we'll connect you with compatible donors in your area.`}</p>
            </div>

            {/* Patient Info */}
            <Section title="Patient Information" icon={<FaUserInjured />} description="Please provide the patient's personal details">
              <Input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name *" />
              <Input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name *" />
              <Input name="email" value={formData.email} onChange={handleChange} placeholder="Email Address *" type="email" />
              <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number *" type="tel" />
              <Input name="dob" value={formData.dob} onChange={handleChange} placeholder="Date of Birth *" type="date" />
            </Section>

            {/* Blood Request */}
            <Section title="Blood Request Details" icon={<FaTint />} description="Specific details about the blood requirement">
              <Select name="bloodType" value={formData.bloodType} onChange={handleChange} options={['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']} label="Required Blood Type *" />
              <Input name="unitsNeeded" value={formData.unitsNeeded} onChange={handleChange} placeholder="Units Needed *" type="number" />
              <Select name="urgency" value={formData.urgency} onChange={handleChange} options={['Low', 'Moderate', 'High', 'Critical']} label="Urgency Level *" />
              <Input name="requiredDate" value={formData.requiredDate} onChange={handleChange} placeholder="Required By Date *" type="date" />
              <Textarea name="condition" value={formData.condition} onChange={handleChange} placeholder="Medical Condition / Reason *" />
              <Textarea name="notes" value={formData.notes} onChange={handleChange} placeholder="Additional Information (optional)" />
            </Section>

            {/* Hospital & Doctor */}
            <Section title="Hospital & Doctor Information" icon={<FaHospital />} description="Details about the treating hospital and doctor">
              <Input name="hospitalName" value={formData.hospitalName} onChange={handleChange} placeholder="Hospital Name *" />
              <Input name="doctorName" value={formData.doctorName} onChange={handleChange} placeholder="Doctor Name *" />
              <Input name="doctorPhone" value={formData.doctorPhone} onChange={handleChange} placeholder="Doctor Phone *" type="tel" />
            </Section>

            {/* Address */}
            <Section title="Address Information" icon={<FaMapMarkerAlt />} description="Patient's location for proximity matching">
              <Input name="address" value={formData.address} onChange={handleChange} placeholder="Street Address *" />
              <Input name="city" value={formData.city} onChange={handleChange} placeholder="City *" />
              <Input name="state" value={formData.state} onChange={handleChange} placeholder="State *" />
              <Input name="zip" value={formData.zip} onChange={handleChange} placeholder="ZIP Code *" />
            </Section>

            <div className="text-center mt-6">
              <button type="submit" className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition">
                Submit Request
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

// Reusable components
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

const Textarea = ({ name, value, onChange, placeholder }) => (
  <textarea
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    rows={3}
    className="input border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600 mt-2"
  />
)

const Select = ({ name, value, onChange, options, label }) => (
  <div>
    <label className="text-sm text-gray-700">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="input border rounded px-3 py-2 w-full mt-1 focus:outline-none focus:ring-2 focus:ring-red-600"
    >
      <option value="">Select {label.replace(' *', '')}</option>
      {options.map(opt => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
)

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
