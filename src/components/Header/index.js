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
		this.handleFilter = this.handleFilter.bind(this);
		this.handleReset = this.handleReset.bind(this);
	}

	handleFilter(event) {
		event.preventDefault();

		var filter = {
			os: this.refs.os.value,
			monitor: this.refs.monitor.value,
			keyboard: this.refs.keyboard.value,
			mouse: this.refs.mouse.value,
			software: this.refs.software.value,
			vga: this.refs.vga.value,
			ram: this.refs.ram.value,
			processor: this.refs.processor.value,
			type: this.refs.type.value,
			user: this.refs.user.value,
			status: this.refs.status.value
		};

		this.props.setFilter(filter);
	}

	handleReset(event) {
		event.preventDefault();
		this.props.setFilter(null);
	}

	handleLogout(event) {
		event.preventDefault();
		this.props.doLogout();
	}

	render() {
		if (this.props.login) {
			const categories = [];
			categories.push({id: "os", name: "Operating System", cats: ["", "ubuntu", "tes2", "tes3"]});
			categories.push({id: "monitor", name: "Monitor", cats: ["", "tes1", "tes2", "tes3"]});
			categories.push({id: "keyboard", name: "Keyboard", cats: ["", "tes1", "tes2", "tes3"]});
			categories.push({id: "mouse", name: "Mouse", cats: ["", "tes1", "tes2", "tes3"]});
			categories.push({id: "software", name: "Software", cats: ["", "tes1", "tes2", "tes3"]});
			categories.push({id: "vga", name: "Video RAM", cats: ["", "tes1", "tes2", "tes3"]});
			categories.push({id: "ram", name: "RAM", cats: ["", "tes1", "tes2", "tes3"]});
			categories.push({id: "processor", name: "Processor", cats: ["", "tes1", "tes2", "tes3"]});
			categories.push({id: "type", name: "CPU Type", cats: ["", "tes1", "tes2", "tes3"]});
			categories.push({id: "user", name: "User"});
			categories.push({id: "status", name: "Status", cats: ["", "tes1", "tes2", "tes3"]});
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
							<NavDropdown title="Filter">
								<Form onSubmit={this.handleFilter} style={s.filter}>
									<Table style={s.table}><tbody>
										{categories.map((category, index) => (
											<tr>
												<td style={s.td}><Form.Label as="td">{category.name}</Form.Label></td>
												<td style={s.td}>
													{(!!category.cats) ? (
														<Form.Control ref={category.id} as={"select"}>
															{category.cats.map((cat) => (<option>{cat}</option>))}
														</Form.Control>
													) : (
														<Form.Control ref={category.id} ></Form.Control>
													)}
												</td>
											</tr>
										))}
										<tr>
											<td style={s.tdbtn} colspan='2'><Button type="submit" style={s.filterbutton}>Filter</Button></td>
										</tr>
										<tr>
											<td style={s.tdbtn} colspan='2'><Button onClick={this.handleReset} variant="danger" style={s.filterbutton}>Reset</Button></td>
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
	filter: {'width': '25em'},
	filterbutton: {'width': '100%'},
	td: {'borderStyle': 'none'},
	tdbtn: {'borderStyle': 'none', 'paddingTop': 0},
	table: {'marginBottom': 0}
};

export default Header;