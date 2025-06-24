import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";
import PlantsPage from "./pages/PlantsPage";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./components/ProtectedRoute";

<Route path="/plants" element={<ProtectedRoute><PlantsPage /></ProtectedRoute>} />
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/plants" element={<PlantsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
