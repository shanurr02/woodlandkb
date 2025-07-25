import { Lightbulb, Layout, TreePine } from 'lucide-react';

const services = [
  {
    icon: <Lightbulb size={32} />,
    title: 'Lighting Design',
    description: 'Achieve the perfect balance of ambient, task, and accent lighting for a functional atmosphere',
  },
  {
    icon: <Layout size={32} />,
    title: 'Interior Design',
    description: 'From concept to completion, we oversee every detail to bring your vision to life efficiently',
  },
  {
    icon: <TreePine size={32} />,
    title: 'Outdoor Design',
    description: 'Celebrate the changing seasons with our seasonal outdoor decor services',
  },
];

const OurServices = () => {
  return (
    <section className="py-16 px-10 bg-white text-gray-900 max-w-7xl mx-auto">
      {/* Title */}
      <div className="flex items-center space-x-6 mb-12 mx-auto">
        <div className="h-px w-10 bg-black" />
        <h2 className="text-4xl font-semibold">Our Services</h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {services.map((service, idx) => (
          <div key={idx} className="flex flex-col items-start space-y-4">
            <div className="text-black">{service.icon}</div>
            <h3 className="text-lg font-semibold">{service.title}</h3>
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
