import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
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
		const comp = comps[this.props.compId-1];
		const ip = comp.ip;
		const pengguna = comp.pengguna;
		const status = comp.status;

		const flt = this.props.filter;
		var filtered = false;
		if (!!flt) {
			if (!!flt['os'] && comp.os1 !== flt['os'] && comp.os2 !== flt['os']) filtered = true;
			if (!!flt['monitor'] && comp.monitor !== flt['monitor']) filtered = true;
			// if (!!flt['keyboard'] && comp.keyboard !== flt['keyboard']) filtered = true;
			if (!!flt['mouse'] && comp.mouse !== flt['mouse']) filtered = true;
			// if (!!flt['software'] && comp.software !== flt['software']) filtered = true;
			if (!!flt['vga'] && comp.vga !== flt['vga']) filtered = true;
			if (!!flt['ram'] && comp.ram !== flt['ram']) filtered = true;
			if (!!flt['processor'] && comp.processor !== flt['processor']) filtered = true;
			if (!!flt['type'] && comp.merk_cpu !== flt['type']) filtered = true;
			if (!!flt['user'] && comp.pengguna !== flt['user']) filtered = true;
			if (!!flt['status'] && comp.status !== flt['status']) filtered = true;
		}
		return [
			<Jumbotron style={filtered ? (s.inactive) : (this.state.hover ? (s.hover) : (s.empty))} onMouseEnter={() => this.hover()} onMouseLeave={() => this.unhover()} onClick={() => this.click()}>
				<h4 style={s.title}>Comp {this.props.compId}</h4>
			</Jumbotron>,
			<Modal show={this.state.showModal} centered onHide={this.hideModal}>
				<Modal.Header closeButton>
					<Modal.Title>Computer {this.props.compId}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Table responsive borderless>
						<tbody>
							<tr>
								<td style={s.tdStyle}>IP Address</td>
								<td style={ip === "" ? (s.unassigned) : (s.empty)}>{ip === "" ? ("Unavailable") : (ip)}</td>
							</tr>
						</tbody>
						<tbody>
							<tr>
								<td style={s.tdStyle}>User</td>
								<td style={pengguna === "" ? (s.unassigned) : (s.empty)}>{pengguna === "" ? ("Unavailable") : (pengguna)}</td>
							</tr>
						</tbody>
						<tbody>
							<tr>
								<td style={s.tdStyle}>Status</td>
								<td style={status === "" ? (s.unassigned) : (s.empty)}>{status === "" ? ("Unavailable") : (status)}</td>
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
	tdStyle: {'fontWeight':'bold'},
	title: {'textAlign': 'center'},
	inactive: {'backgroundColor': '#434343', 'transition': 'background-color 0.5s'},
	hover: {'backgroundColor': '#DCE0E3', 'transition': 'background-color 0.5s', cursor:'pointer'},
	unassigned: {'color': '#AAAAAA'},
	empty: {'transition': 'background-color 0.5s'},
	detail: {'borderTop' : '1px solid #e9ecef'}
}

export default Computer;