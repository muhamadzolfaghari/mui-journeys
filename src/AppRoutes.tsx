import {
  Routes,
  Route,
  useParams,
  useSearchParams,
  useLocation,
  useNavigate,
} from "react-router-dom";
import App from "./pages/LayoutPage";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import { useEffect } from "react";

const GetData = () => {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/layout-page");
  }, [navigate]);

  return <Layout>The id to show is {params.id}</Layout>;
};

const AppRoutes = () => (
  <Routes>
    <Route path="/layout-page" element={<App />} />
    <Route path="/get-data/:id" element={<GetData />} />
    <Route path="*" element={<Home />} />
  </Routes>
);

export default AppRoutes;
