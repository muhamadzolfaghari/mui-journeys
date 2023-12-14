import { Routes, Route } from "react-router-dom";
import App from "./pages/LayoutPage";
import Home from "./pages/Home";
import Login from "./pages/Login";

const AppRoutes = () => (
  <Routes>
    <Route path="/layout-page" element={<App />} />
    <Route path="/login" element={<Login />} />
    <Route path="*" element={<Home />} />
  </Routes>
);

export default AppRoutes;
