import React from 'react'
import './SidebarChannel.scss';
import { DocumentData } from 'firebase/firestore';

type Props = {
    id: string,
    channel: DocumentData
}

export default function SidebarChannel(props: Props) {
    const { id, channel } = props;
    console.log(channel);
    return (
        <div className='sidebarChannel'>
            <h4>
                <span className='sidebarChannelHash'>#</span>
                {channel.channel.channelName}
            </h4>
        </div>
    )
}
