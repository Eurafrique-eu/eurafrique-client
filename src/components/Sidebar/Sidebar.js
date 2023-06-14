import React, { useState } from "react";
import { withStyles } from "@mui/styles";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import LanguagesMenu from "../LanguagesMenu/LanguagesMenu";
import MemberButton from "../memberButton/memberButton";
import SidebarTabs from "./SidebarTabs/SidebarTabs";
import LinksBlock from "./LinksBlock/LinksBlock";
import { useMediaQuery } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
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
  container: {
    position: "relative",
  },
  flap: {
    position: "absolute",
    top: "20%",
    left: 0,
    transform: "translate(-50%, -50%)",
    width: 55,
    height: 75,
    background: "linear-gradient(to left, blue 0%, blue 50%, transparent 50%, transparent 100%)",
    borderRadius: 60,
    zIndex: 3,
    transition: "transform 0.3s ease-in-out",
  },
  sidebar: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100%",
    width: "80%",
    maxWidth: 400,
    backgroundColor: "#f1eaeb",
    transition: "transform 0.3s ease-in-out",
    zIndex: 2,
  },
  sidebarOpen: {
    transform: "translateX(0)",
  },
  sidebarClosed: {
    transform: "translateX(-100%)",
  },
  arrowIcon: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: 40,
    color: "#fff",
    cursor: "pointer",
  },
  leftArrowIcon: {
    left: -20,
  },
  rightArrowIcon: {
    right: -20,
  },
};

const Sidebar = ({ classes }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  if (isSmallScreen) {
    return (
      <div className={classes.container}>
        <div
          className={classes.flap}
          style={{
            transform: `translate(-50%, -50%) ${isOpen ? "scale(0)" : "scale(1)"}`,
          }}
          onClick={toggleDrawer}
          role="button"
        />
        <SwipeableDrawer
          anchor="left"
          open={isOpen}
          onClose={toggleDrawer}
          onOpen={toggleDrawer}
          classes={{
            paper: `${classes.sidebar} ${isOpen ? classes.sidebarOpen : classes.sidebarClosed}`,
          }}
        >
          <div className={`${classes.arrowIcon} ${classes.leftArrowIcon}`} onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </div>
          <LanguagesMenu />
          <MemberButton />
          <SidebarTabs />
          <LinksBlock />
          <div className={`${classes.arrowIcon} ${classes.rightArrowIcon}`} onClick={toggleDrawer}>
            <ChevronRightIcon />
          </div>
        </SwipeableDrawer>
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
