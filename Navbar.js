"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, Search, User, Menu, X, Heart, Bell, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-[#0A0E0F]/95 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col lg:flex-row justify-between items-center gap-4">
        
        {/* TOP ROW: LOGO & ICONS */}
        <div className="w-full lg:w-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="h-10 w-10 relative group-hover:scale-110 transition-transform">
              <img src="/images/logo.png" alt="Domi Logo" className="w-full h-full object-contain" />
            </div>
            <h1 className="text-xl font-black tracking-tighter uppercase italic text-white">
              DOMI<span className="text-[#C5A059]">-FASHION</span>
            </h1>
          </Link>

          {/* Mobile Icons */}
          <div className="flex lg:hidden items-center space-x-4">
             <Link href="/cart" className="relative">
                <ShoppingBag size={22} className="text-[#C5A059]" />
             </Link>
             <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
             </button>
          </div>
        </div>

        {/* CENTER: AMAZON-STYLE SEARCH BAR WITH CATEGORIES */}
        <div className="flex-1 w-full max-w-2xl flex items-center bg-white rounded-md overflow-hidden shadow-lg">
          {/* Category Dropdown */}
          <div className="hidden md:flex items-center px-3 bg-gray-100 border-r border-gray-300 cursor-pointer hover:bg-gray-200 transition-colors py-2 text-black text-[10px] font-bold uppercase tracking-tighter">
            <span>All</span>
            <ChevronDown size={14} className="ml-1" />
          </div>
          
          {/* Input Field */}
          <input 
            type="text" 
            placeholder="Search for luxury suits, boots, accessories..." 
            className="flex-1 bg-transparent border-none text-black px-4 py-2 text-sm focus:ring-0 outline-none placeholder:text-gray-400"
          />
          
          {/* Search Button */}
          <button className="bg-[#C5A059] hover:bg-black text-white px-5 py-2 transition-colors">
            <Search size={20} />
          </button>
        </div>

        {/* RIGHT: UTILITY ICONS */}
        <div className="hidden lg:flex items-center space-x-6 text-white">
          <div className="flex flex-col items-center cursor-pointer group">
            <User size={20} className="group-hover:text-[#C5A059]" />
            <span className="text-[9px] font-bold uppercase mt-1">Account</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer group">
            <Heart size={20} className="group-hover:text-[#C5A059]" />
            <span className="text-[9px] font-bold uppercase mt-1">Wishlist</span>
          </div>
          <Link href="/cart" className="flex flex-col items-center group relative">
            <ShoppingBag size={22} className="text-[#C5A059]" />
            <span className="absolute -top-1 -right-1 bg-white text-black text-[8px] font-black h-3.5 w-3.5 rounded-full flex items-center justify-center">0</span>
            <span className="text-[9px] font-bold uppercase mt-1">Cart</span>
          </Link>
        </div>
      </nav>

      {/* LOWER NAV: CATEGORY LINKS */}
      <div className="hidden lg:flex bg-white/5 border-t border-white/5 px-6 py-2 justify-center space-x-10 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
          <Link href="/shop" className="hover:text-[#C5A059] transition-colors">New Arrivals</Link>
          <Link href="/men" className="hover:text-[#C5A059] transition-colors">Men's Suits</Link>
          <Link href="/women" className="hover:text-[#C5A059] transition-colors">Women's Fashion</Link>
          <Link href="/boots" className="hover:text-[#C5A059] transition-colors">Premium Boots</Link>
          <Link href="/sales" className="hover:text-red-500 transition-colors">Clearance Sale</Link>
      </div>
    </header>
  );
}