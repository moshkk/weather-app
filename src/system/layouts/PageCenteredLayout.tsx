import React, {PropsWithChildren} from "react";
import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";

const CenteredFullHeightFlex = styled(Box)(({theme}) => ({
  height: '100vh',
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
}));

export const PageCenteredLayout: React.FC<PropsWithChildren<any>> = ({children}) => {
  return(
    <CenteredFullHeightFlex>
      {children}
    </CenteredFullHeightFlex>
  );
};
