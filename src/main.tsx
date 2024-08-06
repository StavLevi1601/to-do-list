import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { ModeProvider } from "./theme/ThemeProvider.tsx";

const theme = createTheme({
  typography: {
    fontFamily: "'Josefin Sans', Arial, sans-serif",
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ModeProvider>
        <App />
      </ModeProvider>
    </ThemeProvider>
  </React.StrictMode>
);
