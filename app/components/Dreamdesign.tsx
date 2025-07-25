"use client"

import Image from "next/image";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const DreamDesign = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "Living Room Interior Design",
      content: "We create stunning living rooms with warmth and elegance.",
    },
    {
      title: "Commercial Office Room Interior Design",
      content: "Optimize your office space with modern functional aesthetics.",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
      {/* Left Image */}
      <div className="w-full md:w-1/2">
        <Image
          src="/image.jpg" // Make sure this image exists in /public/
          alt="Interior"
          width={600}
          height={400}
          className="rounded-md shadow-sm w-full"
        />
      </div>

      {/* Right Text Content */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-snug">
          Designing Your Dream<br />With Brilliance
        </h2>
        <p className="text-gray-600 mb-6 text-sm">
          Elevate your spaces with bespoke interior designs that reflect your
          unique style and aspirations, crafted with precision and brilliance for
          an unforgettable living experience
        </p>

        {/* Accordion */}
        <div className="divide-y divide-gray-200 mb-6">
          {items.map((item, index) => (
            <div key={index} className="py-4">
              <button
                className="flex justify-between items-center w-full text-left font-medium text-sm text-gray-900"
                onClick={() => toggleIndex(index)}
              >
                {item.title}
                <span className="text-xl">
                  {openIndex === index ? <FiMinus /> : <FiPlus />}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-600 text-sm">{item.content}</p>
              )}
            </div>
          ))}
        </div>

        {/* Button */}
        <button className="bg-black text-white px-6 py-2 rounded text-sm hover:opacity-90 transition">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default DreamDesign;
