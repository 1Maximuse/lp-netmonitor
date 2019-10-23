import React from 'react';
import Overview from './pages/Overview';
import AddPC from './pages/AddPC';
import LoginForm from './pages/LoginForm';
import ComputerDetail from './pages/ComputerDetail';

class Content extends React.Component {
	viewDetail = (detail) => {
		this.props.viewDetail(detail);
	};

	render() {
		if (this.props.login === false) {
			return <LoginForm doLogin={() => this.props.doLogin()}/>;
		} else {
			if (this.props.compId === -1) {
				if (this.props.page === 0) return <Overview viewDetail={this.viewDetail}/>;
				else if (this.props.page === 1) return <AddPC/>;
			} else {
				return <ComputerDetail compId={this.props.compId}/>
			}
		}
	}
}

export default Content;