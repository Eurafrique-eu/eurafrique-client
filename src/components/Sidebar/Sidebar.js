import React, { useState } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import LanguagesMenu from "../LanguagesMenu/LanguagesMenu";
import MemberButton from "../memberButton/memberButton";
import SidebarTabs from "./SidebarTabs/SidebarTabs";
import LinksBlock from "./LinksBlock/LinksBlock";
import { useMediaQuery } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./Sidebar.scss";

const Sidebar = ({ classes }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 991px)");

  const toggleDrawer = (open) => {
    setIsOpen(open);
  };

  const handleSwipeRight = (event) => {
    event.preventDefault();
    setIsOpen(true);
  };

  const handleSwipeLeft = (event) => {
    event.preventDefault();
    setIsOpen(false);
  };

  if (isSmallScreen) {
    return (
      <div className="container">
        <div
          className={`flap ${isOpen ? "open" : ""}`}
          onClick={() => toggleDrawer(!isOpen)}
          role="button"
        >
          {isOpen ? (
            <KeyboardArrowLeftIcon className="flapIcon" />
          ) : (
            <KeyboardArrowRightIcon className="flapIcon" />
          )}
        </div>
        <useSwipeable onSwipedRight={handleSwipeRight} onSwipedLeft={handleSwipeLeft}>
          <SwipeableDrawer
            allowSwipeInChildren={true}
            anchor="right"
            open={isOpen}
            onClose={() => setIsOpen(false)}
            onOpen={() => setIsOpen(true)}
            ModalProps={{
              disableBackdropClick: false,
              disableEscapeKeyDown: false,
            }}
            classes={{
              paper: "drawerPaper",
            }}
          >
            <div className="sidebarContent">
              <LanguagesMenu />
              <MemberButton />
              <SidebarTabs />
              <LinksBlock />
            </div>
          </SwipeableDrawer>
        </useSwipeable>
      </div>
    );
  }

  return (
    <div className="sidebar">
      <LanguagesMenu />
      <MemberButton />
      <SidebarTabs />
      <LinksBlock />
    </div>
  );
};

export default Sidebar;
