import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import NInput from "../Hooks/NInput";
import { __signup } from "../redux/modules/signup";
import { useNavigate } from "react-router-dom";

function Signup() {
  const dispatch = useDispatch();
  const navi = useNavigate();
  const token = localStorage.getItem("token");
  const [user, setUser] = useState({
    nickname: "",
    password: "",
    confirmPassword: "",
  });

  const changeInputHandler = (event) => {
    const { value, name } = event.target;
    setUser((old) => {
      return { ...old, [name]: value };
    });
  };

  const submitButtonHandler = async (event) => {
    event.preventDefault();
    dispatch(__signup(user));
  };

  //가드;
  useEffect(() => {
    if (token) {
      navi("/");
    }
  }, []);

  return (
    <Home>
      <form onSubmit={submitButtonHandler}>
        <InputArea>
          {/* <SignupLabel htmlFor="id"> 아이디 </SignupLabel> */}
          <span>아이디</span>
          <NInput
            type="text"
            value={user.nickname}
            name="nickname"
            onChange={changeInputHandler}
            placeholder="아이디를 입력해주세요 🙏"
            required
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
            required
          />
          <span>패스워드확인</span>
          <NInput
            type="password"
            value={user.confirmPassword}
            name="confirmPassword"
            onChange={changeInputHandler}
            placeholder="비밀번호를 입력해주세요"
            required
          />
        </InputArea>
        <SignupBtn
        // onSubmit={() => submitButtonHandler(signUpRequest)}
        >
          가입하기
        </SignupBtn>
      </form>
    </Home>
  );
}

const Home = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SignupBox = styled.form`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;

  width: 90%;
`;

const SignupLabel = styled.label`
  font-weight: bold;
`;

const SignupInput = styled.input`
  width: 100%;
  height: 50px;
  margin-top: 10px;

  border: 2px solid black;
`;
const SignupBtn = styled.button`
  width: 50%;
  height: 30px;
`;

export default Signup;
