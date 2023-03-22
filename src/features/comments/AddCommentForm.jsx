import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { __addComments } from '../../redux/modules/commentASlice'

const AddCommentForm = () => {
  const dispatch = useDispatch()
  const { gameId } = useParams()

  const [comments, setComments] = useState({
    option: '',
    content: '',
  })

  const onAddCommentButtonHandler = (event) => {
    event.preventDefault()
    if (comments.content.trim() === '') {
      return alert('항목을 입력해주세요.')
    }
    dispatch(__addComments({ GameId: gameId, ...comments }))
    setComments({
      option: '',
      content: '',
    })
  }
  const handleSelectChange = (event) => {
    setComments({ ...comments, option: event.target.value })
  }

  const handleInputChange = (event) => {
    setComments({ ...comments, content: event.target.value })
  }
  // console.log('response-->')
  return (
    <>
      <form onSubmit={onAddCommentButtonHandler}>
        <div>
          <select value={comments.option} id="option" onChange={handleSelectChange}>
            <option value="">선택해주세요</option>
            <option value="A">A</option>
            <option value="B">B</option>
          </select>

          <input
            placeholder="댓글을 추가하세요. (100자 이내)"
            value={comments.content}
            name="content"
            type="text"
            onChange={handleInputChange}
            maxLength={100}
          />
          <button type="submit" onClick={onAddCommentButtonHandler}>
            등록
          </button>
        </div>
        {comments.option}
        <br />
        {comments.content}
      </form>
    </>
  )
}

export default AddCommentForm
