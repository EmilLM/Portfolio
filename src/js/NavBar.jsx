import React from 'react';
import AboutModal from "./AboutModal.jsx";
import Login from "./Login.jsx";
import Contact from "./Contact.jsx";
import Plans from "./Plans.jsx";
import NavItem from "./NavItem.jsx"

export default class NavBar extends React.Component {
    state = {
        dataTarget: ["#aboutModal", "#plansModal", "loginModal", "contactModal"],
        modal: true
    };
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    };
    render() {
        return (
            <section className='nav_section'>
                <nav className="navbar navbar-expand-sm  navbar-dark container  ">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"> </span>
                    </button>
                    <div className="collapse navbar-collapse " id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <NavItem onToggle={this.state.toggle}>
                                <AboutModal/>
                            </NavItem>

                            <li className="nav-item">
                                {/*eslint-disable-next-line*/}
                                <a className="nav-link" href="#" data-toggle="modal" data-target="#plansModal">Plans</a>
                                <Plans/>
                            </li>
                            <li className="nav-item">
                                {/*eslint-disable-next-line*/}
                                <a className="nav-link" href="#" data-toggle="modal" data-target="#loginModal">Log in</a>
                                <Login/>
                            </li>
                            <li className="nav-item">
                                {/*eslint-disable-next-line*/}
                                <a className="nav-link" href="#" data-toggle="modal" data-target="#contactModal">Contact</a>
                                <Contact/>
                            </li>
                        </ul>
                    </div>
                </nav>
            </section>

        )
    }
}