import React from 'react';
import Container from 'react-bootstrap/Container';

class ComputerDetail extends React.Component {
	render() {
		return(
			<Container style={s.cont}>
				<h1>Computer {this.props.compId}</h1>
			</Container>
		);
	}
}

const s = {
	cont: {'paddingTop': 20}
};

export default ComputerDetail;