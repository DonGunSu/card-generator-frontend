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
      if (result.status === 200) {
        const {
          data: {
            access_token,
            expires_in,
            refresh_token,
            refresh_token_expires_in,
          },
        } = result;

        const refreshToken = {
          value: access_token,
          expire: Date.now() + refresh_token_expires_in,
        };

        const accessToken = {
          value: access_token,
          expire: Date.now() + expires_in,
        };

        window.localStorage.setItem(
          "access_token",
          JSON.stringify(accessToken)
        );
        window.localStorage.setItem(
          "refresh_token",
          JSON.stringify(refreshToken)
        );
        console.log(
          result,
          access_token,
          expires_in,
          refresh_token,
          refresh_token_expires_in
        );
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