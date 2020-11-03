import { FiberManualRecord } from '@material-ui/icons'
import React from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import '../css/Sidebar.css'
import SidebarOption from './SidebarOption';
import '../css/SidebarOption.css';
import CommentIcon from '@material-ui/icons/Comment';

function Sidebar() {
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
            <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
            <SidebarOption Icon={} title="Threads"/>
            <SidebarOption Icon={} title="Threads"/>
            <SidebarOption Icon={} title="Threads"/>
            <SidebarOption Icon={} title="Threads"/>
            <SidebarOption Icon={} title="Threads"/>

            
        </div>
    )
}

export default Sidebar
