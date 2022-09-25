import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { kakaoApi } from "../../apis/api-kakao";

const Oauth = () => {
  const location = useLocation();
  const KAKAO_CODE = location.search.split('=')[1];

  console.log("location", location, KAKAO_CODE);

  const getKakaoToken = async () => {
    try {
      const result = await kakaoApi.getToken(KAKAO_CODE);
      console.log(result);
      if (result.data.access_token) {
        localStorage.setItem('access_token', result.data.access_token);
      } else {
        console.log('access token is not valid');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if(!location.search) return;
    getKakaoToken();
  }, [])

  return (
    <div>
      카카오 콜백
    </div>
  );
};

export default Oauth;