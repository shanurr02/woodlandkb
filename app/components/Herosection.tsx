import Image from 'next/image'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className="bg-white text-gray-900 px-10 py-5 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      
      {/* Left Content */}
      <div className="space-y-6">
        <h1 className="text-7xl font-bold leading-tight">Interior Design</h1>
        <p className="text-gray-600 max-w-xl">
          Step into a world where the art of Interior Design is meticulously crafted to bring together timeless elegance and cutting-edge modern Innovation, allowing you to transform your living spaces into the epitome of luxury and sophistication.
        </p>

        <Link href="#start-project">
          <button className="bg-black text-white px-15 py-3 rounded hover:opacity-90 transition font-large">
            Start Project
          </button>
        </Link>

        {/* Stats */}
        <div className="pt-10 flex gap-10">
          <div>
            <p className="text-4xl font-bold">400+</p>
            <p className="text-sm text-gray-500">Project Complete</p>
          </div>
          <div>
            <p className="text-4xl font-bold">600+</p>
            <p className="text-sm text-gray-500">Satisfied Clients</p>
          </div>
          <div>
            <p className="text-4xl font-bold">100+</p>
            <p className="text-sm text-gray-500">Unique Styles</p>
          </div>
        </div>
      </div>

      {/* Right Side Images */}
      <div className="relative flex flex-col items-end">
        {/* Top Image */}
        <div className="w-70 h-50 relative z-10 mb-6">
          <Image
            src="/image.jpg"
            alt="Interior Top"
            fill
            className="object-cover  shadow-md"
          />
        </div>

        {/* Bottom Image Group */}
        <div className="relative w-[420px] h-[240px]">
          {/* Decorative border */}
          <div className="absolute -top-4 left-5 w-20 h-20 border-radius-2 rounded color-black border-1 z-0 -mx-25" />

          {/* Main image */}
          <Image
            src="/image.jpg"
            alt="Interior Bottom"
            fill
            className="object-cover rounded shadow-md relative z-10 -mx-15"
          />

          {/* Arrow Box */}
          <div className="absolute -bottom-0 right-8 w-10 h-10 bg-black text-white  flex items-center justify-center text-xl z-20">
            ↓
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
