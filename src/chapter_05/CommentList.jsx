import React from 'react'
import Comment from './Comment'

const comments = [
  {
    name: "김쿼카",
    comment: "안녕하세요, 김쿼카입니다."
  },
  {
    name: "김당근",
    comment: "당근 좋아."
  },
  {
    name: "김캐럿",
    comment: "꺅"
  }
]

function CommentList(props) {
  return (
    <div>
      {comments.map(comment => {
        return (
          <Comment name={comment.name} comment={comment.comment} />
        )
      })}
    </div>
  )
}

export default CommentList