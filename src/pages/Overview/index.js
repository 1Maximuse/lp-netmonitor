import React from 'react';
import Computer from '../../components/Computer';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

class Overview extends React.Component {
	viewDetail = (id) => {
		this.props.viewDetail(id);
	};

	render() {
		return (
			<Container fluid style={s.cont}>
				<Table borderless size="sm" style={s.table}>
					<tbody>
						<Computers cols={8} rows={5} viewDetail={this.viewDetail}/>
					</tbody>
				</Table>
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
					<ComputerRow key={i.toString()} start={this.props.cols*i} cols={this.props.cols} viewDetail={this.viewDetail}/>
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
		var i = 1;
		for (; i <= this.props.cols / 2; i++) {
			row.push(
				<td>
					<Computer compId={i+this.props.start} viewDetail={this.viewDetail}/>
				</td>
			);
		}
		row.push(<td style={s.spacer} md={1}></td>);
		for (; i <= this.props.cols; i++) {
			row.push(
				<td>
					<Computer compId={i+this.props.start} viewDetail={this.viewDetail}/>
				</td>
			);
		}
		return (row);
	}
}

const s = {
	cont: {'padding': 10, 'paddingTop': 20, 'height': 'calc(100vh - 60px)','overflowY': 'auto', 'overflowX': 'auto'},
	spacer: {'paddingLeft': '5em', 'paddingRight': '5em'},
	table: {'margin': 0}
};

export default Overview;