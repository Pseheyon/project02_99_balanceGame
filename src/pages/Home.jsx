import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Home = () => {
  const navi = useNavigate();
  const tokennickname = localStorage.getItem("token");
  const token = localStorage.getItem("token");
  const isLoggedIn = token ? true : false;
  console.log(tokennickname);
  const handleLogoutBtn = () => {
    // 로컬 스토리지에서 "토큰"이라는 이름의 값을 삭제
    localStorage.removeItem("token");
    // 로그아웃 로직 추가
    // ...
  };
  //가드;
  useEffect(() => {
    if (token) {
      navi("/");
    }
  }, []);

  return (
    <div>
      <h2>Home</h2>
      {/* {isLoggedIn ? ( */}
      <form>
        {/* 로그인 상태에 따른 버튼 표시 */}
        {isLoggedIn ? (
          <button onClick={handleLogoutBtn}>로그아웃</button>
        ) : (
          <>
            <button
              onClick={() => {
                navi("/signup");
              }}
            >
              회원가입
            </button>
            <button
              onClick={() => {
                navi("/login");
              }}
            >
              로그인
            </button>
          </>
        )}
        {/* <button>로그인</button>
      <button onClick={handleLogout}>로그아웃</button> */}
      </form>
    </div>
  );
};

export default Home;
