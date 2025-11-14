import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-purple-600 text-white p-6 shadow-lg">
        <h1 className="text-3xl font-bold">{import.meta.env.VITE_APP_NAME}</h1>
      </header>
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Welcome to Admin Dashboard
        </h2>
        <p className="text-gray-600">
          Manage hospitals, appointments, and users
        </p>
      </main>
    </div>
  );
}

export default App;
