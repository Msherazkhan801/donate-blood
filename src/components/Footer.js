'use client'
import { FaCopyright } from 'react-icons/fa'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {/* Column 1: Logo and Description */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Image src="/assets/images/logo.png" alt="Logo" width={30} height={30} />
            <span className="text-xl font-bold">Donate <span className="text-red-500">Blood</span></span>
          </div>
          <p className="text-gray-300">
            Connecting blood donors with recipients to save lives and build a healthier community.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="text-gray-300 space-y-2">
            <li>Become a Donor</li>
            <li>Request Blood</li>
            <li>Find Donors</li>
            <li>About Us</li>
          </ul>
        </div>

        {/* Column 3: Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="text-gray-300 space-y-2">
            <li>FAQ</li>
            <li>Help Center</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="text-gray-300 space-y-2">
            <li>+92 3367879-98</li>
            <li>contact@donateblood.com</li>
            <li>123 Health St, Medical City</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <div className="flex items-center gap-1">
          <FaCopyright /> 2025 DonateBlood. All rights reserved.
        </div>
        <p className="mt-4 md:mt-0">Saving lives, one donation at a time.</p>
      </div>
    </footer>
  )
}
