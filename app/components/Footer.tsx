'use client';

import { Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white pt-16">
      {/* Subscribe Box */}
      <div className="relative flex justify-center">
        <div className="absolute -top-10 w-full max-w-xl px-4">
          <div className="bg-white rounded-md shadow-md flex items-center px-4 py-3">
            <Mail className="text-gray-500 mr-3" size={20} />
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow outline-none text-black placeholder-gray-500 bg-transparent"
            />
            <button className="ml-4 bg-black text-white px-5 py-2 rounded-md hover:opacity-90">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Main */}
      <div className="max-w-6xl mx-auto px-4 pt-20 pb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm text-gray-300">
        {/* Column 1 */}
        <div>
          <h3 className="text-white font-bold text-lg mb-3">WoodLandKb</h3>
          <p className="mb-4">
            WoodLand your premier destination for luxury and modern interior design
          </p>
          <div className="flex space-x-4">
            <Facebook size={18} className="hover:text-white" />
            <Twitter size={18} className="hover:text-white" />
            <Instagram size={18} className="hover:text-white" />
            <Linkedin size={18} className="hover:text-white" />
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-white font-semibold mb-3">Our Services</h4>
          <ul className="space-y-2">
            <li>Interior design</li>
            <li>Outdoor design</li>
            <li>Lightning design</li>
            <li>Office design</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-white font-semibold mb-3">Our Services</h4>
          <ul className="space-y-2">
            <li>Reviews</li>
            <li>Careers</li>
            <li>Pricing</li>
            <li>Press inquires</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="text-white font-semibold mb-3">Our Services</h4>
          <ul className="space-y-2">
            <li>info@WoodLandKb.com</li>
            <li>Design Avenue Cityville,<br />CA 90210 United Kingdom</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
