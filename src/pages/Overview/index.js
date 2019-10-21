import React from 'react';
import Computer from '../../components/Computer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Overview() {
	return (
		<Container fluid style={s.cont}>
			<Computers cols={8} rows={5}/>
		</Container>
	);
}

class Computers extends React.Component {
	render() {
		var col = [];
		var i = 0;
		for (; i < this.props.rows; i++) {
			col.push(
				<Row>
					<ComputerRow start={this.props.cols*i} cols={this.props.cols} />
				</Row>
			);
		}
		return (
			col
		);
	}
}

class ComputerModal extends React.Component {
	
}

class ComputerRow extends React.Component {
	render() {
		var row = [];
		var i = 1;
		for (; i <= this.props.cols / 2; i++) {
			row.push(
				<Col>
					<Computer compId={i+this.props.start} />
				</Col>
			);
		}
		row.push(<Col md={1}></Col>);
		for (; i <= this.props.cols; i++) {
			row.push(
				<Col>
					<Computer compId={i+this.props.start} />
				</Col>
			);
		}
		return (row);
	}
}

const s = {
	cont: {'padding-top': 20}
};

export default Overview;