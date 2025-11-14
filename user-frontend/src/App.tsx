import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-br from-olive-50 to-olive-100 py-20"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-olive-900 mb-6 leading-tight">
                Book Your Healthcare Appointments{" "}
                <span className="text-olive-600">Seamlessly</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Connect with top hospitals and healthcare providers. Schedule
                appointments, manage your health records, and get the care you
                deserve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-olive-600 text-white rounded-lg hover:bg-olive-700 transition shadow-lg text-lg font-semibold">
                  Book Appointment Now
                </button>
                <button className="px-8 py-4 border-2 border-olive-600 text-olive-700 rounded-lg hover:bg-olive-50 transition text-lg font-semibold">
                  Browse Hospitals
                </button>
              </div>
              <div className="mt-8 flex items-center gap-8">
                <div>
                  <p className="text-3xl font-bold text-olive-700">500+</p>
                  <p className="text-gray-600">Hospitals</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-olive-700">10K+</p>
                  <p className="text-gray-600">Doctors</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-olive-700">50K+</p>
                  <p className="text-gray-600">Happy Patients</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-olive-200 rounded-3xl p-8 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=600&fit=crop"
                  alt="Healthcare"
                  className="rounded-2xl w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-olive-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-olive-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-olive-900">
                      Verified Hospitals
                    </p>
                    <p className="text-sm text-gray-600">100% Trusted</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-olive-900 mb-4">
              Why Choose MediBook?
            </h2>
            <p className="text-xl text-gray-600">
              Experience healthcare booking like never before
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border border-olive-100">
              <div className="w-16 h-16 bg-olive-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-olive-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-olive-900 mb-4">
                Easy Scheduling
              </h3>
              <p className="text-gray-600">
                Book appointments in seconds with our intuitive interface.
                Choose your preferred time and doctor effortlessly.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border border-olive-100">
              <div className="w-16 h-16 bg-olive-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-olive-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-olive-900 mb-4">
                Multiple Hospitals
              </h3>
              <p className="text-gray-600">
                Access 500+ hospitals and healthcare facilities all in one
                platform. Find the best care near you.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border border-olive-100">
              <div className="w-16 h-16 bg-olive-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-olive-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-olive-900 mb-4">
                Secure & Private
              </h3>
              <p className="text-gray-600">
                Your health data is encrypted and secure. We prioritize your
                privacy with industry-leading security measures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hospitals Section */}
      <section id="hospitals" className="py-20 bg-olive-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-olive-900 mb-4">
              Partner Hospitals
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by leading healthcare institutions
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition flex items-center justify-center h-32"
              >
                <p className="text-olive-700 font-semibold text-lg">
                  Hospital {i}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-olive-600 to-olive-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-xl text-olive-100 mb-8 max-w-2xl mx-auto">
            Join thousands of patients who trust MediBook for their healthcare
            needs. Start booking appointments today.
          </p>
          <button className="px-10 py-4 bg-white text-olive-700 rounded-lg hover:bg-olive-50 transition shadow-xl text-lg font-semibold">
            Get Started Free
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
