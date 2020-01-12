import React from "react";
// import AboutModal from "./AboutModal";

export default class NavItem extends React.Component {

     handleClick = () => {
        if (typeof this.props.onToggle ==='function') {
            this.props.onToggle();
        }
    };
     render() {
         return (
             <li className="nav-item">
                 {/*eslint-disable-next-line*/}
                 <a className="nav-link" href="#" data-toggle="modal" data-target="#aboutModal">About</a>
                 {this.props.children}
             </li>
         )
     }

}