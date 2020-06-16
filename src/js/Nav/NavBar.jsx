import React, {useState} from 'react';
import { Collapse, Navbar,Nav} from 'reactstrap';
import Modal from "../Modal/Modal.jsx"
import About from "../Modal/About.jsx"
import Contact from "../Modal/Contact.jsx";
import Plans from "../Modal/Plans.jsx";
import NavItem from "./NavItem.jsx"
import NavToggle from "./NavToggle.jsx";


export default function NavBar() {
    console.log('navbar render')
    //NavToggler event
    const [navToggle, setNavToggle] = useState(false);
    const toggleNavBar = () => setNavToggle(!navToggle);

    //About Modal event
    const [about, setAbout] = useState(false);
    const aboutToggle = () => setAbout(!about);

    //Plans Modal event
    const [plans, setPlans] = useState(false);
    const plansToggle = () => setPlans(!plans);

    //Contact Modal event
    const [contact, setContact] = useState(false);
    const contactToggle = () => setContact(!contact);

        return (
            <section className='nav_section'>
                <Navbar className="navbar navbar-expand-sm  navbar-dark container ">
                    <NavToggle onToggle={toggleNavBar} class={navToggle}/>
                    <Collapse isOpen={navToggle} >
                        <Nav>
                            <NavItem onToggle={aboutToggle} title={"About"}>
                                <Modal isOpen={about} title={"About"} onToggle={aboutToggle}>
                                    <About/>
                                </Modal>
                            </NavItem>
                            <NavItem onToggle={plansToggle} title={"Plans"}>
                                <Modal isOpen={plans} title={"Plans"} onToggle={plansToggle}>
                                    <Plans/>
                                </Modal>
                            </NavItem>
                            <NavItem onToggle={contactToggle} title={"Contact"}>
                                <Modal isOpen={contact} title={"Contact"} onToggle={contactToggle}>
                                    <Contact/>
                                </Modal>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </section>

        )

}