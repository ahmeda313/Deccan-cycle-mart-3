import { ArrowRight } from 'lucide-react';
import {motion} from "framer-motion"

export default function Hero() {
  return (
    <div className="relative h-[600px] bg-blue-900 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=1600&auto=format&fit=crop&q=80"
        alt="Mountain bike on trail"
        className="absolute inset-0 w-full h-full object-cover opacity-70 scale-105 transform transition duration-[2s] hover:scale-100"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/70 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-xl space-y-6 animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 [text-shadow:_2px_2px_10px_rgb(0_0_0_/_90%)]">
              Adventure Awaits on Two Wheels
            </h1>
            <p className="text-xl text-gray-200 mb-8 [text-shadow:_1px_1px_2px_rgb(0_0_0_/_50%)]">
              Discover our premium selection of bikes for every terrain and riding style
            </p>
            <motion.button className="group bg-yellow-400 text-blue-900 px-8 py-3 rounded-full font-semibold flex items-center gap-2"
            whileHover={{scale:1.2}}
            transition={{ type: "spring", stiffness: 500 }}
            >

              Shop Now
              <ArrowRight size={20} className="transform transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}