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
  // useEffect(() => {
  //   if (token) {
  //     navi("/");
  //   }
  // }, []);

  //useEffect는 마운트될때 한번만 실행되고 그 후에 실행되지 않음
  //새로고침하면 실행됨

  return (
    // <div className='Homebackground'style={{ backgroundImage: `url(${"process.env.PUBLIC_URL/public/Login.png"})`}}>
    <>
      <StBackGroundImg>
    <SignupBox onSubmit={submitButtonHandler}>
      <InputArea className="GstInputWarpper">
        {/* <SignupLabel htmlFor="id"> 아이디 </SignupLabel> */}
        <span>ID</span>
        <NInput
          type="text"
          value={user.nickname}
          name="nickname"
          onChange={changeInputHandler}
          placeholder="아이디를 입력해주세요"
        />
      </InputArea>

      <InputArea className="GstInputWarpper">
        {/* <SignupLabel>패스워드</SignupLabel> */}
        <span>PW</span>
        <NInput
          type="password"
          value={user.password}
          name="password"
          onChange={changeInputHandler}
          placeholder="비밀번호를 입력해주세요"
        />
      </InputArea>
      <div>{/* 로그인 상태에 따른 버튼 표시 */}
      {isLoggedIn ? (
        <StStartButtonWhite className="btnLogin" onClick={handleLogoutBtn}>LOG OUT</StStartButtonWhite>
      ) : (
        <>
          <StStartButtonWhite
            onClick={() => {
              navi("/signup");
            }}
          >
            SINNGNUP
          </StStartButtonWhite>
          {/* <div onClick={navi("/")}> */}
          <StStartButton className="btnLogin">JOIN</StStartButton>
          {/* </div> */}
        </>
      )}</div>

    </SignupBox>
    </StBackGroundImg>
    </>
  );
}
export default Login;

const StBackGroundImg = styled.div`
    background-image: url('https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fcd452167-b0c9-4309-afff-99d4fb7ac617%2FLogin.png?id=1f3ac41f-1a8d-436e-ac99-47e51c315017&table=block&spaceId=cc4da40c-bf96-414a-a09f-a7f478e1d2c5&width=2000&userId=3f23687d-17d1-4fb1-a726-fbd8eb60ed0a&cache=v2');
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
const SignupBox = styled.form`
  width: 50%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
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
const StStartButton = styled.button`
    ${({css}) => ({...css})}
    width: 10%;
    background-color: #111827;
    border: 1px solid transparent;
    border-radius: 75rem;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    flex: 0 0 auto;
    font-family: "Inter var",ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    font-size: 0.5rem;
    font-weight: 600;
    line-height: 1.5rem;

    text-align: center;
    text-decoration: none #6B7280 solid;
    text-decoration-thickness: auto;
    transition-duration: .2s;
    transition-property: background-color,border-color,color,fill,stroke;
    transition-timing-function: cubic-bezier(.4, 0, 0.2, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width:9vw;
    height: 4vh;
    margin: 5px;
    z-index: 1;
    margin: 20px 0 20px 0;
    
    hover {
    background-color: #374151;
    }

    focus {
        box-shadow: none;
    outline: 2px solid transparent;
    outline-offset: 2px;
    }
    
    @media (min-width: 768px) {
    .button-40 {
        padding: .75rem 1.5rem;
    }
    }
    `


    const StStartButtonWhite = styled.button`
    ${({css}) => ({...css})}
    width: 10%;
    background-color: #FF83BF;
    border: 1px solid transparent;
    border-radius: 75rem;
    box-sizing: border-box; 
    color: #FFFFFF;
    cursor: pointer;
    flex: 0 0 auto;
    font-family: "Inter var",ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    font-size: 0.5rem;
    font-weight: 600;
    line-height: 1.5rem;

    text-align: center;
    text-decoration: none #6B7280 solid;
    text-decoration-thickness: auto;
    transition-duration: .2s;
    transition-property: background-color,border-color,color,fill,stroke;
    transition-timing-function: cubic-bezier(.4, 0, 0.2, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width:9vw;
    height: 4vh;
    margin: 5px;
    z-index: 1;
    margin: 20px 0 20px 0;
    
    hover {
    background-color: #374151;
    }

    focus {
        box-shadow: none;
    outline: 2px solid transparent;
    outline-offset: 2px;
    }
    
    @media (min-width: 768px) {
    .button-40 {
        padding: .75rem 1.5rem;
    }
    }
    `
