import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import BGImage from '../../img/bg1.jpg';

var imgurl = {
	backgroundImage: `url(${BGImage})`,
	backgroundPosition: 'center',
	backgroundSize: 'cover',
	height: '100vh'
};

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			failed: false,
			token: '',
		
		};
		this.handleChangeToken = this.handleChangeToken.bind(this);
    	this.handleLogin = this.handleLogin.bind(this);
	}

	handleChangeToken(event) {
		this.setState({token: event.target.value});
	}

	handleLogin(event) {
		event.preventDefault();
		// TODO: AUTHENTICATE
		if (this.state.token === "lpadmin") {
			this.setState({failed: false});
			this.props.doLogin();
		} else {
			this.setState({failed: true});
		}
	}

	render() {
		return (
			<div style={imgurl}>
				<div style={s.loginWrapper}>
					<Jumbotron style={s.jumb}>
					<h1 className="text-dark">LP Net Monitor</h1>
					<hr/>
					<h5 className="text-dark">Please Login</h5>
						<Form onSubmit={this.handleLogin} style={s.form}>
							<Form.Group>
								{/* <Form.Label>Token</Form.Label> */}
								<Form.Control required type="password" placeholder="Enter Token" onChange={this.handleChangeToken} value={this.state.pass} />
								<Form.Text className="text-muted">
									Provide useful information here :)
								</Form.Text>
							</Form.Group>
							{this.state.failed && (
								<Alert onClose={() => this.setState({failed: false})} dismissible variant="danger">Wrong credentials!</Alert>
							)}
							<Button className="w-100" type="submit" variant="primary">Login</Button>
						</Form>
					</Jumbotron>
				</div>
			</div>
		);
	}
}

const s = {
	jumb: {position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', textAlign:'left'},
	loginWrapper: {textAlign:'center'},
	form: {minWidth: '400px'}
};

export default LoginForm;