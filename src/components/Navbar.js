'use client'
// import Image from 'next/image'
export default function Navbar() {
  return (
    <div className=" font-sans">
      <nav className="flex items-center justify-between px-8 py-4 shadow-md bg-white">
        <div className="flex items-center justify-center  space-x-2">
         <img
          src="/assets/images/logo.png"
          alt="logo"
        //   width={32}
        //   height={32}
          className="h-12 w-12"
        />
          <span className="text-xl font-bold">
            Donate <span className="text-red-600">Blood</span>
          </span>
        </div>
        <ul className="hidden md:flex space-x-8 text-gray-800 font-medium">
          <li className="text-red-600">Home</li>
          <li>Find Donors</li>
          <li>Donate Blood</li>
        </ul>
        <button className="bg-red-600 text-white font-semibold px-4 py-2 rounded hover:bg-red-700 transition">
          Request Blood
        </button>
      </nav>
    </div>
  )
}
