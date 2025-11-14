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
                Modernize Your Hospital's{" "}
                <span className="text-olive-600">Appointment System</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 md:mb-8">
                Join MediBook's network of 500+ hospitals. Streamline patient
                appointments, reduce no-shows, and improve operational
                efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-olive-600 text-white rounded-lg hover:bg-olive-700 transition shadow-lg text-base md:text-lg font-semibold">
                  Register Your Hospital
                </button>
                <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 border-2 border-olive-600 text-olive-700 rounded-lg hover:bg-olive-50 transition text-base md:text-lg font-semibold">
                  Schedule Demo
                </button>
              </div>
              <div className="mt-6 md:mt-8 grid grid-cols-3 gap-4 md:gap-8">
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-olive-700">
                    99.9%
                  </p>
                  <p className="text-sm md:text-base text-gray-600">Uptime</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-olive-700">
                    24/7
                  </p>
                  <p className="text-sm md:text-base text-gray-600">Support</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-olive-700">
                    500+
                  </p>
                  <p className="text-sm md:text-base text-gray-600">
                    Hospitals
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="bg-gradient-to-br from-olive-200/40 to-olive-300/40 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl border border-olive-200/50">
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=600&fit=crop"
                  alt="Hospital Management"
                  className="rounded-2xl w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white/90 backdrop-blur-md p-4 md:p-6 rounded-xl shadow-xl border border-olive-100">
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-olive-900 text-sm md:text-base">
                      Fast Setup
                    </p>
                    <p className="text-xs md:text-sm text-gray-600">
                      Go live in 24hrs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-olive-900 mb-3 md:mb-4">
              Powerful Features for Modern Hospitals
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Everything you need to manage appointments efficiently
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
                title: "Patient Management",
                desc: "Comprehensive patient records, appointment history, and medical documentation all in one place.",
                gradient: "from-olive-50/80 to-olive-100/60",
              },
              {
                icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
                title: "Smart Scheduling",
                desc: "AI-powered scheduling that optimizes doctor availability and reduces wait times for patients.",
                gradient: "from-olive-100/70 to-olive-200/50",
              },
              {
                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                title: "Analytics Dashboard",
                desc: "Real-time insights into appointment trends, patient flow, and operational metrics.",
                gradient: "from-olive-50/90 to-olive-100/70",
              },
              {
                icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
                title: "Automated Reminders",
                desc: "Reduce no-shows with automated SMS and email reminders sent to patients before appointments.",
                gradient: "from-olive-100/80 to-olive-200/60",
              },
              {
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                title: "Multi-Doctor Support",
                desc: "Manage multiple doctors, departments, and specializations with ease from a single dashboard.",
                gradient: "from-olive-50/70 to-olive-100/50",
              },
              {
                icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                title: "HIPAA Compliant",
                desc: "Enterprise-grade security with full HIPAA compliance to protect sensitive patient data.",
                gradient: "from-olive-100/90 to-olive-200/70",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br ${feature.gradient} backdrop-blur-lg p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-olive-200/50 hover:scale-105`}
              >
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
                      d={feature.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-olive-900 mb-3 md:mb-4">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        id="benefits"
        className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-olive-50/50 to-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-olive-900 mb-3 md:mb-4">
              Why Hospitals Choose MediBook
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Join the healthcare revolution
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Increase Patient Satisfaction",
                desc: "Easy booking and reduced wait times lead to happier patients",
              },
              {
                title: "Reduce Administrative Burden",
                desc: "Automate scheduling and free up staff for patient care",
              },
              {
                title: "Boost Revenue",
                desc: "Fill more appointment slots and reduce no-shows by 40%",
              },
              {
                title: "Seamless Integration",
                desc: "Works with your existing systems and workflows",
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-3 md:space-x-4 bg-white/70 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-olive-100/50"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-olive-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-olive-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    {benefit.desc}
                  </p>
                </div>
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
            Ready to Transform Your Hospital?
          </h2>
          <p className="text-base md:text-xl text-olive-100 mb-6 md:mb-8 max-w-2xl mx-auto">
            Join 500+ hospitals already using MediBook. Get started today with a
            free demo and see the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <button className="px-8 md:px-10 py-3 md:py-4 bg-white text-olive-700 rounded-lg hover:bg-olive-50 transition shadow-xl text-base md:text-lg font-semibold">
              Register Your Hospital
            </button>
            <button className="px-8 md:px-10 py-3 md:py-4 border-2 border-white text-white rounded-lg hover:bg-olive-700 transition text-base md:text-lg font-semibold">
              Schedule a Demo
            </button>
          </div>
          <p className="text-olive-200 mt-4 md:mt-6 text-sm md:text-base">
            Already have an account?{" "}
            <a href="#signin" className="text-white font-semibold underline">
              Sign In
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
