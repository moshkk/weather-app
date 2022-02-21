import React, {PropsWithChildren} from "react";
import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import {PaddedContentFlexBoxColumn} from "../../components/common/components";

const CenteredFullHeightFlex = styled(Box)(({theme}) => ({
  height: '100vh',
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
}));

const ContentBox = styled(PaddedContentFlexBoxColumn)(({theme}) => ({
  width: 500
}));

export const PageCenteredLayout: React.FC<PropsWithChildren<any>> = ({children}) => {
  return(
    <CenteredFullHeightFlex>
      <Paper>
        <ContentBox>
          {children}
        </ContentBox>
      </Paper>
    </CenteredFullHeightFlex>
  );
};
