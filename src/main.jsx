import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/index.css";

import { ThemeProvider, createTheme } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
      orange: '#f44336',
      grey: '#6b7280',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
