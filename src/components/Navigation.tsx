import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">메인</Link>
        </li>
        <li>
          <Link to="/login">로그인</Link>
        </li>
        <li>
          <Link to="/card-maker">카드 생성기</Link>
        </li>
        <li>
          <Link to="/card-gallery">카드 목록</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
