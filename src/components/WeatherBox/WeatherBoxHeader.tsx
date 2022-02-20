import React from "react";
import {Typography} from "@mui/material";
import {PaddedContentFlexBoxRow} from "./components";
import styled from "@mui/material/styles/styled";

const StyledBoxHeader = styled(PaddedContentFlexBoxRow)(({theme}) => ({
  background: '#162955',
  color: '#ffffff',
  borderRadius: '4px 4px 0 0',
}));

type SearchBoxHeaderProps = {
  title: string;
};

export const WeatherBoxHeader: React.FC<SearchBoxHeaderProps> = ({ title }) => {
  return(
    <StyledBoxHeader>
      <Typography align={'center'}>{title}</Typography>
    </StyledBoxHeader>
  );
};
