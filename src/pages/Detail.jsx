import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { __getComment } from '../redux/modules/commentASlice'
import { __getCardThunk, clearCard, __updatedCardThunk } from '../redux/modules/editSlice'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Comments from '../features/card/Comments'
import styled from 'styled-components'

const Detail = () => {
  const dispatch = useDispatch()
  const { gameId } = useParams()

  const [isEditMode, setIsEditMode] = useState(false)
  const [updatedOptionA, setUpdatedOptionA] = useState('')
  const [updatedOptionB, setUpdatedOptionB] = useState('')
  const [plusLikesA, setPlusLikesA] = useState(0)
  const [plusLikesB, setPlusLikesB] = useState(0)
  const card = useSelector((state) => state.card.card)

  useEffect(() => {
    dispatch(__getCardThunk(gameId))
    return () => dispatch(clearCard())
  }, [dispatch, gameId])

  useEffect(() => {
    setUpdatedOptionA(card.optionA)
    setUpdatedOptionB(card.optionB)
    setPlusLikesA(card.likesA)
    setPlusLikesB(card.likesB)
  }, [card])

  const saveUpdatedLikesA = (updatedLikesA) => {
    dispatch(
      __updatedCardThunk({
        ...card,
        likesA: updatedLikesA,
      })
    )
  }
  const saveUpdatedLikesB = (updatedLikesB) => {
    dispatch(
      __updatedCardThunk({
        ...card,
        likesB: updatedLikesB,
      })
    )
  }
  const onIncreaseLikesAHandler = () => {
    const updatedLikesA = plusLikesA + 1
    setPlusLikesA(updatedLikesA)
    saveUpdatedLikesA(updatedLikesA)
  }
  const onIncreaseLikesBHandler = () => {
    const updatedLikesB = plusLikesB + 1
    setPlusLikesB(updatedLikesB)
    saveUpdatedLikesB(updatedLikesB)
  }

  const onSaveButtonHandler = () => {
    if (updatedOptionA.trim() === '') {
      return alert('입력된 내용이 없습니다.')
    } else if (updatedOptionB.trim() === '') {
      return alert('입력된 내용이 없습니다.')
    }

    dispatch(
      __updatedCardThunk({
        ...card,
        optionA: updatedOptionA,
        optionB: updatedOptionB,
        likesA: plusLikesA,
        likesB: plusLikesB,
      })
    )
    setIsEditMode(false)
  }

  return (
    <>
      <BackStyle>
        <div>{card.title}</div>
        <Link to={'/games'}>Go</Link>
        <div>
          {isEditMode ? (
            <>
              <Textarea
                name="body"
                rows="10"
                maxLength={200}
                value={updatedOptionA}
                onChange={(event) => {
                  setUpdatedOptionA(event.target.value)
                }}
              />
              <Textarea
                name="body"
                rows="10"
                maxLength={200}
                value={updatedOptionB}
                onChange={(event) => {
                  setUpdatedOptionB(event.target.value)
                }}
              />
            </>
          ) : (
            <div
              style={{
                display: 'flex',
                gap: '200px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  gap: '20px',
                }}
              >
                <div>{card.optionA}</div>
                <div>{card.likesA}</div>
                <button onClick={onIncreaseLikesAHandler}>+</button>
              </div>
              <div
                style={{
                  display: 'flex',
                  gap: '20px',
                }}
              >
                <div>{card.optionB}</div>
                <div>{card.likesB}</div>
                <button onClick={onIncreaseLikesBHandler}>+</button>
              </div>
            </div>
          )}

          <div>
            {isEditMode ? (
              <button onClick={onSaveButtonHandler}>저장</button>
            ) : (
              <button
                onClick={() => {
                  setIsEditMode(true)
                }}
              >
                수정
              </button>
            )}
          </div>
        </div>
        {!isEditMode && <Comments />}
      </BackStyle>
    </>
  )
}

export default Detail

const BackStyle = styled.div`
  background-color: #ffafd6;
`

const Textarea = styled.textarea`
  width: 50%;
  border: 1px solid #eee;
  padding: 12px;
  font-size: 14px;
`
