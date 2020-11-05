
import React, {useState} from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import '../css/Sidebar.css'
import SidebarOption from './SidebarOption';
import '../css/SidebarOption.css';

import CommentIcon from '@material-ui/icons/Comment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import { useEffect } from 'react';
import db from '../firebase';

function Sidebar() {

    const [channels, setChannels] =  useState([]);

    useEffect(() => {
        //Run once when sidebar component loads
        db.collection('rooms').onSnapshot(snapshot => (
            setChannels(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    name: doc.data().name,
                }))
            )
        ))
    }, [])


    return (
        <div className="sidebar">

            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Nirmit Patel</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Niks 007
                    </h3>
                </div>
                <CreateIcon />              
            </div>
            <SidebarOption Icon={CommentIcon} title="Threads"/>
            <SidebarOption Icon={InboxIcon} title="Mentions & reactions"/>
            <SidebarOption Icon={DraftsIcon} title="Saved items"/>
            <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser"/>
            <SidebarOption Icon={PeopleAltIcon} title="People & user groups"/>
            <SidebarOption Icon={AppsIcon} title="Apps"/>
            <SidebarOption Icon={FileCopyIcon} title="File browser"/>
            <SidebarOption Icon={ExpandLessIcon} title="Show less"/>
            <SidebarOption title="YouTube"/>
            <hr />
            <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
            <hr />
            <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />

            {/*Connect to db and display all the channels */}

            {channels.map(channel => (
                <SidebarOption title={channel.name} id={channel.id}/>
            ) )}

            {/* <SidebarOptions .../> */}
            
        </div>
    )
}

export default Sidebar
