//Components
import Navbar from "./components/Navbar/Navbar"
import Weather from "./components/WeatherAnalyst/Weather";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/login/signup/Login";
import Signup from "./components/login/signup/Signup";
import Support from "./components/Support/support";
//Routes
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

function AppContent() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/" || location.pathname === "/signup" || location.pathname === "/support";
  

  return (
    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/support" element={<Support />} />

        <Route
          path="/*"
          element={
            !isAuthPage && (
              <main className="grid grid-cols-2-[220px_1fr] gap-4 p-4">
                <Navbar />
                <Routes>
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="weather" element={<Weather />} />
                  <Route path="*" element={<Error />} />
                </Routes>
              </main>
            )
          }
        />
      </Routes>
    
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}


