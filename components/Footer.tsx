
'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="text-3xl font-bold mb-4 inline-block" style={{ fontFamily: 'var(--font-pacifico)' }}>
              Noi Design
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              We provide efficient and cost-effective Solar PV Permit packages with quick turnaround times. Your trusted partner for professional solar design services.
            </p>
            <div className="space-y-2 text-gray-400">
              <p>Noi Design LLC</p>
              <p>(786) 774-1014</p>
              <p>engineering@noidesignllc.com</p>
              <p>7803 SW 102nd Ln, Miami, FL 33156</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#services" className="hover:text-white transition-colors cursor-pointer">Solar PV Permits</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors cursor-pointer">Project Consultation</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors cursor-pointer">Site Analysis</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors cursor-pointer">Design Services</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#about" className="hover:text-white transition-colors cursor-pointer">About Us</Link></li>
              <li><Link href="#projects" className="hover:text-white transition-colors cursor-pointer">Projects</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors cursor-pointer">Contact</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors cursor-pointer">Get Quote</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Noi Design LLC. All rights reserved. Professional Solar Design Services.</p>
        </div>
      </div>
    </footer>
  );
}
