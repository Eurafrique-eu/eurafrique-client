import React, { useState } from "react";
import { withStyles } from "@mui/styles";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import LanguagesMenu from "../LanguagesMenu/LanguagesMenu";
import MemberButton from "../memberButton/memberButton";
import SidebarTabs from "./SidebarTabs/SidebarTabs";
import LinksBlock from "./LinksBlock/LinksBlock";
import { useMediaQuery } from "@mui/material";
import "./Sidebar.scss";

const styles = {
  drawer: {
    width: "80%",
    maxWidth: 400,
    flexShrink: 0,
  },
  drawerPaper: {
    width: "80%",
    maxWidth: 400,
    backgroundColor: "#f1eaeb",
  },
  flap: {
    position: "fixed",
    top: "42%",
    transform: "translateY(-50%)",
    left: "-28px",
    width: 55,
    height: 150,
    background: "linear-gradient(to left, blue 0%, blue 50%, transparent 50%, transparent 100%)",
    borderRadius: 60,
    zIndex: 3,
    transition: "transform 0.3s ease-in-out",
  },
};

const Sidebar = ({ classes }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sidebarTranslate, setSidebarTranslate] = useState(0);
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const toggleDrawer = (open) => () => {
    setIsOpen(open);
    setSidebarTranslate(open ? 0 : -400);
  };

  const handleTranslateChange = (translateX) => {
    setSidebarTranslate(translateX);
  };

  if (isSmallScreen) {
    return (
      <div>
        <SwipeableDrawer
          allowSwipeInChildren={true}
          anchor="left"
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
            setSidebarTranslate(-400);
          }}
          onOpen={() => handleTranslateChange(0)}
          onOpenCapture={() => handleTranslateChange(0)}
          ModalProps={{
            disableBackdropClick: false, // Enable closing on outside click
            disableEscapeKeyDown: false, // Enable closing on escape key press
          }}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <LanguagesMenu />
          <MemberButton />
          <SidebarTabs />
          <LinksBlock />
        </SwipeableDrawer>
        <div
          className={`${classes.flap} ${isOpen ? "open" : ""}`}
          style={{ transform: `translateX(${sidebarTranslate}px)` }}
          onClick={toggleDrawer(!isOpen)}
          role="button"
        />
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

export default withStyles(styles)(Sidebar);
