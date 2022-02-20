import React from "react";
import {MuiThemeProvider} from "./MuiThemeProvider";
import {ReduxStateProvider} from "./ReduxStateProvider";

export const withProviders = (Component: React.FC) => {

  const ProvidedComponent: React.FC = () => (
    <ReduxStateProvider>
      <MuiThemeProvider>
        <Component />
      </MuiThemeProvider>
    </ReduxStateProvider>
  );

  return ProvidedComponent;

};
