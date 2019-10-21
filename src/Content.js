import React from 'react';
import Overview from './pages/Overview';
import AddPC from './pages/AddPC';
import LoginForm from './pages/LoginForm';

class Content extends React.Component {
	render() {
		if (this.props.login === false) {
			return <LoginForm doLogin={() => this.props.doLogin()}/>;
		} else {
			if (this.props.page === 0) return <Overview/>;
			else if (this.props.page === 1) return <AddPC/>;
			else return <p>no page</p>;
		}
	}
}

export default Content;