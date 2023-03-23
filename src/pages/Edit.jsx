import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { StCancelButton, StCreateButton, StStartButton } from "../components/Button";
import { __addCardsThunk } from "../redux/modules/cardsSlice";

//  등록하면 cardlist에 card 추가 되도록.

function Edit() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [card, setCard] = useState({
        title: "",
        optionA: "",
        optionB: "",
  });
    // console.log("card =>", card)

    // const [title, setTitle] = useState("");
    // const [optionA, setOptionA] = useState("");
    // const [optionB, setOptionB] = useState("");

    // title 변경 감지하는 함수
    const handleTitleChange = (e) => {
    setCard({ ...card, title: e.target.value });
  };
    //  gameA 변경 감지하는 함수
    const handleGameAchange = (e) => {
    setCard({ ...card, optionA: e.target.value });
  };
    //  gameB 변경 감지하는 함수
    const handleGameBchange = (e) => {
    setCard({ ...card, optionB: e.target.value });
  };
    
    //추가 함수
    const onSubmitHandler = (e) => {
        e.preventDefault();
    dispatch(__addCardsThunk(card));
    setCard({ title: "", optionA: "", optionB: "" });
  };
  console.log("dispatch-> ", dispatch);

    return (
    <StBackGroundImg>
    <div>
        <StCardContainer>
          <StTitleWrapper>CREATE A GAME</StTitleWrapper>

            <StInputWrapper onSubmit={onSubmitHandler}>
                <StInputBoxPutTogether>

                <label>
                TITLE : 
                </label>

                <StInputBox
                type="text"
                placeholder="     10자 내로 제목을 지어주세요."
                minLength="1"
                maxLength="10"
                value={card.title}
                onChange={handleTitleChange}
              ></StInputBox>
                </StInputBoxPutTogether>

                <div>
                <label>optionA : </label>
                <StInputBox 
                type="text"
                placeholder="     옵션A를 기재해주세요."
                minLength="1"
                maxLength="25"
                value={card.optionA}
                onChange={handleGameAchange}
                />
                </div>
                
                <div>
                <label>optionB : </label>
                <StInputBox 
                type="text"
                placeholder="     B의견을 적어주세요(25자 이내)"
                minLength="1"
                maxLength="25"
                value={card.optionB}
                onChange={handleGameBchange}
                />
                </div>
            </StInputWrapper>

            <StButtonWrapper className="buttonWrap">
              <StCancelButton 
              onClick={() => {
                navigate("/games");
                }}
              >
              CANCEL
              </StCancelButton>
              <br />
              <StCreateButton
              onClick={() => {
                dispatch(__addCardsThunk(card));
                setCard({ title: "", optionA: "", optionB: "" });
                }}
              >
              CREATE
              </StCreateButton>
            </StButtonWrapper>

        </StCardContainer>
    </div>
    </StBackGroundImg>
  );
}

export default Edit;
const StCardContainer = styled.div`
    border: 2px hidden lightgray; 
    border-radius: 30px;
    background-color: #12d8b4;
    width: 50vw;
    height: 60vh;
`;
const StTitleWrapper = styled.h1`
    font-size: 35pt;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
    padding-top: 50px;
    width: 100%;
`
const StLabelWrapper = styled.div`
  position: absolute;
  margin: 20px 0 0 10px;
`
const StInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 14pt;
    gap: 5pt;
`;
const StInputBoxPutTogether = styled.div`
    /* border: 1pt solid black;
    border-radius: 22pt;
    background-color: transparent;
    width: 45vw;
    height: 6vh; */
    
`;
const StBackGroundImg = styled.div`
  background-image: url("https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa0c212ed-307b-4240-9215-ff8740e341fb%2Fsubmit.png?id=7663bed5-1a41-4e64-91e2-cba35e3dc074&table=block&spaceId=cc4da40c-bf96-414a-a09f-a7f478e1d2c5&width=2000&userId=3f23687d-17d1-4fb1-a726-fbd8eb60ed0a&cache=v2");
    /* background-size: cover; */
    background-position: center;
    background-repeat :no-repeat;
    background-size: 100%;
    background-position: center;
    width: 100vw;
    height: 100vh;
    display: flex;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-repeat :no-repeat;
    background-size: cover;
    background-position: center;
`;
const StInputBox = styled.input`
    border: 1pt solid black;
    border-radius: 22pt;
    background-color: transparent;
    width: 45vw;
    height: 6vh;
    ::placeholder {
    color: black;
    }
`;
const StButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center ;
  width: 100%;
`
// const InputArea = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   width: 100%;
// `;