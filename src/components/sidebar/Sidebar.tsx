import React from 'react'
import './Sidebar.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import SettingsVoiceIcon from '@mui/icons-material/SettingsVoice';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';


function Sidebar() {
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
                        <AddIcon className='sidebarAddIcon' />
                    </div>
                    <div className="sidebarChannelList">
                        <SidebarChannel />
                        <SidebarChannel />
                        <SidebarChannel />
                        <SidebarChannel />
                        <SidebarChannel />
                    </div>
                    <div className='sidebarFooter'>
                        <div className='sidebarAccount'>
                            <img src="logo192.png" alt="" />
                            <div className='accountName'>
                                <h4>Naoya</h4>
                                <span>#257896</span>
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