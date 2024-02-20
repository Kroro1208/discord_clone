import React from 'react'
import "./ChatMessage.scss"
import { Avatar } from '@mui/material'

function ChatMessage() {
    return (
        <div className='message'>
            <Avatar />
            <div className='messageInfo'>
                <h4>Naoya
                    <span className='messageTimeStamp'>2024/02/20</span>
                </h4>
                <p>メッセージ</p>
            </div>
        </div>
    )
}

export default ChatMessage