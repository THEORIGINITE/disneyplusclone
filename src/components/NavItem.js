import React from "react";
import "./NavItem.css";
import {Link} from 'react-router-dom'
function NavItem({ Primary, Icon ,linkto}) {
  return (
    <div className="NavItem">
      {Icon}
      <Link to={linkto} >
        <span>{Primary}</span>
      </Link>
    </div>
  );
}

export default NavItem;
