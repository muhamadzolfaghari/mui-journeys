import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginWithReactHookFormYup from "./pages/LoginWithReactHookFormYup";
import LoginWithFormikYup from "./pages/LoginWithFormikYup";
import Login from "./pages/LoginWithFormikYup";
import XDataGrid from "./pages/XDataGrid";

const AppRoutes = () => (
  <Routes>
    <Route path="/login-with-formik-yup" element={<LoginWithFormikYup />} />
    <Route
      path="/layout-with-react-hook-form-yup"
      element={<LoginWithReactHookFormYup />}
    />
    <Route path="/login" element={<Login />} />
    <Route path="*" element={<Home />} />
    <Route path="/x-data-grid" element={<XDataGrid />} />
  </Routes>
);

export default AppRoutes;
