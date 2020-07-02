import React, { Component } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	NavbarText
} from 'reactstrap';

class Header extends Component {
	render() {
		return (
			<div>
				<Navbar color="dark" dark expand="md">
					<NavbarBrand href="/">reactstrap</NavbarBrand>
					<Nav className="mr-auto" navbar>
						<NavItem>
							<NavLink href="/components/">Components</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
						</NavItem>
					</Nav>
					<NavbarText>Log Out</NavbarText>
				</Navbar>
			</div>
		);
	}
}

export default Header;
