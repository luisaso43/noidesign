
'use client';

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.5)), url('https://readdy.ai/api/search-image?query=Professional%20solar%20panel%20installation%20on%20modern%20residential%20roof%20with%20blue%20sky%20background%2C%20technician%20in%20safety%20gear%20installing%20premium%20solar%20panels%2C%20clean%20modern%20architectural%20setting%20with%20perfect%20lighting%20and%20professional%20atmosphere%2C%20high-quality%20industrial%20photography%20style%2C%20bright%20natural%20lighting&width=1920&height=1080&seq=hero-solar-bg&orientation=landscape')`
      }}
    >
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-left text-white">
            <div className="mb-4">
              <span className="text-green-400 text-sm font-semibold tracking-wider uppercase">
                Premium Solar Design Services
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              We provide efficient and<br />
              <span className="text-green-400">cost-effective</span> Solar<br />
              PV Permit packages
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-gray-200 max-w-2xl">
              With quick turnaround times and 98%+ first time pass rate for all AHJ within Florida.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors whitespace-nowrap cursor-pointer inline-block text-center"
              >
                Get a free quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
