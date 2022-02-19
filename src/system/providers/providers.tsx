import React from "react";
import {MuiThemeProvider} from "./MuiThemeProvider";

export const withProviders = (Component: React.FC) => {

  const ProvidedComponent: React.FC = () => (
    <MuiThemeProvider>
      <Component />
    </MuiThemeProvider>
  );

  return ProvidedComponent;

};
