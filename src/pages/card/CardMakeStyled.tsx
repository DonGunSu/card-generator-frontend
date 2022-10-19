import styled from "styled-components";
import { Box, Button, List, ListItem } from "@mui/material";

export const CardMakeWrapper = styled(Box)(() => ({
  display: "flex",
  backgroundColor: 'white',
  border: "1px black solid",
}));

export const CardMakeList = styled(List)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
}));

export const ChoiceBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "800px",
  marginTop: "1rem",
})); 

export const ChoiceBar = styled(List)(() => ({
  display: "flex",
  alignItems: "center",
  height: "2rem",
})); 

export const ExportBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  marginTop: "0.5rem",
})); 