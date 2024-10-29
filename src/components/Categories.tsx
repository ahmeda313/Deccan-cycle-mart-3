import { Mountain, AudioWaveform, Building, Trophy } from 'lucide-react';

const categories = [
  {
    name: "Mountain Bikes",
    icon: Mountain,
    description: "For trail adventures"
  },
  {
    name: "Road Bikes",
    icon: AudioWaveform,
    description: "For speed enthusiasts"
  },
  {
    name: "City Bikes",
    icon: Building,
    description: "For urban commuting"
  },
  {
    name: "Racing Bikes",
    icon: Trophy,
    description: "For competitions"
  }
];

export default function Categories() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center animate-slide-up">
          Find Your Perfect Ride
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="group flex flex-col items-center p-8 rounded-xl card-hover cursor-pointer bg-gradient-to-br from-blue-50 to-white animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl scale-75 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <category.icon size={48} className="text-blue-600 mb-4 transform transition-all duration-300 group-hover:scale-110 relative z-10" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {category.name}
              </h3>
              <p className="text-gray-600 text-center transition-colors duration-300 group-hover:text-blue-900">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}