import React from 'react'
import ReactEmoji from 'react-emoji'

import './Message.scss'

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false

  const trimmedName = name.trim().toLowerCase()

  if (user === trimmedName) {
    isSentByCurrentUser = true
  }

  return isSentByCurrentUser ? (
    <div className="message-container justify-end">
      <p className="sentText pr-10">{trimmedName}</p>
      <div className="box bg-blue">
        <p className="text color-dark">{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  ) : (
    <div className="message-container justify-start">
      <div className="box bg-light">
        <p className="text color-dark">{ReactEmoji.emojify(text)}</p>
      </div>
      <p className="sent-text pl-10 ">{user}</p>
    </div>
  )
}

export default Message
