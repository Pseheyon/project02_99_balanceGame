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
        <FloatingButton
        onClick={() => {
        navigate("/game/submit");
        }}
        >게임 등록하기
        </FloatingButton>
        <div>
        {/* 카드리스트 여기서는 axios get으로 카드리스트(지금은dbjson)가져와서 거기다 맵으로 div에 뿌려준다 */}
        </div>
{/* card 하나하나 및 카드 클릭시 Detail page로 이동*/}
        <StCardWrapper>
            {
                cards?.map((card) => {
                    return (
                        <StCardList 
                        onClick={() => {
                            navigate(`/games/${card.gameId}`);
                        }}
                        key={card.gameId}>
                            <StCardTitle>
                            <div>{card.title}</div>
                            </StCardTitle>
                            
                            <br />
                            <StCardContent>
                            {card.optionA} VS {card.optionB}
                            {/* {card.gameId} */}
                            </StCardContent>
                            
                            
        </StCardList>
        );
        })}
        </StCardWrapper>
        

    </StBackGroundImg>

    
    )
}
export default CardList;

const StBackGroundImg = styled.div`
    background-image: url('https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1a08c564-2757-4fe9-84f0-f78d551581bd%2Fcardlist.png?id=bc056553-170e-4f5e-bc2b-9bcf92027bed&table=block&spaceId=cc4da40c-bf96-414a-a09f-a7f478e1d2c5&width=2000&userId=3f23687d-17d1-4fb1-a726-fbd8eb60ed0a&cache=v2');
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
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
const StCardList = styled.div`
    padding: 1% 10%;
    justify-content: center;
    align-items: center;
    width: 30.6%;
    height: 20%;
    background-color: #5753FD;
    border: 0.5px groove black;
    border-radius: 20px;
    color: white;
    margin: 10px;
    cursor: pointer;
    overflow: hidden;
    box-sizing: border-box;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 1.3);
    &:hover {
        background-color: #FF83A1;
    }
    
`;
const StCardWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    display:flex;
    gap : 1%;
    flex-wrap : wrap;
    overflow: hidden;
    box-sizing: border-box;
    border : 1px solid transparent;
`
const FloatingButton = styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    /* background-color: #007bff; */
    background-color: #000000;
    color: white;
    font-size: 24px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    /* transform: rotate(45deg); */
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
`;
const StCardTitle = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
`
const StCardContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`