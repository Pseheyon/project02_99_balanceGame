import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { __getCardsThunk } from "../redux/modules/cardsSlice";

// card 클릭시 Detail page로 가도록 기능구현 (games/:gameId)(Dynamic Route with useParam)
// @@gameID가 정확히 뭔지 확인@@
// 배경사진등록(submit page에서 등록할 수 있도록)

function CardList() {
  // const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  console.log("dispatch => ", dispatch);
  const { cards, error } = useSelector((state) => state.cardsSlice);
  console.log("state => ", cards);
  useEffect(() => {
    dispatch(__getCardsThunk());
  }, [dispatch]);
  console.log("dispatch get ->", dispatch);

  return (
    <StBackGroundImg>
      {/* 게임 등록하기 버튼 */}
      <button
        onClick={() => {
          navigate("/game/submit");
        }}
      >
        게임 등록하기
      </button>
      <div>
        {/* 카드리스트 여기서는 axios get으로 카드리스트(지금은dbjson)가져와서 거기다 맵으로 div에 뿌려준다 */}
      </div>
      {/* card 하나하나 및 카드 클릭시 Detail page로 이동*/}
      <div>
        {cards?.map((card) => {
          return (
            <StCardList
              onClick={() => {
                navigate(`/games/${card.gameId}`);
              }}
              key={card.gameId}
            >
              {card.title} <br />
              {card.optionA} vs {card.optionB}
              {card.gameId}
            </StCardList>
          );
        })}
      </div>
    </StBackGroundImg>
  );
}
export default CardList;

const StCardList = styled.div`
  width: 200px;
  height: 100px;
  background-color: green;
  margin: 10px;
  &:focus-within {
    box-shadow: 0 0 0 1px #292727;
  }
  cursor: pointer;
`;
const StBackGroundImg = styled.div`
  background-image: url("https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1a08c564-2757-4fe9-84f0-f78d551581bd%2Fcardlist.png?id=bc056553-170e-4f5e-bc2b-9bcf92027bed&table=block&spaceId=cc4da40c-bf96-414a-a09f-a7f478e1d2c5&width=2000&userId=3f23687d-17d1-4fb1-a726-fbd8eb60ed0a&cache=v2");
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
