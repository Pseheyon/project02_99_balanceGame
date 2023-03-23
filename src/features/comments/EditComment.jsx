import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { __deleteComment, __updatedComment } from '../../redux/modules/commentASlice'
import { clearComment, globalEditModeToggle, __getComment } from '../../redux/modules/commentSlice'
import CommentsAList from './CommentsAList'

const EditComment = ({ comment }) => {
    const dispatch = useDispatch()
  // console.log('comment', comment)
    const [edit, setEdit] = useState(false)
    const [editContent, setEditContent] = useState(comment.content)

    const { isGlobalEditmode } = useSelector((state) => state.comment)

    const updates = { editContent }


    const onDeleteButtonHandler = () => {
    const result = window.confirm('삭제하시겠습니까?')
    if (result) {
       console.log('Deleting comment with commentId gameId', comment.commentId, comment.GameId)
        dispatch(__deleteComment({ commentId: comment.commentId, gameId: comment.GameId }))
    } else {
        return
    }
    }

    return (
        <>
        {edit ? (
          <CommentBox key={comment.commentId} className="box_txt_warp">
            <input
            style={{
                border: '0px',
                backgroundColor:'#FFF2F8',
                borderRadius:'10px',
            }}
              className="box_content"
              type="text"
              value={editContent}
              onChange={(event) => setEditContent(event.target.value)}
            />
  
            <div>
              <EditButton
                onClick={() => {
                  dispatch(__updatedComment({ commentId: comment.commentId,gameId: comment.GameId, content: editContent }))
                  setEdit((pre) => !pre)
                }}
              >
                완료
              </EditButton>
            </div>
          </CommentBox>
        ) : (
    
          <CommentBox key={comment.commentId} className="box_txt_warp">
            <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
            }}>
            <ContentColor fontsize="10px" color="#ff83bf">
              {comment.updatedAt.substr(0, 10)}
            </ContentColor>
            <div>
              <EditButton
              fontsize='12px'
                onClick={() => {
                  // dispatch(__updatedComment(comment.commentId, editContent));
                  setEdit(!edit)
                }}
              >
                수정
              </EditButton>
              <span
              style={{
                fontSize: '12px',
                color: '#ff83bf'
              }}>|</span>
              <EditButton
              fontsize='12px' 
              onClick={onDeleteButtonHandler} disabled={isGlobalEditmode}>
                삭제
              </EditButton>
            </div>
            </div>
            <ContentColor fontsize="16px" color="black" className="box_content">
              {updates.editContent}
            </ContentColor>
          </CommentBox>
        )}
      </>
    )
}

export default EditComment

const CommentBox = styled.div`
  width: 100%;
  height: 70px;
  border-radius: 25px;
  background-color: #ffe3f1;
  padding:4px 50px;
  margin-top: 20px;
  align-items: colum;
`
const ContentColor = styled.div`
  font-size: ${(props) => props.fontsize};
  color: ${(props) => props.color};
`

const EditButton = styled.button`
  color: #ff83bf;
  background-color: transparent;
  border: none;
  font-size: ${(props) => props.fontsize};
  `