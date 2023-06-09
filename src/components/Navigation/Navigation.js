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
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
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
      <Toolbar className="navbar" style={{ position: "sticky" }}>
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
        <Toolbar className="navbar" style={{ position: "fixed" }}>
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
          <div className="spacing">&nbsp;</div>
          <MenuItem onClick={handleClose} style={{ paddingLeft: "60px", paddingRight: "60px" }}>
            <Link
              to="/FOCUS"
              className="tab"
              style={{ color: "$primary-color", fontWeight: "600", textUnderlineOffset: "3px" }}
            >
              {t("FOCUS")}
            </Link>
          </MenuItem>
          <div className="spacing">&nbsp;</div>
          <MenuItem onClick={handleClose} style={{ paddingLeft: "60px", paddingRight: "60px" }}>
            <Link
              to="/AJVI-COJEA"
              className="tab"
              style={{ color: "$primary-color", fontWeight: "600", textUnderlineOffset: "3px" }}
            >
              AJVI-COJEA
            </Link>
          </MenuItem>
          <div className="spacing">&nbsp;</div>
          <MenuItem onClick={handleClose} style={{ paddingLeft: "60px", paddingRight: "60px" }}>
            <Link
              to="/POLMAR"
              className="tab"
              style={{ color: "$primary-color", fontWeight: "600", textUnderlineOffset: "3px" }}
            >
              POLMAR
            </Link>
          </MenuItem>
          <div className="spacing">&nbsp;</div>
          <MenuItem onClick={handleClose} style={{ paddingLeft: "60px", paddingRight: "60px" }}>
            <Link
              to="/AGROPOLEA"
              className="tab"
              style={{ color: "$primary-color", fontWeight: "600", textUnderlineOffset: "3px" }}
            >
              AGROPOLEA
            </Link>
          </MenuItem>
          <div className="spacing">&nbsp;</div>
          <MenuItem onClick={handleClose} style={{ paddingLeft: "60px", paddingRight: "60px" }}>
            <Link
              to="/IDEA"
              className="tab"
              style={{ color: "$primary-color", fontWeight: "600", textUnderlineOffset: "3px" }}
            >
              IDEA
            </Link>
          </MenuItem>
          <div className="spacing">&nbsp;</div>
          <MenuItem onClick={handleClose} style={{ paddingLeft: "60px", paddingRight: "60px" }}>
            <Link
              to="/BENEVOLEA"
              className="tab"
              style={{ color: "$primary-color", fontWeight: "600", textUnderlineOffset: "3px" }}
            >
              BENEVOLEA
            </Link>
          </MenuItem>
          <div className="spacing">&nbsp;</div>
          <MenuItem onClick={handleClose} style={{ paddingLeft: "60px", paddingRight: "60px" }}>
            <Link
              to="/DIGEA"
              className="tab"
              style={{ color: "$primary-color", fontWeight: "600", textUnderlineOffset: "3px" }}
            >
              DIGEA
            </Link>
          </MenuItem>
          <div className="spacing">&nbsp;</div>
          <MenuItem onClick={handleClose} style={{ paddingLeft: "60px", paddingRight: "60px" }}>
            <Link
              to="/GM-TV"
              className="tab"
              style={{ color: "$primary-color", fontWeight: "600", textUnderlineOffset: "3px" }}
            >
              GM TV
            </Link>
          </MenuItem>
          <div className="spacing">&nbsp;</div>
        </Menu>
      </>
    );
  };

  return (
    <AppBar position="fixed">
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
