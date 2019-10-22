import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import comps from '../../testjson/computers';

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
		this.viewDetail = this.viewDetail.bind(this);
	}

	click(event) {
		this.setState({showModal: true});
	}

	hideModal(event) {
		this.setState({showModal: false});
	}

	hover(event) {
		this.setState({hover: true});
	}

	unhover(event) {
		this.setState({hover: false});
	}

	viewDetail(event) {
		this.props.viewDetail(this.props.compId);
	}

	render() {
		const owner = comps.computers[this.props.compId-1].owner;
		const cpu = comps.computers[this.props.compId-1].cpu;
		return [
			<Jumbotron style={this.state.hover ? (s.hover) : (s.empty)} onMouseEnter={() => this.hover()} onMouseLeave={() => this.unhover()} onClick={() => this.click()}>
				<h4 style={s.title}>Comp {this.props.compId}</h4>
			</Jumbotron>,
			<Modal show={this.state.showModal} centered onHide={this.hideModal}>
				<Modal.Header closeButton>
					<Modal.Title>Computer {this.props.compId}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Row>
						<Col md={3}>Owner</Col>
						<Col style={owner === "" ? (s.unassigned) : (s.empty)}>{owner === "" ? ("Not assigned") : (owner)}</Col>
					</Row>
					<Row>
						<Col md={3}>CPU</Col>
						<Col style={cpu === "" ? (s.unassigned) : (s.empty)}>{cpu === "" ? ("Unavailable") : (cpu)}</Col>
					</Row>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={() => this.viewDetail()}>View Detail</Button>
				</Modal.Footer>
			</Modal>
		];
	}
}

const s = {
	title: {'textAlign': 'center'},
	hover: {'backgroundColor': '#DCE0E3'},
	unassigned: {'color': '#AAAAAA'},
	empty: {}
}

export default Computer;