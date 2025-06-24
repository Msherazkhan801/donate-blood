'use client'
import { FaCopyright } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Image src="/assets/images/logo.png" alt="Logo" width={30} height={30} />
            <span className="text-xl font-bold">Donate <span className="text-red-500">Blood</span></span>
          </div>
          <p className="text-gray-300">
            Connecting blood donors with recipients to save lives and build a healthier community.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="text-gray-300 space-y-2">
           <Link href='/donate-blood ' className=''> <li>Become a Donor</li></Link>
             <Link href='/request-blood' className=''><li>Request Blood</li></Link> 
             <Link href='/find-donor' className=''> <li>Find Donors</li></Link>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="text-gray-300 space-y-2">
            <li>FAQ</li>
            <li>Help Center</li>
          
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="text-gray-300 space-y-2">
            <li>+92 12345678</li>
            <li>contact@donateblood.com</li>
            <li>123 Health St, Medical City</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <div className="flex items-center gap-1">
          <FaCopyright /> 2025 DonateBlood. All rights reserved.
        </div>
        <p className="mt-4 md:mt-0">Saving lives, one donation at a time.</p>
      </div>
    </footer>
  )
}
