import React from 'react'
import './Chat.scss';
import ChatHeader from './ChatHeader';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import ChatMessage from './ChatMessage';

function Chat() {
    return (
        <div className='chat'>
            {/* chatHeader */}
            <ChatHeader />
            {/* chatMessage */}
            <div className='chatMessage'>
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
            </div>
            {/* chatInput */}
            <div className='chatInput'>
                <AddCircleOutlineIcon />
                <form>
                    <input type="text" placeholder='#筋トレへメッセージを送信' />
                    <button type='submit' className='chatInputButton'>
                        送信
                    </button>
                </form>
                <div className='chatInputIcons'>
                    <CardGiftcardIcon />
                    <GifIcon />
                    <SentimentVerySatisfiedIcon />
                </div>
            </div>
        </div>
    )
}

export default Chat