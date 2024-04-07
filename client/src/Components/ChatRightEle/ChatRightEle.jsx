import React from 'react'
import ChatRightInfo from './ChatRightInfo/ChatRightInfo'
import ChatRightMessage from './ChatRightMessage/ChatRightMessage'

function ChatRightEle() {
  return (
    <div>
        <div className="row">
            <div className="col">
                <ChatRightInfo />
            </div>
        </div>
        <div className="row">
            <div className="col">
                <ChatRightMessage />
            </div>
        </div>
    </div>
  )
}

export default ChatRightEle