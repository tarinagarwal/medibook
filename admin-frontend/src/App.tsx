import "./App.css";

function App() {
  return (
    <div className="app">
      <header>
        <h1>{import.meta.env.VITE_APP_NAME}</h1>
      </header>
      <main>
        <h2>Welcome to Admin Dashboard</h2>
        <p>Manage hospitals, appointments, and users</p>
      </main>
    </div>
  );
}

export default App;
