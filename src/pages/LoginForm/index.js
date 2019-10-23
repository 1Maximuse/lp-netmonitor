import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			failed: false,
			user: '',
			pass: '',
		
		};
		this.handleChangeUser = this.handleChangeUser.bind(this);
		this.handleChangePass = this.handleChangePass.bind(this);
    	this.handleLogin = this.handleLogin.bind(this);
	}

	handleChangeUser(event) {
		this.setState({user: event.target.value});
	}

	handleChangePass(event) {
		this.setState({pass: event.target.value});
	}

	handleLogin(event) {
		event.preventDefault();
		// TODO: AUTHENTICATE
		if (this.state.user === "noel" && this.state.pass === "admin") {
			this.setState({failed: false});
			this.props.doLogin();
		} else {
			this.setState({failed: true});
		}
	}

	render() {
		return (
			<Container>
				<Jumbotron style={s.jumb}>
					{this.state.failed ? (
						<Alert onClose={() => this.setState({failed: false})} dismissible variant="danger">Wrong credentials!</Alert>
					) : (
						<></>
					)}
					<Form onSubmit={this.handleLogin} style={s.form}>
						<Form.Group>
							<Form.Label>Username</Form.Label>
							<Form.Control required type="text" placeholder="Enter username" onChange={this.handleChangeUser} value={this.state.user} />
						</Form.Group>
						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control required type="password" placeholder="Enter password" onChange={this.handleChangePass} value={this.state.pass} />
						</Form.Group>
						<Button className="w-100" type="submit" variant="success">Login</Button>
					</Form>
				</Jumbotron>
			</Container>
		);
	}
}

const s = {
	jumb: {position: 'absolute', left: '50%', top: '40%', transform: 'translate(-50%, -50%)'},
	form: {width: '300px'}
};

export default LoginForm;