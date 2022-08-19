import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from '../pages/auth/Login';
import CardMaker from '../pages/card/CardMaker';
import CardGallery from '../pages/card/CardGallery';

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      {/* 로그인을 완료해야 진입 가능한 페이지 - 인증에 대한 추가 구현 필요 */}
      <Route element={<PrivateRoute authentication={true} />}>
        <Route path="/card-maker" element={<CardMaker />} />
        <Route path="/card-gallery" element={<CardGallery />} />
      </Route>
    </Routes>
  );
};

export default Router;
