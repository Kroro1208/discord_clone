import React, { useEffect, useState } from 'react'
import './Sidebar.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import SettingsVoiceIcon from '@mui/icons-material/SettingsVoice';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';
import { auth, db } from '../../firebase';
import { useAppSelector } from '../../app/hooks';
import useCollection from '../../hooks/useCollection';
import { DocumentData, addDoc, collection } from 'firebase/firestore';


function Sidebar() {
    const user = useAppSelector((state) => state.user);
    const { documents: channels } = useCollection("channels"); // "channels"はFirebaseのコレクション名
    const addChannel = async () => {
        let channelName: string | null = prompt("新規チャンネルを作成します");
        if (channelName) {
            await addDoc(collection(db, "channels"), {
                channelName: channelName
            });
        }
    }


    return (
        <div className='sidebar'>
            {/* sidebarLeft */}
            <div className='sidebarLeft'>
                <div className='serverIcon'>
                    <img src="./logo192.png" alt="" />
                </div>
                <div className='serverIcon'>
                    <img src="./logo192.png" alt="" />
                </div>
            </div>
            {/* sidebarRight */}
            <div className='sidebarRight'>
                <div className='sidebarTop'>
                    <h3>Discord</h3>
                    <ExpandMoreIcon />
                </div>
                {/* sideBarChannels */}
                <div className='sidebarChannels'>
                    <div className='sidebarChannelsHeader'>
                        <div className="sidebarHeader">
                            <ExpandMoreIcon />
                            <h4>エンジニアチャンネル</h4>
                        </div>
                        <AddIcon className='sidebarAddIcon' onClick={() => addChannel()} />
                    </div>
                    <div className="sidebarChannelList">
                        {channels.map((channel) => (
                            <SidebarChannel channel={channel} id={channel.id} key={channel.id} />
                        ))}
                    </div>
                    <div className='sidebarFooter'>
                        <div className='sidebarAccount'>
                            <img src={user?.image} alt="" onClick={() => auth.signOut()} />
                            <div className='accountName'>
                                <h4>{user?.displayName}</h4>
                                <span>#{user?.userId.substring(0, 8)}</span>
                            </div>
                        </div>
                        <div className='sidebarVoice'>
                            <SettingsVoiceIcon />
                            <HeadphonesIcon />
                            <SettingsIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar