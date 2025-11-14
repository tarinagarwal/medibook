import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-br from-olive-50 via-white to-olive-50 py-12 md:py-20 lg:py-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-olive-900 mb-4 md:mb-6 leading-tight">
                Book Your Healthcare Appointments{" "}
                <span className="text-olive-600">Seamlessly</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 md:mb-8">
                Connect with top hospitals and healthcare providers. Schedule
                appointments, manage your health records, and get the care you
                deserve.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-olive-600 text-white rounded-lg hover:bg-olive-700 transition shadow-lg text-base md:text-lg font-semibold">
                  Book Appointment Now
                </button>
                <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 border-2 border-olive-600 text-olive-700 rounded-lg hover:bg-olive-50 transition text-base md:text-lg font-semibold">
                  Browse Hospitals
                </button>
              </div>
              <div className="mt-6 md:mt-8 grid grid-cols-3 gap-4 md:gap-8">
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-olive-700">
                    500+
                  </p>
                  <p className="text-sm md:text-base text-gray-600">
                    Hospitals
                  </p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-olive-700">
                    10K+
                  </p>
                  <p className="text-sm md:text-base text-gray-600">Doctors</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-olive-700">
                    50K+
                  </p>
                  <p className="text-sm md:text-base text-gray-600">Patients</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="bg-gradient-to-br from-olive-200/40 to-olive-300/40 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl border border-olive-200/50">
                <img
                  src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=600&fit=crop"
                  alt="Healthcare"
                  className="rounded-2xl w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white/90 backdrop-blur-md p-4 md:p-6 rounded-xl shadow-xl border border-olive-100">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-olive-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-olive-600"
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
                    <p className="font-semibold text-olive-900 text-sm md:text-base">
                      Verified Hospitals
                    </p>
                    <p className="text-xs md:text-sm text-gray-600">
                      100% Trusted
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-olive-900 mb-3 md:mb-4">
              Why Choose MediBook?
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Experience healthcare booking like never before
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-gradient-to-br from-olive-50/80 to-olive-100/60 backdrop-blur-lg p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-olive-200/50 hover:scale-105">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-olive-100 to-olive-200 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <svg
                  className="w-7 h-7 md:w-8 md:h-8 text-olive-600"
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
              <h3 className="text-xl md:text-2xl font-semibold text-olive-900 mb-3 md:mb-4">
                Easy Scheduling
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Book appointments in seconds with our intuitive interface.
                Choose your preferred time and doctor effortlessly.
              </p>
            </div>

            <div className="bg-gradient-to-br from-olive-100/70 to-olive-200/50 backdrop-blur-lg p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-olive-200/50 hover:scale-105">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-olive-200 to-olive-300 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <svg
                  className="w-7 h-7 md:w-8 md:h-8 text-olive-700"
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
              <h3 className="text-xl md:text-2xl font-semibold text-olive-900 mb-3 md:mb-4">
                Multiple Hospitals
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Access 500+ hospitals and healthcare facilities all in one
                platform. Find the best care near you.
              </p>
            </div>

            <div className="bg-gradient-to-br from-olive-50/90 to-olive-100/70 backdrop-blur-lg p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-olive-200/50 hover:scale-105">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-olive-100 to-olive-200 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <svg
                  className="w-7 h-7 md:w-8 md:h-8 text-olive-600"
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
              <h3 className="text-xl md:text-2xl font-semibold text-olive-900 mb-3 md:mb-4">
                Secure & Private
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Your health data is encrypted and secure. We prioritize your
                privacy with industry-leading security measures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hospitals Section */}
      <section
        id="hospitals"
        className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-olive-50/50 to-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-olive-900 mb-3 md:mb-4">
              Partner Hospitals
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Trusted by leading healthcare institutions
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="bg-white/70 backdrop-blur-sm p-4 md:p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center h-24 md:h-32 border border-olive-100/50 hover:scale-105"
              >
                <p className="text-olive-700 font-semibold text-sm md:text-lg">
                  Hospital {i}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-olive-600 via-olive-700 to-olive-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNnptMC00YzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMi0yIC45LTIgMiAuOSAyIDIgMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-base md:text-xl text-olive-100 mb-6 md:mb-8 max-w-2xl mx-auto">
            Join thousands of patients who trust MediBook for their healthcare
            needs. Start booking appointments today.
          </p>
          <button className="px-8 md:px-10 py-3 md:py-4 bg-white text-olive-700 rounded-lg hover:bg-olive-50 transition shadow-xl text-base md:text-lg font-semibold">
            Get Started Free
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
