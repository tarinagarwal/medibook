import "./App.css";

function App() {
  return (
    <div className="app">
      <header>
        <h1>{import.meta.env.VITE_APP_NAME}</h1>
      </header>
      <main>
        <h2>Welcome to Patient Portal</h2>
        <p>Book appointments with multiple hospitals</p>
      </main>
    </div>
  );
}

export default App;
