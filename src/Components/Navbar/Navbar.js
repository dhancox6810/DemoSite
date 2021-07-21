import React, { Component } from 'react';
import { MenuItems } from "./menuItems.js";
import './Navbar.css';

export class Nav extends Component {
    render() {
        return (
            <div className="rectangle">
            <nav className="NavbarItems">
                
                <ul>
                    <nav className="nav-menu">
                        {MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a style={{ textDecoration : 'none', color : 'white'}} className={item.cName} href={item.url}>
                                        {item.Title}
                                    </a>
                                </li>
                            )
                        })}
                    </nav>
                </ul>
            </nav>
            </div>
        );
    }
}

export default Nav;