import React, { useState } from 'react';
import { Collapse, Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';

const Hook2 = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
        <div>
            <Navbar color="faded" light expand="sm">
                <NavbarBrand href="/" className="me-auto">
                    Logo
                </NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="me-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/components/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                                Products
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/">Contact</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/">About</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Hook2;
