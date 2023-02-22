import React from "react";
import { ThemeProvider } from "styled-components";
import { createRoot } from "react-dom/client";
import { GlobalStyles } from "./styles/global-styles";
import Home from "./template/App";
import { theme } from "./styles/theme";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
);
