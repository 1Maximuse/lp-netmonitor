import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
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
		const ip = comps.computers[this.props.compId-1].ip;
		const mac = comps.computers[this.props.compId-1].mac;
		const type = comps.computers[this.props.compId-1].type;
		const detail = comps.computers[this.props.compId-1].detail;
		return [
			<Jumbotron style={this.state.hover ? (s.hover) : (s.empty)} onMouseEnter={() => this.hover()} onMouseLeave={() => this.unhover()} onClick={() => this.click()}>
				<h4 style={s.title}>Comp {this.props.compId}</h4>
			</Jumbotron>,
			<Modal show={this.state.showModal} centered onHide={this.hideModal}>
				<Modal.Header closeButton>
					<Modal.Title>Computer {this.props.compId}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Table responsive>
						<tbody>
							<tr>
								<td>IP Address</td>
								<td style={ip === "" ? (s.unassigned) : (s.empty)}>{ip === "" ? ("Unavailable") : (ip)}</td>
							</tr>
						</tbody>
						<tbody>
							<tr>
								<td>MAC Address</td>
								<td style={mac === "" ? (s.unassigned) : (s.empty)}>{mac === "" ? ("Unavailable") : (mac)}</td>
							</tr>
						</tbody>
						<tbody>
							<tr>
								<td>PC Type</td>
								<td style={type === "" ? (s.unassigned) : (s.empty)}>{type === "" ? ("Unavailable") : (type)}</td>
							</tr>
						</tbody>
						<tbody>
							<tr>
								<td>Remarks</td>
								<td style={detail === "" ? (s.unassigned) : (s.empty)}>{detail === "" ? ("Unavailable") : (detail)}</td>
							</tr>
						</tbody>
					</Table>
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
	empty: {},
	detail: {'borderTop' : '1px solid #e9ecef'}
}

export default Computer;