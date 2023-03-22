import axios from "axios";

export const apis = axios.create({
  baseURL: "http://43.201.20.151:3001/api/",
  headers: {
    // "Access-Control-Allow-Origin": "*",
  },
});

const token = localStorage.getItem("token");
export const apis_token = axios.create({
  baseURL: "http://43.201.20.151:3001/api/",
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    authorization: `Bearer ${token}`,
  },
});

apis_token.interceptors.request.use((config) => {
  if (config.headers === undefined) return;
  config.headers["authorization"] = `${token}`;
  return config;
});

apis_token.interceptors.response.use(
  (response) => {
    const token = response.headers.authorization;
    if (token) {
      localStorage.setItem("token", token);
    }
    //else if()
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apis_token.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // 로컬스토리지에서 토큰 값 가져오기
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // HTTP 요청의 Authorization 헤더에 토큰 값 추가
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
