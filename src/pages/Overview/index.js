import React from 'react';
import Computer from '../../components/Computer';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';
import Fade from 'react-bootstrap/Fade';
// import comps from '../../testjson/computers';

class Overview extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			comps: null,
			fade: false
		}
	}

	viewDetail = (id) => {
		this.props.viewDetail(id);
	};

	componentDidMount() {
		fetch('http://www.mocky.io/v2/5dbd54823300007d6016a17a?mocky-delay=500ms')
		.then((results) => (results.json()))
		.then((data) => {
			this.setState({comps: data});
			this.setState({fade: true});
		});
	}

	render() {
		return (
			<Container fluid style={s.cont}>
				{!!this.state.comps ? (
				<Fade in={this.state.fade}><Table borderless size="sm" style={s.table}>
					<tbody>
						<Computers filter={this.props.filter} comps={this.state.comps} cols={8} rows={8} viewDetail={this.viewDetail}/>
					</tbody>
				</Table></Fade>
				) : (<Container style={s.loading}><Spinner style={s.spinner} animation="border" /></Container>)}
			</Container>
		);
	}
}

class Computers extends React.Component {
	viewDetail = (id) => {
		this.props.viewDetail(id);
	};

	render() {
		var col = [];
		var i = 0;
		for (; i < this.props.rows; i++) {
			col.push(
				<tr>
					<ComputerRow filter={this.props.filter} comps={this.props.comps} rev={i % 2 === 0} key={i.toString()} start={this.props.cols*i} cols={this.props.cols} viewDetail={this.viewDetail}/>
				</tr>
			);
		}
		return (
			col
		);
	}
}

class ComputerRow extends React.Component {
	viewDetail = (id) => {
		this.props.viewDetail(id);
	};

	render() {
		var row = [];
		var i;
		if (this.props.rev) {
			i = 1;
			for (; i <= this.props.cols / 2; i++) {
				if (i + this.props.start > this.props.comps.length) break;
				row.push(
					<td>
						<Computer filter={this.props.filter} compId={i+this.props.start} viewDetail={this.viewDetail}/>
					</td>
				);
			}
			row.push(<td style={s.spacer} md={1}></td>);
			for (; i <= this.props.cols; i++) {
				if (i + this.props.start > this.props.comps.length) break;
				row.push(
					<td>
						<Computer filter={this.props.filter} compId={i+this.props.start} viewDetail={this.viewDetail}/>
					</td>
				);
			}
		} else {
			i = 8;
			for (; i > this.props.cols / 2; i--) {
				if (i + this.props.start > this.props.comps.length) break;
				row.push(
					<td>
						<Computer filter={this.props.filter} compId={i+this.props.start} viewDetail={this.viewDetail}/>
					</td>
				);
			}
			row.push(<td style={s.spacer} md={1}></td>);
			for (; i > 0; i--) {
				if (i + this.props.start > this.props.comps.length) break;
				row.push(
					<td>
						<Computer filter={this.props.filter} compId={i+this.props.start} viewDetail={this.viewDetail}/>
					</td>
				);
			}
		}
		
		return (row);
	}
}

const s = {
	cont: {'padding': 10, 'paddingTop': 20, 'height': 'calc(100vh - 60px)','overflowY': 'auto', 'overflowX': 'auto'},
	spacer: {'paddingLeft': '4em', 'paddingRight': '4em'},
	table: {'margin': 0},
	loading: {'textAlign': 'center', 'paddingTop': 40},
	spinner: {'width': 70, 'height': 70}
};

export default Overview;