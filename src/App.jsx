import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Navbar from "./components/layout/Navbar";
import ProtectedRoute from "./components/layout/ProtectedRoute";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PlantsPage from "./pages/PlantsPage";
import RemindersPage from "./pages/RemindersPage";
import { AnimatePresence } from "framer-motion";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Navbar />
      <div className="page-container">
        {/* AnimatePresence enables smooth page transitions */}
        <AnimatePresence mode="wait">
          <Routes>
            {/* Public Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* Protected Pages */}
            <Route
              path="/plants"
              element={
                <ProtectedRoute>
                  <PlantsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/reminders"
              element={
                <ProtectedRoute>
                  <RemindersPage />
                </ProtectedRoute>
              }
            />

            {/* Catch-All Fallback */}
            <Route path="*" element={<h2 style={{ textAlign: "center", marginTop: "3rem" }}>404 – Page Not Found</h2>} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
