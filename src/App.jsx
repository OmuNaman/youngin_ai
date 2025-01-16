import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;