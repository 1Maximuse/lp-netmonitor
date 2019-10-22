import React from 'react';
import Computer from '../../components/Computer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Overview extends React.Component {
	viewDetail = (id) => {
		this.props.viewDetail(id);
	};

	render() {
		return (
			<Container fluid style={s.cont}>
				<Computers cols={8} rows={5} viewDetail={this.viewDetail}/>
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
				<Row>
					<ComputerRow key={i.toString()} start={this.props.cols*i} cols={this.props.cols} viewDetail={this.viewDetail}/>
				</Row>
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
				<Col>
					<Computer compId={i+this.props.start} viewDetail={this.viewDetail}/>
				</Col>
			);
		}
		row.push(<Col md={1}></Col>);
		for (; i <= this.props.cols; i++) {
			row.push(
				<Col>
					<Computer compId={i+this.props.start} viewDetail={this.viewDetail}/>
				</Col>
			);
		}
		return (row);
	}
}

const s = {
	cont: {'paddingTop': 20}
};

export default Overview;