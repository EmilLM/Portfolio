import React from "react";


export default function NavItem(props) {
    return (
        <li className="nav-item">
            {/*eslint-disable-next-line*/}
            <a className="nav-link nav_neon" href="#" onClick={props.onToggle}>{props.title}</a>
            {props.children}
        </li>
    )
}