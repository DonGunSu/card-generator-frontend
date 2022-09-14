import React from "react";
import { Link } from "react-router-dom";

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
          <Link to="/card/make">카드 제작</Link>
        </li>
        <li>
          <Link to="/card/list">카드 목록</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
