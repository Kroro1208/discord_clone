import React from 'react'
import "./ChatHeader.scss"
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PushPinIcon from '@mui/icons-material/PushPin';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';

function ChatHeader() {
    return (
        <div className='chatHeader'>
            <div className='chatHeaderLeft'>
                <h3>
                    <span className='chatHeaderHash'>#</span>
                    筋トレ
                </h3>
            </div>
            <div className='chatHeaderRight'>
                <NotificationsActiveIcon />
                <PushPinIcon />
                <Diversity3Icon />
                <div className='chatHeaderSearch'>
                    <input type="text" placeholder='検索' />
                    <SearchIcon />
                </div>
                    <SendIcon />
                    <LiveHelpIcon/>
            </div>
        </div>
    )
}

export default ChatHeader