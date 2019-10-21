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
				<Navbar bg="dark" variant="dark">
					<Navbar.Brand class="Nav">
						<img src={logo} width="30" height="30" alt="LP Logo" class="Nav-logo"/>
						{' LP Net Monitor'}
					</Navbar.Brand>
					<Nav>
						<Nav.Link onClick={() => this.props.setPage(0)} class="Nav">Overview</Nav.Link>
						<Nav.Link onClick={() => this.props.setPage(1)} class="Nav">Tambah PC</Nav.Link>
					</Nav>
					<Navbar.Collapse className="justify-content-end">
						<Button onClick={this.handleLogout} variant="light">Log out</Button>
					</Navbar.Collapse>
				</Navbar>
			);		
		} else {
			return (
				<Navbar bg="dark" variant="dark">
					<Navbar.Brand class="Nav">
						<img src={logo} width="30" height="30" alt="LP Logo" class="Nav-logo"/>
						{' LP Net Monitor'}
					</Navbar.Brand>
					<Navbar.Collapse className="justify-content-end">
						<Navbar.Text>Not logged in.</Navbar.Text>
					</Navbar.Collapse>
				</Navbar>
			);
		}
		
	}
}

export default Header;