import api from "./api-base";

export const kakaoApi = {
  getToken: (KAKAO_CODE: string) =>
    api.post(
      `/oauth/token?grant_type=authorization_code&client_id=${
        import.meta.env.VITE_KAKAO_API_KEY
      }&redirect_uri=${
        import.meta.env.VITE_KAKAO_LOGIN_REDIRECT_URL
      }&code=${KAKAO_CODE}`
      //   {
      //     grant_type: "authorization_code",
      //     client_id: import.meta.env.VITE_KAKAO_API_KEY,
      //     redirect_uri: import.meta.env.VITE_KAKAO_LOGIN_REDIRECT_URL,
      //     code: KAKAO_CODE,
      // }
    ),
};