import React from 'react';
import {withProviders} from "./system/providers/providers";
import {AppContainerBox} from "./components/AppContainerBox/AppContainerBox";

const AppInit = withProviders(AppContainerBox);

export const App: React.FC = () => (
  <AppInit />
);
