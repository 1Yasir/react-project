import React, { useState } from 'react';
import { FaSearch, FaChevronRight, FaChevronDown } from 'react-icons/fa';
import "./sidebar.css";

const SideBar = () => {
const [open, setOpen] = useState({});

  const menuItems = [
    {
      title: "Getting Started",
      subItems: ["Introduction", "Installation", "First Steps"]
    },
    {
      title: "Upgrading",
      subItems: ["Version 5 to 6", "Version 4 to 5"]
    },
    {
      title: "Upgrading",
    },
    
  ]

  const toggleOpen = (index) => {
    setOpen(prevOpen => ({
      ...prevOpen,
      [index]: !prevOpen[index]
    }));
  };


  return (
    <div className="sidebar">
      <div className="logo">React Router</div>
     
      <ul className="menu">
        {menuItems.map((item, index) => (
          <li key={index} className="menu-item">
            <div onClick={() => toggleOpen(index)} className="menu-title">
              {item.title} 
        {
          item.subItems && item.subItems.length > 0 && (
            open[index] ? <FaChevronDown className="arrow-icon" /> : <FaChevronRight className="arrow-icon" />
          )
        }     
            </div>
            {item.subItems && item.subItems.length > 0 && (
              <div className={`submenu-container ${open[index] ? 'open' : ''}`}>
                <ul className="submenu">
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex} className="submenu-item">{subItem}</li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;