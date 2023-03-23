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
    <StBackGroundImg>
    <Home>
      <form onSubmit={submitButtonHandler}>
        <InputArea className="GstInputWarpper">
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

        <InputArea className="GstInputWarpper">
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
          </InputArea>
          <InputArea className="GstInputWarpper">
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
    </StBackGroundImg>
  );
}
export default Signup;
const StBackGroundImg = styled.div`
    background-image: url('https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fdf8647c6-e4b6-43b5-9657-3278709d1a60%2Fsignup.png?id=3bbbb13a-5b1e-47f9-ac42-4408bc1f696c&table=block&spaceId=cc4da40c-bf96-414a-a09f-a7f478e1d2c5&width=2000&userId=3f23687d-17d1-4fb1-a726-fbd8eb60ed0a&cache=v2');
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-repeat :no-repeat;
    background-size: cover;
    background-position: center;
`
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
  align-items: center;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin: 3%;
  padding: 0 3%;
`;

const SignupLabel = styled.label`
  font-weight: bold;
`;

const SignupInput = styled.input`
  width: 10%;
  height: 50px;
  margin-top: 10px;

  border: 2px solid black;
`;
const SignupBtn = styled.button`
  width: 50%;
  height: 30px;
  margin:  0 auto;
`;
// const StWidthWraprer = styled.div`

// `;
