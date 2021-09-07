import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";

class Header extends Component {
  render() {
    return (
      <nav className="HeaderItems">
        <h1 className="header-logo">React</h1>
        <div className="menu-icon">

        </div>
        <ul>
          {MenuItems.map((item, index) => {
            return (
              <li><a className="{item.cName}"></a></li>
            )
          })}
         
        </ul>
      </nav>
    )
  }
}
export default Header;