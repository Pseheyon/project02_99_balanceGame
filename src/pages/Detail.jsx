import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { __getCardThunk, clearCard, __updatedCardThunk } from '../redux/modules/editSlice'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import AddCommentForm from '../features/comments/AddCommentForm'
import styled from 'styled-components'

const Detail = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const [isEditMode, setIsEditMode] = useState(false)
  const [updatedOptionA, setUpdatedOptionA] = useState('')
  const [updatedOptionB, setUpdatedOptionB] = useState('')
  const card = useSelector((state) => state.card.card)

  useEffect(() => {
    dispatch(__getCardThunk(id))
    return () => dispatch(clearCard())
  }, [dispatch, id])

  useEffect(() => {
    setUpdatedOptionA(card.optionA)
    setUpdatedOptionB(card.optionB)
  }, [card])

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
      })
    )
    setIsEditMode(false)
  }

  return (
    <>
      <div>
        <div>{card.title}</div>
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
            <>
              <div>{card.optionA}</div>
              <div>{card.optionB}</div>
            </>
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
        {!isEditMode && <AddCommentForm />}
      </div>
    </>
  )
}

export default Detail

const Textarea = styled.textarea`
  width: 80%;
  border: 1px solid #eee;
  padding: 12px;
  font-size: 14px;
`

// import React, { useState } from 'react'
// import { useSelector } from 'react-redux'
// import { __getCardThunk, clearCard, __updatedCardThunk } from '../redux/modules/editSlice'
// import { useParams } from 'react-router-dom'
// import { useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import AddCommentForm from '../features/comments/AddCommentForm'
// import styled from 'styled-components'

// const Detail = () => {
//   const dispatch = useDispatch()
//   const { id } = useParams()

//   const [isEditMode, setIsEditMode] = useState(false)
//   const [updatedOptionA, setUpdatedOptionA] = useState('')
//   const [updatedOptionB, setUpdatedOptionB] = useState('')
//   const card = useSelector((state) => state.card.card)

//   useEffect(() => {
//     dispatch(__getCardThunk(id))
//     return () => dispatch(clearCard())
//   }, [dispatch, id])

//   useEffect(() => {
//     setUpdatedOptionA(card.optionA)
//     setUpdatedOptionB(card.optionB)
//   }, [card])

//   const onSaveButtonHandler = () => {
//     if (updatedOptionA.trim() === '') {
//       return alert('입력된 내용이 없습니다.')
//     } else if (updatedOptionB.trim() === '') {
//       return alert('입력된 내용이 없습니다.')
//     }

//     dispatch(
//       __updatedCardThunk({
//         ...card,
//         optionA: updatedOptionA,
//         optionB: updatedOptionB,
//       })
//     )
//     setIsEditMode(false)
//   }
//   const [number, setNumber] = useState(0)
//   // const addNumButton = () => {
//   //   setNumber(number.number + 1)
//   // }

//   return (
//     <>
//       <div>
//         <div
//           style={{
//             border: '1px dotted hotpink',
//           }}
//         >
//           <div>{card.title}</div>
//         </div>
//         <div
//           style={{
//             height: '150px',
//             width: '1200px',
//             border: '1px dotted babypink',
//             display: 'flex',
//             justifyContent: 'space-evenly',
//           }}
//         >
//           <div
//             style={{
//               height: '150px',
//               width: '600px',
//               border: '2px dotted skyblue',
//             }}
//           >
//             {card.optionA}
//             <button
//               onClick={() => {
//                 setNumber(number + 1)
//               }}
//             >
//               Like
//             </button>
//           </div>
//           <div
//             style={{
//               height: '150px',
//               width: '600px',
//               border: '2px dotted skyblue',
//             }}
//           >
//             {card.optionB}
//             <button
//               onClick={() => {
//                 setNumber(number + 1)
//               }}
//             >
//               Like
//             </button>
//           </div>
//         </div>
//         <div> Num : {number}</div>
//       </div>
//     </>
//   )
// }

// export default Detail

// const Textarea = styled.textarea`
//   width: 80%;
//   border: 1px solid #eee;
//   padding: 12px;
//   font-size: 14px;
// `
