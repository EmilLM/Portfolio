import React from "react";
// import AboutModal from "./AboutModal";

export default function NavItem(props) {
         return (
             <li className="nav-item">
                 {/*eslint-disable-next-line*/}
                 <a className="nav-link" href="#" onClick={props.onToggle}>{props.title}</a>
                 {props.children}
             </li>
         )


}