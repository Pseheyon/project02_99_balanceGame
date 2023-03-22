import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { __login } from "../redux/modules/login";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import NInput from "../Hooks/NInput";

function Login() {
  const dispatch = useDispatch();
  const navi = useNavigate();

  const [user, setUser] = useState({
    nickname: "",
    password: "",
  });

  const changeInputHandler = (event) => {
    const { value, name } = event.target;
    event.preventDefault();

    setUser((old) => {
      return { ...old, [name]: value };
    });
  };
  const token = localStorage.getItem("token");
  const isLoggedIn = token ? true : false;

  const submitButtonHandler = async (event) => {
    event.preventDefault();
    dispatch(__login(user));
    navi("/games");
  };
  // function handleLogout() {
  //   dispatch(__logout(user));
  // }
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

  //useEffect는 마운트될때 한번만 실행되고 그 후에 실행되지 않음
  //새로고침하면 실행됨

  return (
    <SignupBox onSubmit={submitButtonHandler}>
      <InputArea className="GstInputWarpper">
        {/* <SignupLabel htmlFor="id"> 아이디 </SignupLabel> */}
        <span>아이디</span>
        <NInput
          type="text"
          value={user.nickname}
          name="nickname"
          onChange={changeInputHandler}
          placeholder="아이디를 입력해주세요 🙏"
        />
      </InputArea>

      <InputArea>
        {/* <SignupLabel>패스워드</SignupLabel> */}
        <span>패스워드</span>
        <NInput
          type="password"
          value={user.password}
          name="password"
          onChange={changeInputHandler}
          placeholder="비밀번호를 입력해주세요"
        />
      </InputArea>
      {/* 로그인 상태에 따른 버튼 표시 */}
      {isLoggedIn ? (
        <button onClick={handleLogoutBtn}>로그아웃</button>
      ) : (
        <>
          <button
            onClick={() => {
              navi("/");
            }}
          >
            회원가입
          </button>
          {/* <div onClick={navi("/")}> */}
          <button>로그인</button>
          {/* </div> */}
        </>
      )}
      <div>{user.nickname}</div>
    </SignupBox>
  );
}
const SignupBox = styled.form`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  background-color: aqua;
  border-radius: 80px;
  height: 60vh;
  padding: 20% auto;
  box-sizing: border-box;
  overflow: hidden;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const SignupLabel = styled.label`
  font-weight: bold;
`;

const SignupBtn = styled.button`
  width: 50%;
  height: 30px;
`;
export default Login;
