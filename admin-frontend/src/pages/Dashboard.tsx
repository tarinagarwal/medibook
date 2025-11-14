const Dashboard = () => {
  return (
    <div className="min-h-screen bg-olive-50">
      <header className="bg-gradient-to-r from-olive-700 to-olive-900 text-white p-4 md:p-6 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-olive-700 font-bold text-xl">M</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold">
              {import.meta.env.VITE_APP_NAME}
            </h1>
          </div>
          <button className="w-full sm:w-auto px-4 py-2 bg-white text-olive-700 rounded-lg hover:bg-olive-50 transition font-semibold">
            Sign Out
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="bg-white/80 backdrop-blur-lg rounded-xl shadow-lg p-6 md:p-8 border border-olive-200/50">
          <h2 className="text-2xl md:text-3xl font-bold text-olive-900 mb-3 md:mb-4">
            Welcome to Admin Dashboard
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-6 md:mb-8">
            Manage hospitals, appointments, and users from this central hub
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
            <div className="bg-gradient-to-br from-olive-50/90 to-olive-100/70 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-olive-200/50 hover:shadow-lg transition-all">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base md:text-xl font-semibold text-olive-900">
                  Total Hospitals
                </h3>
                <svg
                  className="w-6 h-6 md:w-8 md:h-8 text-olive-600"
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
              <p className="text-3xl md:text-4xl font-bold text-olive-600">
                500+
              </p>
              <p className="text-xs md:text-sm text-gray-600 mt-1">
                Active facilities
              </p>
            </div>

            <div className="bg-gradient-to-br from-olive-100/80 to-olive-200/60 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-olive-200/50 hover:shadow-lg transition-all">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base md:text-xl font-semibold text-olive-900">
                  Active Users
                </h3>
                <svg
                  className="w-6 h-6 md:w-8 md:h-8 text-olive-700"
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
              <p className="text-3xl md:text-4xl font-bold text-olive-700">
                50K+
              </p>
              <p className="text-xs md:text-sm text-gray-600 mt-1">
                Registered patients
              </p>
            </div>

            <div className="bg-gradient-to-br from-olive-50/80 to-olive-100/60 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-olive-200/50 hover:shadow-lg transition-all sm:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base md:text-xl font-semibold text-olive-900">
                  Appointments
                </h3>
                <svg
                  className="w-6 h-6 md:w-8 md:h-8 text-olive-600"
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
              <p className="text-3xl md:text-4xl font-bold text-olive-600">
                100K+
              </p>
              <p className="text-xs md:text-sm text-gray-600 mt-1">
                Total bookings
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            <button className="p-4 bg-olive-600 text-white rounded-lg hover:bg-olive-700 transition shadow-md text-sm md:text-base font-semibold">
              Manage Hospitals
            </button>
            <button className="p-4 bg-olive-600 text-white rounded-lg hover:bg-olive-700 transition shadow-md text-sm md:text-base font-semibold">
              View Users
            </button>
            <button className="p-4 bg-olive-600 text-white rounded-lg hover:bg-olive-700 transition shadow-md text-sm md:text-base font-semibold">
              Appointments
            </button>
            <button className="p-4 bg-olive-600 text-white rounded-lg hover:bg-olive-700 transition shadow-md text-sm md:text-base font-semibold">
              Analytics
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
