import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { AppBar, Toolbar, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import desktopLogo from "../../assets/logo-desktop.png";
import mobileLogo from "../../assets/logo-mobile.png";
import blueShape from "../../assets/blue-svg (2).png";
import "./Navigation.scss";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderDesktopNavbar = () => {
    return (
      <Toolbar className="navbar">
        <Link to="/">
          <img className="logo" src={desktopLogo} alt="Company Logo" />
        </Link>
        <div className="tabs">
          <Link to="/FOCUS" className="tab">
            FOCUS
          </Link>
          <Link to="/AJVI-COJEA" className="tab">
            AJVI-COJEA
          </Link>
          <Link to="/POLMAR" className="tab">
            POLMAR
          </Link>
          <Link to="/EAGROPOLE" className="tab">
            EAGROPOLE
          </Link>
          <Link to="/IDEA" className="tab">
            IDEA
          </Link>
          <Link to="/BENEVOLEA" className="tab">
            BENEVOLEA
          </Link>
          <Link to="/DIGEA" className="tab">
            DIGEA
          </Link>
          <Link to="/GM-TV" className="tab">
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
          <Link to="/">
            <img src={mobileLogo} className="logo" alt="Company Logo" />
          </Link>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
            <MenuIcon />
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
            <Link to="/EAGROPOLE" className="tab">
              EAGROPOLE
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
    <AppBar position="static">{isMobile ? renderMobileNavbar() : renderDesktopNavbar()}</AppBar>
  );
};

export default Navbar;
