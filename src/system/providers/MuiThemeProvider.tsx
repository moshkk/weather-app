import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../theme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

export const MuiThemeProvider: React.FC = ({children}) => (
  <ThemeProvider theme={theme}>
    <CssBaseline/>
    {children}
  </ThemeProvider>
);
