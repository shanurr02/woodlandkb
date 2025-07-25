import Image from "next/image";
import { FaRocket, FaLightbulb, FaCheckCircle } from "react-icons/fa";

const steps = [
  {
    icon: <FaRocket size={20} className="text-white" />,
    title: "Start Project",
    description:
      "Embark on your design adventure by initiating your project. Share your vision and set the stage for a bespoke design experience",
  },
  {
    icon: <FaLightbulb size={20} className="text-white" />,
    title: "Craft",
    description:
      "Collaborate closely to achieve design excellence refining your vision and crafting brilliance into every aspect of your space",
  },
  {
    icon: <FaCheckCircle size={20} className="text-white" />,
    title: "Execute",
    description:
      "Witness your vision becoming a reality as we execute the design plan with precision. Celebrate the joy of your newly transformed space",
  },
];

const ThreeSteps = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
      {/* Left Content */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 leading-snug">
          Designing Your Dream in<br />Three Simple Steps
        </h2>

        <div className="space-y-10">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4 relative">
              {/* Icon */}
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center shrink-0">
                {step.icon}
              </div>

              {/* Vertical Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-5 top-10 h-[72px] w-px bg-gray-300" />
              )}

              {/* Text */}
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2">
        <Image
          src="/image.jpg" // rename your screenshot image to this
          alt="Steps"
          width={600}
          height={500}
          className="rounded-md w-full h-auto object-cover shadow-sm"
        />
      </div>
    </section>
  );
};

export default ThreeSteps;
