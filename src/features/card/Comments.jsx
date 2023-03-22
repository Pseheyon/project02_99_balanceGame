import React from 'react'
import AddCommentForm from '../comments/AddCommentForm'
import CommentsAList from '../comments/CommentsAList'

function Comments() {
  return (
    <div>
      <AddCommentForm />
      <div
        style={{
          display: 'flex',
          gap: '200px',
        }}
      >
        <CommentsAList />
      </div>
    </div>
  )
}

export default Comments

// Form Data
// json형식으로 리퀘스트 보냄
