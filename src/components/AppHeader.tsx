import React from "react";
import {Typography} from "@mui/material";
import {PaddedContentFlexBoxRow} from "./common/components";
import styled from "@mui/material/styles/styled";

const StyledBoxHeader = styled(PaddedContentFlexBoxRow)(({theme}) => ({
  background: '#1976D2',
  color: '#ffffff',
  borderRadius: '4px 4px 0 0',
}));

export const AppHeader: React.FC = () => {
  return(
    <StyledBoxHeader>
      <Typography align={'center'}>The one and only weather app</Typography>
    </StyledBoxHeader>
  );
};
