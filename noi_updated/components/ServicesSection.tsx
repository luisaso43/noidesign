
'use client';

export default function ServicesSection() {
  const permitServices = [
    'Site Plans',
    'Fire Safety Plan', 
    'Electrical Line Diagrams',
    'Structural Detail',
    'Attachment details',
    'PV Safety Labels & Placards',
    'Equipment Datasheets',
    'Electrical & Structural Load Calculations',
    'Structural & Electrical Stamping by Licensed Professional Engineers',
    '24-48 Hour Turnaround Times'
  ];

  const consultationServices = [
    'Project Consultation',
    'Site Analysis',
    'Preliminary layout designs',
    'Production Estimates',
    'System Size Fitting',
    'Product recommendations',
    'Monitoring and Support'
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solar design solutions with industry-leading expertise and quick turnaround times
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-file-list-3-line text-2xl text-blue-600"></i>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Solar PV Permit Package
              </h3>
              <p className="text-gray-600">
                Complete permit documentation with professional engineering stamps
              </p>
            </div>
            
            <ul className="space-y-3">
              {permitServices.map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                    <i className="ri-check-line text-green-500 text-lg"></i>
                  </div>
                  <span className="text-gray-700 font-medium">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-chat-3-line text-2xl text-green-600"></i>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Project Consultation
              </h3>
              <p className="text-gray-600">
                Expert guidance from initial analysis to final implementation
              </p>
            </div>
            
            <ul className="space-y-3">
              {consultationServices.map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                    <i className="ri-check-line text-green-500 text-lg"></i>
                  </div>
                  <span className="text-gray-700 font-medium">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-900 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Why Choose Noi Design?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">98%+</div>
                <p className="text-sm">First time pass rate in Florida</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">24-48h</div>
                <p className="text-sm">Quick turnaround times</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">Licensed</div>
                <p className="text-sm">Professional Engineers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
