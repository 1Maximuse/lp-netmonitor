import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import comps from '../../testjson/computers';

class Computeros2 extends React.Component {
	render() {
		const titles = ["MAC Address", "IP Address", "Operating System", "Alternate Operating System", "Monitor", "Mouse", "Software",
			"Graphics Memory", "RAM", "Processor", "CPU Type", "User", "Status", "Remarks"];
		const data = [];
		data.push(comps[this.props.compId-1].mac);
		data.push(comps[this.props.compId-1].ip);
		data.push(comps[this.props.compId-1].os1);
		data.push(comps[this.props.compId-1].os2);
		data.push(comps[this.props.compId-1].monitor);
		data.push(comps[this.props.compId-1].mouse);
		data.push(comps[this.props.compId-1].software);
		data.push(comps[this.props.compId-1].vga);
		data.push(comps[this.props.compId-1].ram);
		data.push(comps[this.props.compId-1].processor);
		data.push(comps[this.props.compId-1].merk_cpu);
		data.push(comps[this.props.compId-1].pengguna);
		data.push(comps[this.props.compId-1].status);
		data.push(comps[this.props.compId-1].catatan);
		return(
			<Container style={s.cont}>
				<h1>Computer {this.props.compId}</h1>
				<Table><tbody>
					{data.map((detail, index) => (
						<tr>
							<td>{titles[index]}</td>
							{(!!detail) ? (
								<td style={s.empty}>{detail}</td>
							) : (
								<td style={s.unassigned}>{"Unavailable"}</td>
							)}
						</tr>
					))}
				</tbody></Table>
			</Container>
		);
	}
}

const s = {
	cont: {'paddingTop': 20},
	unassigned: {'color': '#AAAAAA'},
	empty: {}
};

export default Computeros2;