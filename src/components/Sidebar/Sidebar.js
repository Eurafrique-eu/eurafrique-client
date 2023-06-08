import React, { useState, useRef } from "react";
import "./Sidebar.scss";
import LanguagesMenu from "../LanguagesMenu/LanguagesMenu";
import MemberButton from "../memberButton/memberButton";
import SidebarTabs from "./SidebarTabs/SidebarTabs";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const flapRef = useRef(null);

  const handleTouchStart = (event) => {
    setStartX(event.touches[0].clientX);
    setCurrentX(event.touches[0].clientX);
  };

  const handleTouchMove = (event) => {
    setCurrentX(event.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    const differenceX = currentX - startX;

    if (differenceX > 50) {
      setIsOpen(true);
    } else if (differenceX < -50) {
      setIsOpen(false);
    }
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div
        className="flap"
        onClick={() => setIsOpen(!isOpen)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        ref={flapRef}
      ></div>
      <LanguagesMenu />
      <MemberButton />
      <SidebarTabs />
    </div>
  );
};

export default Sidebar;
