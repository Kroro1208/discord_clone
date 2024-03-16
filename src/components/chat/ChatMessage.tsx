import React from 'react'
import "./ChatMessage.scss"
import { Avatar } from '@mui/material'
import { Timestamp } from 'firebase/firestore';

type Props = {
    message: string;
    timestamp: Timestamp;
    user: {
        userId: string;
        image: string;
        email: string;
        displayName: string;
    };
}

function ChatMessage(props: Props) {
    const { message, timestamp, user } = props;
    // const displayDate = timestamp ? new Date(timestamp.toDate()).toLocaleString() : '日時未設定';

    return (
        <div className='message'>
            <Avatar src={user?.image} />
            <div className='messageInfo'>
                <h4>{user.displayName}
                    <span className='messageTimeStamp'>{new Date(timestamp?.toDate()).toLocaleString()}</span>
                </h4>
                <p>{message}</p>
            </div>
        </div>
    );
}

export default ChatMessage