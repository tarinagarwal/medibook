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
                Modernize Your Hospital's{" "}
                <span className="text-olive-600">Appointment System</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Join MediBook's network of 500+ hospitals. Streamline patient
                appointments, reduce no-shows, and improve operational
                efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-olive-600 text-white rounded-lg hover:bg-olive-700 transition shadow-lg text-lg font-semibold">
                  Register Your Hospital
                </button>
                <button className="px-8 py-4 border-2 border-olive-600 text-olive-700 rounded-lg hover:bg-olive-50 transition text-lg font-semibold">
                  Schedule Demo
                </button>
              </div>
              <div className="mt-8 flex items-center gap-8">
                <div>
                  <p className="text-3xl font-bold text-olive-700">99.9%</p>
                  <p className="text-gray-600">Uptime</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-olive-700">24/7</p>
                  <p className="text-gray-600">Support</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-olive-700">500+</p>
                  <p className="text-gray-600">Hospitals</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-olive-200 rounded-3xl p-8 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=600&fit=crop"
                  alt="Hospital Management"
                  className="rounded-2xl w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-olive-900">Fast Setup</p>
                    <p className="text-sm text-gray-600">Go live in 24hrs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-olive-900 mb-4">
              Powerful Features for Modern Hospitals
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to manage appointments efficiently
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
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-olive-900 mb-4">
                Patient Management
              </h3>
              <p className="text-gray-600">
                Comprehensive patient records, appointment history, and medical
                documentation all in one place.
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
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-olive-900 mb-4">
                Smart Scheduling
              </h3>
              <p className="text-gray-600">
                AI-powered scheduling that optimizes doctor availability and
                reduces wait times for patients.
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
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-olive-900 mb-4">
                Analytics Dashboard
              </h3>
              <p className="text-gray-600">
                Real-time insights into appointment trends, patient flow, and
                operational metrics.
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
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-olive-900 mb-4">
                Automated Reminders
              </h3>
              <p className="text-gray-600">
                Reduce no-shows with automated SMS and email reminders sent to
                patients before appointments.
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-olive-900 mb-4">
                Multi-Doctor Support
              </h3>
              <p className="text-gray-600">
                Manage multiple doctors, departments, and specializations with
                ease from a single dashboard.
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
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-olive-900 mb-4">
                HIPAA Compliant
              </h3>
              <p className="text-gray-600">
                Enterprise-grade security with full HIPAA compliance to protect
                sensitive patient data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-olive-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-olive-900 mb-4">
              Why Hospitals Choose MediBook
            </h2>
            <p className="text-xl text-gray-600">
              Join the healthcare revolution
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-olive-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-white"
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
                <h3 className="text-xl font-semibold text-olive-900 mb-2">
                  Increase Patient Satisfaction
                </h3>
                <p className="text-gray-600">
                  Easy booking and reduced wait times lead to happier patients
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-olive-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-white"
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
                <h3 className="text-xl font-semibold text-olive-900 mb-2">
                  Reduce Administrative Burden
                </h3>
                <p className="text-gray-600">
                  Automate scheduling and free up staff for patient care
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-olive-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-white"
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
                <h3 className="text-xl font-semibold text-olive-900 mb-2">
                  Boost Revenue
                </h3>
                <p className="text-gray-600">
                  Fill more appointment slots and reduce no-shows by 40%
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-olive-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-white"
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
                <h3 className="text-xl font-semibold text-olive-900 mb-2">
                  Seamless Integration
                </h3>
                <p className="text-gray-600">
                  Works with your existing systems and workflows
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-olive-600 to-olive-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Hospital?
          </h2>
          <p className="text-xl text-olive-100 mb-8 max-w-2xl mx-auto">
            Join 500+ hospitals already using MediBook. Get started today with a
            free demo and see the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-white text-olive-700 rounded-lg hover:bg-olive-50 transition shadow-xl text-lg font-semibold">
              Register Your Hospital
            </button>
            <button className="px-10 py-4 border-2 border-white text-white rounded-lg hover:bg-olive-700 transition text-lg font-semibold">
              Schedule a Demo
            </button>
          </div>
          <p className="text-olive-200 mt-6">
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
}

export default App;
