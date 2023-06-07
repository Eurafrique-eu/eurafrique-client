import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { AppBar, Toolbar, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import desktopLogo from "../../assets/logo-desktop.png";
import blueShape from "../../assets/blue-svg (2).png";
import { useTranslation } from "react-i18next";
import "./Navigation.scss";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeTab, setActiveTab] = useState("FOCUS");
  const { t } = useTranslation();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderDesktopNavbar = () => {
    return (
      <Toolbar className="navbar">
        <Link to="/FOCUS">
          <img className="logo" src={desktopLogo} alt="Company Logo" />
        </Link>
        <div className="tabs">
          <Link
            to="/FOCUS"
            className={`tab ${activeTab === "FOCUS" ? "active" : ""}`}
            onClick={() => handleTabClick("FOCUS")}
          >
            {t("FOCUS")}
          </Link>
          <Link
            to="/AJVI-COJEA"
            className={`tab ${activeTab === "AJVI-COJEA" ? "active" : ""}`}
            onClick={() => handleTabClick("AJVI-COJEA")}
          >
            AJVI-COJEA
          </Link>
          <Link
            to="/POLMAR"
            className={`tab ${activeTab === "POLMAR" ? "active" : ""}`}
            onClick={() => handleTabClick("POLMAR")}
          >
            POLMAR
          </Link>
          <Link
            to="/AGROPOLEA"
            className={`tab ${activeTab === "AGROPOLEA" ? "active" : ""}`}
            onClick={() => handleTabClick("AGROPOLEA")}
          >
            AGROPOLEA
          </Link>
          <Link
            to="/IDEA"
            className={`tab ${activeTab === "IDEA" ? "active" : ""}`}
            onClick={() => handleTabClick("IDEA")}
          >
            IDEA
          </Link>
          <Link
            to="/BENEVOLEA"
            className={`tab ${activeTab === "BENEVOLEA" ? "active" : ""}`}
            onClick={() => handleTabClick("BENEVOLEA")}
          >
            BENEVOLEA
          </Link>
          <Link
            to="/DIGEA"
            className={`tab ${activeTab === "DIGEA" ? "active" : ""}`}
            onClick={() => handleTabClick("DIGEA")}
          >
            DIGEA
          </Link>
          <Link
            to="/GM-TV"
            className={`tab ${activeTab === "GM-TV" ? "active" : ""}`}
            onClick={() => handleTabClick("GM-TV")}
          >
            GM TV
          </Link>
        </div>
        <img className="blue-shape" src={blueShape} alt="Blue Shape" />
      </Toolbar>
    );
  };

  const renderMobileNavbar = () => {
    return (
      <>
        <Toolbar className="navbar">
          <Link to="/FOCUS">
            <img src={desktopLogo} className="logo" alt="Company Logo" />
          </Link>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
            {Boolean(anchorEl) ? (
              <CloseIcon className="menu-icon" />
            ) : (
              <MenuIcon className="menu-icon" />
            )}
          </IconButton>
        </Toolbar>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem onClick={handleClose}>
            <Link to="/FOCUS" className="tab">
              FOCUS
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/AJVI-COJEA" className="tab">
              AJVI-COJEA
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/POLMAR" className="tab">
              POLMAR
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/AGROPOLEA" className="tab">
              AGROPOLEA
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/IDEA" className="tab">
              IDEA
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/BENEVOLEA" className="tab">
              BENEVOLEA
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/DIGEA" className="tab">
              DIGEA
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/GM-TV" className="tab">
              GM TV
            </Link>
          </MenuItem>
        </Menu>
      </>
    );
  };

  return (
    <AppBar position="static">
      {isMobile ? (
        <div className={Boolean(anchorEl) ? "mobile-menu-open" : "mobile-menu-closed"}>
          {renderMobileNavbar()}
        </div>
      ) : (
        renderDesktopNavbar()
      )}
    </AppBar>
  );
};

export default Navbar;
