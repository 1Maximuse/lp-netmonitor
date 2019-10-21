import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class Computer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			hover: false
		};
		this.click = this.click.bind(this);
		this.hideModal = this.hideModal.bind(this);
		this.hover = this.hover.bind(this);
		this.unhover = this.unhover.bind(this);
	}

	click(event) {
		this.setState({showModal: true});
	}

	hideModal() {
		this.setState({showModal: false});
	}

	hover(event) {
		this.setState({hover: true});
	}

	unhover(event) {
		this.setState({hover: false});
	}

	render() {
		return (
			<>
				<Jumbotron style={this.state.hover ? (s.hover) : (s.unhover)} onMouseEnter={() => this.hover()} onMouseLeave={() => this.unhover()} onClick={() => this.click()}>
					<h4 style={s.title}>Comp {this.props.compId}</h4>
				</Jumbotron>
				<Modal show={this.state.showModal} centered onHide={this.hideModal}>
					<Modal.Header closeButton>
						<Modal.Title>Computer asd</Modal.Title>
					</Modal.Header>
					<Modal.Body>
					</Modal.Body>
					<Modal.Footer>
						<Button>tes</Button>
					</Modal.Footer>
				</Modal>
			</>
		);
	}
}

const s = {
	title: {'text-align': 'center'},
	hover: {'background-color': '#DCE0E3'},
	unhover: {}
}

export default Computer;