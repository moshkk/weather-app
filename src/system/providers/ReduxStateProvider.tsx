import React, {PropsWithChildren} from "react";
import {Provider} from "react-redux";
import {store} from "../../state/store";

export const ReduxStateProvider: React.FC<PropsWithChildren<any>> = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);
