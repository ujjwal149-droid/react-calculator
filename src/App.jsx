import Calculator from "./components/Calculator.jsx";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>React Calculator</h1>
        <p>
          Learning project by <strong>Ujjawal Tyagi</strong>
        </p>
      </header>

      <main className="app-main">
        <Calculator />
      </main>

      <footer className="app-footer">
        <p>
          © {new Date().getFullYear()} · Built with React by{" "}
          <strong>Ujjawal Tyagi</strong>
        </p>
        <a
          href="https://github.com/ujjawaltyagi/react-calculator"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
