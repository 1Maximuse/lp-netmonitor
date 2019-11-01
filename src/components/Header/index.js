import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
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
			const categories = [];
			categories.push({name: "Operating System", cats: ["", "tes1", "tes2", "tes3"]});
			categories.push({name: "Monitor", cats: ["", "tes1", "tes2", "tes3"]});
			categories.push({name: "Keyboard", cats: ["", "tes1", "tes2", "tes3"]});
			categories.push({name: "Mouse", cats: ["", "tes1", "tes2", "tes3"]});
			categories.push({name: "Software", cats: ["", "tes1", "tes2", "tes3"]});
			categories.push({name: "VRAM", cats: ["", "tes1", "tes2", "tes3"]});
			categories.push({name: "RAM", cats: ["", "tes1", "tes2", "tes3"]});
			categories.push({name: "Processor", cats: ["", "tes1", "tes2", "tes3"]});
			categories.push({name: "Merk CPU", cats: ["", "tes1", "tes2", "tes3"]});
			categories.push({name: "Pengguna"});
			categories.push({name: "Status", cats: ["", "tes1", "tes2", "tes3"]});
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
							<NavDropdown title="Filter" style={s.filter}>
								<Form>
									<Table style={s.table}><tbody>
										{categories.map((category, index) => (
											<tr>
												<td style={s.td}><Form.Label as="td">{category.name}</Form.Label></td>
												<td style={s.td}>
													{(!!category.cats) ? (
														<Form.Control as={"select"}>
															{category.cats.map((cat) => (<option>{cat}</option>))}
														</Form.Control>
													) : (
														<Form.Control></Form.Control>
													)}
												</td>
											</tr>
										))}
										<tr>
											<td style={s.tdbtn} colspan='2'><Button style={s.filterbutton}>Filter</Button></td>
										</tr>
										<tr>
											<td style={s.tdbtn} colspan='2'><Button variant="danger" style={s.filterbutton}>Reset</Button></td>
										</tr>
									</tbody></Table>
								</Form>
							</NavDropdown>
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
	nav: {'paddingLeft': 5},
	filter: {'width': '50em'},
	filterbutton: {'width': '100%'},
	td: {'borderStyle': 'none'},
	tdbtn: {'borderStyle': 'none', 'paddingTop': 0},
	table: {'marginBottom': 0}
};

export default Header;