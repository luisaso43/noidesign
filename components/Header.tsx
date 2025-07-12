
'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-gray-100">
      <div className="px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="text-2xl font-bold text-blue-900" style={{ fontFamily: 'Pacifico, serif' }}>
                Noi Design
              </div>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-gray-700 hover:text-blue-900 font-medium whitespace-nowrap cursor-pointer">
              Services
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-blue-900 font-medium whitespace-nowrap cursor-pointer">
              About us
            </Link>
            <Link href="#projects" className="text-gray-700 hover:text-blue-900 font-medium whitespace-nowrap cursor-pointer">
              Projects
            </Link>
            <Link href="#contact" className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition-colors whitespace-nowrap cursor-pointer">
              Contact us
            </Link>
          </nav>
          <button 
            className="md:hidden p-2 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
            </div>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <div className="flex flex-col space-y-4">
              <Link href="#services" className="text-gray-700 hover:text-blue-900 font-medium cursor-pointer">
                Services
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-blue-900 font-medium cursor-pointer">
                About us
              </Link>
              <Link href="#projects" className="text-gray-700 hover:text-blue-900 font-medium cursor-pointer">
                Projects
              </Link>
              <Link href="#contact" className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition-colors text-center cursor-pointer">
                Contact us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
