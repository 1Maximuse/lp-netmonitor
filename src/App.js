import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Content from './Content';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      page: 0
    };
  }

  setPage = (currPage) => {
    this.setState({page: currPage});
  };

  doLogin = () => {
    this.setState({login: true});
  };

  doLogout = () => {
    this.setState({login: false});
  };

  render() {
    return [
      <Header doLogout={this.doLogout} login={this.state.login} setPage={this.setPage} page={this.state.page}/>,
      <Content doLogin={this.doLogin} login={this.state.login} page={this.state.page}/>
    ];
  }
}

export default App;
