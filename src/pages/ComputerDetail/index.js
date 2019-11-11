import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';
import Fade from 'react-bootstrap/Fade';
import Alert from 'react-bootstrap/Alert';
// import comps from '../../testjson/computers';

class Computer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			comps: null,
			fade: false,
			error: false
		};
		this.componentDidMount = this.componentDidMount.bind(this);
	}

	componentDidMount() {
		fetch('http://www.mocky.io/v2/5dc0cbe433000071001a4d17?mocky-delay=500ms')
		.then((results) => (results.json()))
		.catch((error) => {
			this.setState({error: true});
		})
		.then((data) => {
			if (!!data) {
				this.setState({error: false});
				this.setState({comps: data});
				this.setState({fade: true});
			}
		});
	}

	render() {
		if (this.state.error) {
			return (
				<Container style={s.loading}>
					<Alert variant="danger">Error: Unable to fetch data. <Alert.Link onClick={this.componentDidMount}>Fetch again</Alert.Link>?</Alert>
				</Container>
			);
		} else {
			if (!!this.state.comps) {
				const titles = ["MAC Address", "IP Address", "Operating System", "Alternate Operating System", "Monitor", "Mouse", "Software",
					"Graphics Memory", "RAM", "Processor", "CPU Type", "User", "Status", "Remarks"];
				const data = [];
				data.push(this.state.comps[this.props.compId-1].mac);
				data.push(this.state.comps[this.props.compId-1].ip);
				data.push(this.state.comps[this.props.compId-1].os1);
				data.push(this.state.comps[this.props.compId-1].os2);
				data.push(this.state.comps[this.props.compId-1].monitor);
				data.push(this.state.comps[this.props.compId-1].mouse);
				data.push(this.state.comps[this.props.compId-1].software);
				data.push(this.state.comps[this.props.compId-1].vga);
				data.push(this.state.comps[this.props.compId-1].ram);
				data.push(this.state.comps[this.props.compId-1].processor);
				data.push(this.state.comps[this.props.compId-1].merk_cpu);
				data.push(this.state.comps[this.props.compId-1].pengguna);
				data.push(this.state.comps[this.props.compId-1].status);
				data.push(this.state.comps[this.props.compId-1].catatan);
				return(
					<Fade in={this.state.fade}>
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
					</Fade>
				);
			} else {
				return (
					<Container style={s.cont}>
						<Container style={s.loading}><Spinner style={s.spinner} animation="border" /></Container>
					</Container>
				);
			}
		}
	}
}

const s = {
	cont: {'paddingTop': 20},
	unassigned: {'color': '#AAAAAA'},
	empty: {},
	loading: {'textAlign': 'center', 'paddingTop': 40},
	spinner: {'width': 70, 'height': 70}
};

export default Computer;