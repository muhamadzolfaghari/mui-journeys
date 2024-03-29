import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginWithReactHookFormYup from "./pages/LoginWithReactHookFormYup";
import LoginWithFormikYup from "./pages/LoginWithFormikYup";
import Login from "./pages/LoginWithFormikYup";
import XDataGrid from "./pages/XDataGrid";
import StatelessBreakpoints from "./pages/StatelessBreakpoints";
import ResponsiveWithHook from "./pages/ResponsiveWithHook";
import CascadingInputs from "./pages/CascadingInputs";
import CascadingInputsReducer from "./pages/CascadingInputsReducer";

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
    <Route path="stateless-breakpoints" element={<StatelessBreakpoints />} />
    <Route path="responsive-with-hook" element={<ResponsiveWithHook />} />
    <Route path="cascading-inputs" element={<CascadingInputs />} />
    <Route path="cascading-inputs-reducer" element={<CascadingInputsReducer />} />
  </Routes>
);

export default AppRoutes;
