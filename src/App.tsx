import React from 'react';
import {withProviders} from "./system/providers/providers";
import {Weather} from "./pages/Weather";

const AppInit = withProviders(() => (<Weather />));

export const App: React.FC = () => (
  <AppInit />
);
