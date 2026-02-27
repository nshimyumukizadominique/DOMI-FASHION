import { Instagram, Facebook, Twitter, ShieldCheck, Truck, RotateCcw } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <img src="/images/logo.png" className="h-12 w-auto" alt="Domi Logo" />
          <p className="text-gray-500 text-sm leading-relaxed italic">Luxury style for the modern generation. Kigali's finest online boutique.</p>
          <div className="flex space-x-4 text-gray-400">
            <Instagram size={20} className="hover:text-[#C5A059] cursor-pointer" />
            <Facebook size={20} className="hover:text-[#C5A059] cursor-pointer" />
            <Twitter size={20} className="hover:text-[#C5A059] cursor-pointer" />
          </div>
        </div>
        
        {/* TRUST FEATURES (Amazon Style) */}
        <div>
          <h4 className="text-[#C5A059] font-bold uppercase text-[10px] tracking-[0.3em] mb-6">Why Domi?</h4>
          <ul className="text-gray-400 space-y-4 text-xs font-bold uppercase">
            <li className="flex gap-3"><Truck size={16} className="text-[#C5A059]"/> Free Delivery</li>
            <li className="flex gap-3"><ShieldCheck size={16} className="text-[#C5A059]"/> Secure Payment</li>
            <li className="flex gap-3"><RotateCcw size={16} className="text-[#C5A059]"/> 30-Day Return</li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#C5A059] font-bold uppercase text-[10px] tracking-[0.3em] mb-6">Support</h4>
          <ul className="text-gray-400 space-y-4 text-sm">
            <li className="hover:text-white cursor-pointer">Track Order</li>
            <li className="hover:text-white cursor-pointer">Size Guide</li>
            <li className="hover:text-white cursor-pointer">FAQs</li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className="space-y-6">
          <h4 className="text-[#C5A059] font-bold uppercase text-[10px] tracking-[0.3em]">Join the Elite</h4>
          <div className="flex border-b border-white/20 pb-2">
            <input type="email" placeholder="Your Email" className="bg-transparent text-sm outline-none w-full" />
            <button className="text-[#C5A059] font-black text-xs">JOIN</button>
          </div>
        </div>
      </div>
      <div className="text-center text-[9px] text-gray-600 tracking-[0.4em] pt-10 border-t border-white/5">
        © 2026 DOMI-FASHION | DESIGNED FOR LUXURY
      </div>
    </footer>
  );
}