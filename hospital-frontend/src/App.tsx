import "./App.css";

function App() {
  return (
    <div className="app">
      <header>
        <h1>{import.meta.env.VITE_APP_NAME}</h1>
      </header>
      <main>
        <h2>Welcome to Hospital Portal</h2>
        <p>Manage your hospital appointments and patients</p>
      </main>
    </div>
  );
}

export default App;
