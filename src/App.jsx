import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Absensi from "./pages/Absensi";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Toast from "./components/Toast";

function App() {
  return (
    <Router>
      <div className="font-sans min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Absensi />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        <Toast />
      </div>
    </Router>
  );
}

export default App;
