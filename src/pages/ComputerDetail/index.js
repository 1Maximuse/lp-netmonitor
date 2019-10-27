import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import comps from '../../testjson/computers';

class ComputerDetail extends React.Component {
	render() {
		const ip = comps.computers[this.props.compId-1].ip;
		const mac = comps.computers[this.props.compId-1].mac;
		const type = comps.computers[this.props.compId-1].type;
		const detail = comps.computers[this.props.compId-1].detail;
		return(
			<Container style={s.cont}>
				<h1>Computer {this.props.compId}</h1>
				<Table>
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
			</Container>
		);
	}
}

const s = {
	cont: {'paddingTop': 20},
	unassigned: {'color': '#AAAAAA'},
	empty: {}
};

export default ComputerDetail;