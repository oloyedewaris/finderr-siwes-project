import React, { useState } from "react";
import { useLocation } from 'react-router-dom'
import Main from "./Drawer/Main.js";
import SlideDrawer from "./Drawer/Slidedrawer.js";

const Slider = () => {
  const location = useLocation()
  const [drawerOpen, setDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setDrawerOpen(!drawerOpen);
  };

  const backdropClickHandler = () => {
    setDrawerOpen(false);
  };

  const getBGColor = () => location.pathname === '/' ? 'transparent' : '#00322F'

  return (
    <div className='mobile_nav_container' style={{ backgroundColor: getBGColor() }}>
      <SlideDrawer close={backdropClickHandler} show={drawerOpen} />
      <Main show={drawerOpen} toggle={drawerToggleClickHandler} />
    </div>
  );
};

export default Slider;
