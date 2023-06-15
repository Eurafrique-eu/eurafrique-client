import React, { useState } from "react";
import { withStyles } from "@mui/styles";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import LanguagesMenu from "../LanguagesMenu/LanguagesMenu";
import MemberButton from "../memberButton/memberButton";
import SidebarTabs from "./SidebarTabs/SidebarTabs";
import LinksBlock from "./LinksBlock/LinksBlock";
import { useMediaQuery } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./Sidebar.scss";

const styles = {
  drawer: {
    width: "80%",
    flexShrink: 0,
  },
  drawerPaper: {
    width: "80%",
    padding: "20px 20px 20px 20px",
    backgroundColor: "#f1eaeb",
  },
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100%",
    overflow: "hidden",
    transition: "width 0.3s ease-in-out",
    zIndex: 1000,
  },
  sidebarOpen: {
    width: "80%",
  },
  sidebarClosed: {
    width: 70,
  },
  flap: {
    position: "absolute",
    top: "45%",
    left: 0,
    transform: "translate(-50%, -50%)",
    width: 50,
    height: 60,
    background: "#fff",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 2px 9px rgb(23, 23, 136)",
    zIndex: 3,
    transition: "left 0.3s ease-in-out",
  },
  flapIcon: {
    fontSize: 35,
    color: "rgb(23, 23, 136)",
    marginLeft: "13px",
  },
};

const Sidebar = ({ classes }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const toggleDrawer = (open) => () => {
    setIsOpen(open);
  };

  const handleTouchStart = (event) => {
    event.stopPropagation();
  };

  const handleTouchMove = (event) => {
    event.stopPropagation();

    // Calculate the touch start and current positions
    const touchStartX = event.touches[0].clientX;
    const touchCurrentX = event.touches[0].clientX;

    // Determine the threshold for swiping to open/close the sidebar
    const swipeThreshold = 100;

    if (touchCurrentX - touchStartX > swipeThreshold) {
      // Swiped from left to right, open the sidebar
      setIsOpen(true);
    } else if (touchCurrentX - touchStartX < -swipeThreshold) {
      // Swiped from right to left, close the sidebar
      setIsOpen(false);
    }

    event.preventDefault(); // Prevent default scrolling behavior
  };

  if (isSmallScreen) {
    return (
      <div
        className={`${classes.container} ${isOpen ? classes.sidebarOpen : classes.sidebarClosed} `}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <div
          className={`${classes.flap} ${isOpen ? "open" : ""}`}
          style={{
            left: 0,
          }}
          onClick={toggleDrawer(!isOpen)}
          role="button"
        >
          {isOpen ? (
            <KeyboardArrowLeftIcon className={classes.flapIcon} />
          ) : (
            <KeyboardArrowRightIcon className={classes.flapIcon} />
          )}
        </div>
        <SwipeableDrawer
          allowSwipeInChildren={true}
          anchor="left"
          open={isOpen}
          onClose={() => setIsOpen(false)}
          onOpen={() => setIsOpen(true)}
          ModalProps={{
            disableBackdropClick: false,
            disableEscapeKeyDown: false,
          }}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.sidebarContent}>
            <LanguagesMenu />
            <MemberButton />
            <SidebarTabs />
            <LinksBlock />
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
