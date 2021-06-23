import React from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SpeakerNotesIcon from "@material-ui/icons/SpeakerNotes";
import SidebarOption from "./SidebarOption";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Slack Clone</h2>
          <h3>
            <FiberManualRecordIcon />
            Shubham singh
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SidebarOption Icon={SpeakerNotesIcon} title="Threads" />
    </div>
  );
}

export default Sidebar;
