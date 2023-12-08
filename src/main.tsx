import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./lib/theme.ts";
import RTL from "./components/RTL.tsx";
import CssBaseline from "@mui/material/CssBaseline";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RTL>
        <CssBaseline />
        <App />
      </RTL>
    </ThemeProvider>
  </React.StrictMode>
);
