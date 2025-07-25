'use client';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="bg-white py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Left image and arrows */}
        <div className="relative">
          <Image
            src="/image.jpg"
            alt="Interior Room"
            width={400}
            height={400}
            className="rounded-lg w-full object-cover"
          />
          <div className="absolute bottom-4 left-4 flex gap-2">
            <button className="bg-white p-2 rounded shadow hover:bg-gray-100">
              <ArrowLeft size={18} />
            </button>
            <button className="bg-white p-2 rounded shadow hover:bg-gray-100">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Heading and cards */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What Our Customers Say About Us
          </h2>
          <div className="flex flex-col md:flex-row gap-6">
            {/* Testimonial 1 */}
            <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-full md:w-[320px]">
              <Quote className="text-white mb-4" size={28} />
              <p className="text-sm leading-relaxed mb-6">
                Working with your design team was an absolute pleasure. The attention to detail and creativity exceeded my expectations. Thank you for making my home beautiful!
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src="/user.png"
                  alt="Sophie Carter"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold">Sophie Carter</p>
                  <p className="text-xs text-gray-400">New York, USA</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-full md:w-[320px]">
              <Quote className="text-white mb-4" size={28} />
              <p className="text-sm leading-relaxed mb-6">
                Exceptional service! From the initial consultation to the final reveal, your team demonstrated professionalism and a keen eye for design. Highly recommend!
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src="/user.png"
                  alt="James Bennett"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold">James Bennett</p>
                  <p className="text-xs text-gray-400">Toronto, Canada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
