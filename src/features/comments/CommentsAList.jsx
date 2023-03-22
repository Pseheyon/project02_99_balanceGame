//111111111
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { __getComments } from '../../redux/modules/commentASlice'
import { __updatedComment } from '../../redux/modules/commentASlice'
import EditComment from './EditComment'

const CommentsAList = () => {
  const dispatch = useDispatch()
  const { gameId } = useParams()

  const { isLoading, error, comments } = useSelector((state) => {
    return state.comments
  })
  // const [edit, setEdit] = useState(false)
  // const [editTitle, setEditTitle] = useState()
  //useEffect e다시 공부하기   unmount 때 실현을 시키기 위해서  redux 공부하기  전달할 값이 없었다.
  //disPatch 에 빈 값만 넣어서 식을 적는 것은 범죄 하면 안 된다 .
  // return () => dispatch()
  useEffect(() => {
    dispatch(__getComments(gameId))
  }, [dispatch, gameId])

  const clickisEdit = (commentId, updatedCommentContent) => {
    dispatch(__updatedComment(commentId, updatedCommentContent))
    console.log(commentId)
  }
  if (isLoading) {
    return <div>로딩중.....ㅎㅎ</div>
  }
  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <div
      style={{
        display: 'flex',
        gap: '30px',
      }}
    >
      {/* <div>
        <strong>option A</strong>
        {comments &&
          comments
            .filter((comment) => comment.option == 'A')
            .map((comment) => (
              <div
                style={{
                  display: 'flex',
                  gap: '7px',
                }}
                key={comment.commentId}
              >
                <div>{comment.content}</div>
                <div>{comment.updatedAt.substr(0, 10)}</div>
                <button>수정</button>
                <button>삭제</button>
              </div>
            ))}
      </div>
      <div>
        <strong>option B</strong>
        {comments &&
          comments
            .filter((comment) => comment.option == 'B')
            .map((comment) => (
              <div
                style={{
                  display: 'flex',
                  gap: '7px',
                }}
                key={comment.commentId}
              >
                <div>{comment.content}</div>
                <div>{comment.updatedAt.substr(0, 10)}</div>
                <button>수정</button>
                <button>삭제</button>
              </div>
            ))}
      </div> */}
      <div>
        {comments &&
          comments
            .filter((comment) => comment.option == 'A')
            .map((comment) => (
              <EditComment
                key={comment.commentId}
                comment={comment}
                // onClick={() => clickisEdit(comment.commentId, __updatedComment)}
              />
            ))}
      </div>
      <div>
        {comments &&
          comments
            .filter((comment) => comment.option == 'B')
            .map((comment) => (
              <EditComment
                key={comment.commentId}
                comment={comment}
                onClick={() => clickisEdit(comment.commentId, __updatedComment)}
              />
            ))}
      </div>
    </div>
  )
}

export default CommentsAList

const Textarea = styled.textarea`
  width: 80%;
  border: 1px solid #eee;
  padding: 12px;
  font-size: 14px;
`

//222222222
// import React, { useState, useEffect } from 'react'
// import styled from 'styled-components'
// import { useParams } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { __getCommentByCommendId } from '../../redux/modules/commentASlice'
// import Comment from './Comment'
// import AddCommentForm from './AddCommentForm'

// const Comments = () => {
//   const { commentId } = useParams()
//   const dispatch = useDispatch()
//   const [isShow, setisShow] = useState(false)
//   const data = useSelector((state) => state.comments.comments)

//   useEffect(() => {
//     if (isShow) {
//       dispatch(__getCommentByCommendId(commentId))
//     }
//   }, [dispatch, commentId, isShow])

//   return (
//     <StContainer isShow={isShow}>
//       <StToggleContainer
//         onClick={() => {
//           setisShow((pre) => !pre)
//         }}
//       >
//         <div>{isShow ? '눌러서 댓글내리기' : '눌러서 댓글보기'}</div>
//       </StToggleContainer>
//       <AddCommentForm />
//       <StCommentList>
//         {data?.map((comment) => (
//           <Comment key={comment.commentId} comment={comment} />
//         ))}
//       </StCommentList>
//     </StContainer>
//   )
// }

// export default Comments

// const StContainer = styled.div`
//   height: ${({ isShow }) => (isShow ? '400px' : '50px')};
//   position: absolute;
//   bottom: 0px;
//   left: 0px;
//   width: 100%;
//   background-color: #fff;
//   transition: height 400ms ease-in-out;
// `

// const StToggleContainer = styled.div`
//   height: 50px;
//   padding: 0 12px;
//   border-top: 1px solid #eee;
// `

// const StCommentList = styled.div`
//   height: 350px;
//   overflow: scroll;
// `
