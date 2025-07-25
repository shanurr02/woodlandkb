'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm px-6 py-4 mx-auto">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-1">
          <div className="border rounded p-1">
            <span className="text-xl font-bold text-black">W</span>
          </div>
          <span className="text-xl font-bold text-gray-800">oodLandKB</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
          <li>
            <Link href="/" className="hover:text-black font-semibold">Home</Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-black">Services</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-black">Contact</Link>
          </li>
          <li>
            <Link href="/support" className="hover:text-black">Support</Link>
          </li>
        </ul>

        {/* Sign Up (Desktop) */}
        <div className="hidden md:block">
          <Link href="/signup">
            <button className="bg-black text-white text-sm px-4 py-2 rounded hover:opacity-90">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 px-4 space-y-4">
          <Link href="/" className="block hover:text-black font-semibold">Home</Link>
          <Link href="/services" className="block hover:text-black">Services</Link>
          <Link href="/contact" className="block hover:text-black">Contact</Link>
          <Link href="/support" className="block hover:text-black">Support</Link>
          <Link href="/signup">
            <button className="w-full bg-black text-white text-sm px-4 py-2 rounded hover:opacity-90 mt-2">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
