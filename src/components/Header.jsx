import React from "react";
import styled from "styled-components";
function Header() {
  const handleLogoutBtn = () => {
    // 로컬 스토리지에서 "토큰"이라는 이름의 값을 삭제
    localStorage.removeItem("token");
    // 로그아웃 로직 추가
    // ...
  };
  return (
    <StWidthWraprer className="headerWidth">
      <img className="logoG" src={"Balance Game.png"} alt="logo"/>
      <StLoginBtn className="btnLogin" onClick={handleLogoutBtn}>로그아웃</StLoginBtn>
    </StWidthWraprer>
  );
}

export default Header;
const StWidthWraprer = styled.div`
  width: 100%;
  padding: 3%;
  margin: 0 auto;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position :fixed;
  border :1px solid blak;

`
const StLoginBtn = styled.button`
 
`


