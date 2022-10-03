import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Oauth from "../pages/auth/Oauth";
import CardList from "../pages/card/CardList";
import CardMake from "../pages/card/CardMake";

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/card/list" element={<CardList />} />
      <Route path="/card/make" element={<CardMake />} />
      <Route path="/kakao/callback" element={<Oauth />} />
    </Routes>
  );
};

export default Router;
