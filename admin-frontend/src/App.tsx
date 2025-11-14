import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-olive-50">
      <header className="bg-gradient-to-r from-olive-700 to-olive-900 text-white p-6 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-olive-700 font-bold text-xl">M</span>
            </div>
            <h1 className="text-3xl font-bold">
              {import.meta.env.VITE_APP_NAME}
            </h1>
          </div>
          <button className="px-4 py-2 bg-white text-olive-700 rounded-lg hover:bg-olive-50 transition font-semibold">
            Sign Out
          </button>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-8 border border-olive-200">
          <h2 className="text-3xl font-bold text-olive-900 mb-4">
            Welcome to Admin Dashboard
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Manage hospitals, appointments, and users from this central hub
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-olive-50 p-6 rounded-lg border border-olive-200">
              <h3 className="text-xl font-semibold text-olive-900 mb-2">
                Total Hospitals
              </h3>
              <p className="text-4xl font-bold text-olive-600">500+</p>
            </div>
            <div className="bg-olive-50 p-6 rounded-lg border border-olive-200">
              <h3 className="text-xl font-semibold text-olive-900 mb-2">
                Active Users
              </h3>
              <p className="text-4xl font-bold text-olive-600">50K+</p>
            </div>
            <div className="bg-olive-50 p-6 rounded-lg border border-olive-200">
              <h3 className="text-xl font-semibold text-olive-900 mb-2">
                Appointments
              </h3>
              <p className="text-4xl font-bold text-olive-600">100K+</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
