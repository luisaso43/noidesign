
'use client';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Noi Design LLC
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                At NOI Design LLC, we are dedicated to providing the best solar design services to our customers. Our mission is to help you save money on your solar permits while also providing safe and efficient designs.
              </p>
              <p>
                We started off as an in-house drafting team for small solar installers, and slowly grew our team into an efficient design services team for some of the largest companies in the country.
              </p>
              <p>
                Based out of Florida, we guarantee a <strong>98%+ first time pass rate</strong> for all AHJ within the state, and <strong>95%+</strong> for all projects out of state.
              </p>
            </div>
            
            <div className="mt-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-award-line text-xl text-blue-600"></i>
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Licensed Engineers</h3>
                  <p className="text-gray-600 text-sm">Professional engineering stamps for all projects</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-time-line text-xl text-green-600"></i>
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Fast Turnaround</h3>
                  <p className="text-gray-600 text-sm">24-48 hour delivery guaranteed</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://readdy.ai/api/search-image?query=Professional%20team%20of%20solar%20engineers%20and%20designers%20working%20on%20technical%20drawings%20and%20solar%20panel%20layouts%2C%20modern%20office%20environment%20with%20computers%20and%20solar%20design%20software%2C%20professional%20engineering%20team%20collaboration%2C%20clean%20modern%20workspace%20with%20technical%20documents%20and%20solar%20equipment&width=600&height=700&seq=about-team&orientation=portrait"
              alt="Noi Design Team"
              className="w-full rounded-2xl shadow-xl object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
