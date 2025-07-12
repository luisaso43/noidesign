
'use client';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Recently Designed Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our latest solar design work across residential and commercial installations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img 
                src="https://static.readdy.ai/image/9b4ddfc2d7c194b834b3f78d618b9ea2/96110b4798e2c395603abb9eca4e8f73.png"
                alt="Solar Project"
                className="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img 
                src="https://static.readdy.ai/image/9b4ddfc2d7c194b834b3f78d618b9ea2/8113a9d081e106922e1aaa9cec563843.png"
                alt="Solar Project"
                className="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors whitespace-nowrap cursor-pointer inline-block"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
