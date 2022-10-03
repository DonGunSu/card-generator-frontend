import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ListItemButton } from "@mui/material";
import * as s from "./NavigationStyled";

const Navigation = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <s.NavigationBarWrapper>
      <s.NavigationBar>
        <s.NavigationItem current={pathname === "/"}>
          <ListItemButton component={Link} to="/">
            <s.NavigationItemText primary="메인" />
          </ListItemButton>
        </s.NavigationItem>
        <s.NavigationItem current={pathname === "/login"}>
          <ListItemButton component={Link} to="/login">
            <s.NavigationItemText primary="로그인" />
          </ListItemButton>
        </s.NavigationItem>
        <s.NavigationItem current={pathname === "/card/make"}>
          <ListItemButton component={Link} to="/card/make">
            <s.NavigationItemText primary="카드 제작" />
          </ListItemButton>
        </s.NavigationItem>
        <s.NavigationItem current={pathname === "/card/list"}>
          <ListItemButton component={Link} to="/card/list">
            <s.NavigationItemText primary="카드 목록" />
          </ListItemButton>
        </s.NavigationItem>
      </s.NavigationBar>
    </s.NavigationBarWrapper>
  );
};

export default Navigation;
