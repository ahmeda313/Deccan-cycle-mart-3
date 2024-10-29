import { Star, ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Mountain Explorer Pro",
    price: "$1,299",
    rating: 5,
    image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    name: "Urban Commuter Elite",
    price: "$899",
    rating: 4,
    image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    name: "Road Master Carbon",
    price: "$2,499",
    rating: 5,
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&auto=format&fit=crop&q=60"
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center animate-slide-up">
          Featured Bikes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-md overflow-hidden card-hover animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-current text-yellow-400 transform transition-transform duration-300 hover:scale-125"
                    />
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                  <button className="group/btn bg-yellow-400 text-blue-900 px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-yellow-500 hover:shadow-lg hover:shadow-yellow-400/25 flex items-center gap-2">
                    <ShoppingCart size={18} className="transform transition-transform duration-300 group-hover/btn:scale-110" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}