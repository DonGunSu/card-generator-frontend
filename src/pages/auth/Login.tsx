import React from 'react';

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${
  import.meta.env.VITE_KAKAO_API_KEY
}&redirect_uri=${
  import.meta.env.VITE_KAKAO_LOGIN_REDIRECT_URL
}&response_type=code`;

const Login = () => {
  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <div>
    로그인
      <button onClick={handleLogin}>카카오 시작하기</button>
    </div>
  );
};

export default Login;
