import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { __getComment } from "../redux/modules/commentASlice";
import {
  __getCardThunk,
  clearCard,
  __updatedCardThunk,
} from "../redux/modules/editSlice";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Comments from "../features/card/Comments";
import styled from "styled-components";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import {__updatedLikesA, __updatedLikesB} from "../redux/modules/likeSlice"
import { AiTwotoneHeart } from "react-icons/ai";


const Detail = () => {
  const dispatch = useDispatch();
  const { gameId } = useParams();
  console.log("ID -> ", gameId);
  const [isEditMode, setIsEditMode] = useState(false);
  const [updatedOptionA, setUpdatedOptionA] = useState("");
  const [updatedOptionB, setUpdatedOptionB] = useState("");
  const [plusLikesA, setPlusLikesA] = useState(0);
  const [plusLikesB, setPlusLikesB] = useState(0);
  const card = useSelector((state) => state.card.card);

  useEffect(() => {
    dispatch(__getCardThunk(gameId));
    return () => dispatch(clearCard());
  }, [dispatch, gameId]);

  useEffect(() => {
    setUpdatedOptionA(card.optionA);
    setUpdatedOptionB(card.optionB);
    setPlusLikesA(card.likesA);
    setPlusLikesB(card.likesB);
  }, [card]);

  const saveUpdatedLikesA = (updatedLikesA) => {
    dispatch(
      __updatedLikesA({
        ...card,
        likesA: updatedLikesA,
      })
    );
  };
  const saveUpdatedLikesB = (updatedLikesB) => {
    dispatch(
      __updatedLikesB({
        ...card,
        likesB: updatedLikesB,
      })
    );
  };
  const onIncreaseLikesAHandler = () => {
    const updatedLikesA = plusLikesA + 1;
    setPlusLikesA(updatedLikesA);
    saveUpdatedLikesA(updatedLikesA);
  };
  const onIncreaseLikesBHandler = () => {
    const updatedLikesB = plusLikesB + 1;
    setPlusLikesB(updatedLikesB);
    saveUpdatedLikesB(updatedLikesB);
  };

  const onSaveButtonHandler = () => {
    if (updatedOptionA.trim() === "") {
      return alert("입력된 내용이 없습니다.");
    } else if (updatedOptionB.trim() === "") {
      return alert("입력된 내용이 없습니다.");
    }

    dispatch(
      __updatedCardThunk({
        ...card,
        optionA: updatedOptionA,
        optionB: updatedOptionB,

      }),
      __updatedLikesA({
        ...card,
        likesA: plusLikesA,
      }),
      __updatedLikesB({
        ...card,
        likesA: plusLikesB,
      })
    );
    setIsEditMode(false);
  };

  return (
    <div>
      <BackStyle>
        <Link to={"/games"}>
          <BsArrowLeftCircleFill
            style={{
              color: "#FF6DB4",
              fontSize: "15px",
            }}
          />
        </Link>
        <div>
          {isEditMode ? (
            <>
              <Textarea
                name="body"
                rows="10"
                maxLength={200}
                value={updatedOptionA}
                onChange={(event) => {
                  setUpdatedOptionA(event.target.value);
                }}
              />
              <Textarea
                name="body"
                rows="10"
                maxLength={200}
                value={updatedOptionB}
                onChange={(event) => {
                  setUpdatedOptionB(event.target.value);
                }}
              />
            </>
          ) : (
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <ContentBox>
                <OptionLikes>
                  <div
                    style={{
                      fontSize: "20px",
                      color: "#ff6db4",
                    }}
                  >
                    option A
                  </div>
                  <div
                    style={{
                      display: "flex",
                    }}
                  >
                    <div
                      style={{

                        fontSize: "20px",
                        color: "white",
                      }}
                    >
                      {card.likesA}
                    </div>
                    <AiTwotoneHeart
                      style={{
                        cursor: "pointer",
                        fontSize: "20px",
                        color: "white",
                        marginLeft: "4px",
                      }}
                      onClick={onIncreaseLikesAHandler}
                    />
                  </div>
                </OptionLikes>

                <div
                  style={{
                    
                    marginTop:'25px',
                    display: 'flex',
                    alignContent: 'center',
                    fontSize: '26px',
                  }}>{card.optionA}</div>
              </ContentBox>
              <div
              style={{
                marginTop: '80px'
,                fontSize: '32px',
                fontWeight: '900',

              }}>VS</div>

              <ContentBox>
                <OptionLikes>
                  <div
                    style={{
                      fontSize: "20px",
                      color: "#ff6db4",
                    }}
                  >
                    option B
                  </div>
                  <div
                    style={{
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        marginLeft:'4px',
                        fontSize: "20px",
                        color: "white",
                      }}
                    >
                      {card.likesB}
                    </div>
                    <AiTwotoneHeart
                      style={{
                        cursor: "pointer",
                        fontSize: "20px",
                        color: "white",
                        marginLeft: "4px",
                      }}
                      onClick={onIncreaseLikesAHandler}
                    />
                  </div>
                </OptionLikes>
                <div
                style={{
                  marginTop:'25px',
                  display: 'flex',
                  alignContent: 'center',
                  fontSize: '26px',
                }}>{card.optionB}</div>
              </ContentBox>
            </div>
          )}

          <div>
            {isEditMode ? (
              <Button
              style={{
                display:'flex',
                margin: 'auto',
              }} 
              onClick={onSaveButtonHandler}>SAVE</Button>
            ) : (
              <Button
              style={{
                display:'flex',
                margin: 'auto',
              }} 
                onClick={() => {
                  setIsEditMode(true);
                }}
              >
                EDIT
              </Button>
            )}
          </div>
        </div>
        {!isEditMode && <Comments />}
      </BackStyle>
    </div>
  );
  
};

export default Detail;
const StGamesWrapper = styled.div`
height: 100vh
`
const BackStyle = styled.div`
  padding-top : 100px;
  background-color: #ffafd6;
`;
const ContentBox = styled.div`

  width: 25%;
  height: 170px;
  padding: 10px 20px;
`;
const OptionLikes = styled.div`
  display: flex;
  justify-content: space-between;

`;

const Textarea = styled.textarea`
  width: 50%;
  border: 1px solid #eee;
  padding: 12px;
  font-size: 14px;
  color: #ffe3f1;
`;
const Button = styled.button`
  border-radius: 40px;
  border: 0px;
  color: #ff6db4;
  background-color: #ffe3f1;
  padding: 5px 20px;
`;
