import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";

export const PaddedContentFlexBoxRow = styled(Box)(({theme}) => ({
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
  padding: theme.spacing(1),
}));

export const PaddedContentFlexBoxColumn = styled(Box)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(1),
}));
