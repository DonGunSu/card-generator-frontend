import styled from "styled-components";
import { Box, List, ListItem, ListItemText } from "@mui/material";

export const NavigationBarWrapper = styled(Box)(() => ({
  display: "flex",
  border: "1px black solid",
}));

export const NavigationBar = styled(List)(() => ({
  display: "flex",
  flexDirection: "row",
  width: "100%",
}));

export const NavigationItem = styled(ListItem)(({ current }) => ({
  border: "1px red solid",
  padding: 0,
  color: current === true ? "blue" : "black",
}));

export const NavigationItemText = styled(ListItemText)(() => ({
  textAlign: "center",
}));
