import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import {motion, AnimatePresence} from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`h-auto py-3 sticky top-0 z-50 transition-all duration-300 bg-blue-900 ${
      isScrolled ? 'bg-blue-900/90 backdrop-blur-2xl shadow-lg w-10/12 rounded-lg mx-auto' : 'bg-blue-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <div className="flex items-center">
            <span className="text-3xl font-bold text-yellow-400">
              Deccan
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Bikes', 'Accessories', 'About', 'Contact'].map((item) => (
              <motion.a
                layout
                key={item}
                href="#"
                className="text-gray-100  transition-colors duration-300 relative group"
                whileHover={{color:"yellow", textDecoration:"underline", scale:1.1}}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-100 hover:text-yellow-400 transition-colors duration-300 relative group">
              <ShoppingCart size={24} />
              <span className="absolute top-0 right-0 w-4 h-4 bg-yellow-400 text-blue-900 text-xs rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                0
              </span>
            </button>
            <button className="p-2 text-gray-100 hover:text-yellow-400 transition-colors duration-300">
              <User size={24} />
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-100 hover:text-yellow-400 transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
      {isOpen &&
      <motion.div
        className={`md:hidden bg-blue-900/10 ${isScrolled ?"rounded-b-lg":""}`}
        initial={{height:"0"}}
        animate={{height:"auto",display:"block", opacity:1}}
        exit={{height:"0", opacity:0}}
        
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {['Home', 'Bikes', 'Accessories', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href="#"
              className="block px-3 py-2 text-gray-100 hover:text-yellow-400 hover:bg-blue-800 rounded-md transition-all duration-300"
            >
              {item}
            </a>
          ))}
        </div>
        </motion.div>}
        </AnimatePresence>
    </nav>
  );
}