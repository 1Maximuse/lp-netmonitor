import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import logo from '../../logo.svg';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.handleLogout = this.handleLogout.bind(this);
	}

	handleLogout(event) {
		event.preventDefault();
		this.props.doLogout();
	}

	render() {
		if (this.props.login) {
			return (
				<Navbar bg="dark" variant="dark" fixed="top" expand="sm">
  					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Brand>
						<img src={logo} alt="LP Logo" width="30" height="30" className="d-inline-block align-top"/>
						<span style={s.nav}>{' LP Net Monitor'}</span>
					</Navbar.Brand>
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link onClick={() => this.props.setPage(0)}>Overview</Nav.Link>
							<Nav.Link onClick={() => this.props.setPage(1)}>Tambah PC</Nav.Link>
						</Nav>
						<Nav>
							<Button onClick={this.handleLogout} variant="light">Log out</Button>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			);		
		} else {
			return (
				<Navbar bg="dark" variant="dark" fixed="top" expand="sm">
					<Navbar.Brand>
						<img src={logo} alt="LP Logo" width="30" height="30" className="d-inline-block align-top"/>
						<span style={s.nav}>{' LP Net Monitor'}</span>
					</Navbar.Brand>
					<Nav className="mr-auto"></Nav>
					<Nav className="justify-content-end">
						<Navbar.Text>Not logged in.</Navbar.Text>
					</Nav>
				</Navbar>
			);
		}
		
	}
}

const s = {
	nav: {'paddingLeft': 5}
};

export default Header;