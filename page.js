import { Star, ShoppingBag, ArrowRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Classic Gold Suit",
    price: "120,000 RWF",
    image: "/images/boots.jpg",
    rating: 4.9,
    reviews: 15,
    stock: "Only 2 left" // Amazon Style
  },
  {
    id: 2,
    name: "Premium Leather Boots",
    price: "85,000 RWF",
    image: "/images/boots.jpg",
    rating: 4.7,
    reviews: 42,
    stock: "In Stock"
  }
];

export default function Home() {
  return (
    <div className="text-white">
      {/* LUXURY HERO WITH OVERLAPPING IMAGES */}
      <section className="relative h-[85vh] flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070" className="w-full h-full object-cover" alt="Background" />
        </div>
        
        {/* Floating Detail Image (Hero Image 2) */}
        <div className="absolute hidden lg:block right-20 top-40 w-64 h-80 border border-[#C5A059]/30 shadow-2xl rotate-3">
          <img src="/images/boots.jpg" className="w-full h-full object-cover opacity-80" alt="Detail" />
        </div>

        <div className="relative z-10 text-center">
          <img src="/images/logo.png" className="h-24 mx-auto mb-8 drop-shadow-2xl" alt="Logo" />
          <h1 className="text-6xl md:text-9xl font-black italic tracking-tighter uppercase leading-none">
            DOMI<span className="text-[#C5A059]">-FASHION</span>
          </h1>
          <button className="mt-10 bg-[#C5A059] text-black font-black py-4 px-12 rounded-full hover:bg-white transition-all flex items-center gap-3 mx-auto">
            SHOP NOW <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* AMAZON-STYLE PRODUCT GRID */}
      <section className="max-w-7xl mx-auto py-24 px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {products.map((item) => (
          <div key={item.id} className="group product-card">
            <div className="aspect-[3/4] overflow-hidden bg-gray-900 rounded-sm relative">
              <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.name} />
              <div className="absolute top-4 left-4 bg-black/60 px-3 py-1 text-[10px] font-bold border border-[#C5A059]/30 uppercase">New Collection</div>
            </div>
            <div className="mt-6 space-y-2">
              <h3 className="text-2xl font-black italic uppercase tracking-tighter">DOMI<span className="text-[#C5A059]">-FASHION</span></h3>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">{item.name}</p>
              
              {/* Amazon Feature: Ratings */}
              <div className="flex items-center gap-2">
                <div className="flex text-[#C5A059]"><Star size={12} fill="#C5A059" /><Star size={12} fill="#C5A059" /><Star size={12} fill="#C5A059" /><Star size={12} fill="#C5A059" /><Star size={12} fill="#C5A059" /></div>
                <span className="text-[10px] text-gray-500 font-bold">{item.reviews} Reviews</span>
              </div>

              {/* Amazon Feature: Stock Alert */}
              <p className={`text-[10px] font-bold italic uppercase ${item.stock.includes('Only') ? 'text-red-500' : 'text-green-500'}`}>{item.stock}</p>

              <div className="flex justify-between items-center pt-4 border-t border-white/5">
                <p className="text-[#C5A059] text-2xl font-black">{item.price}</p>
                <button className="p-3 bg-white/5 rounded-full hover:bg-[#C5A059] hover:text-black transition-colors">
                  <ShoppingBag size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}