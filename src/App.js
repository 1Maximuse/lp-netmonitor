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
      page: 0,
      compId: -1,
      filter: null
    };
  }

  viewDetail = (id) => {
    this.setState({compId: id});
  };

  setPage = (currPage) => {
    this.setState({page: currPage});
    this.setState({compId: -1});
  };

  doLogin = () => {
    this.setState({login: true});
    this.setState({compId: -1});
  };

  doLogout = () => {
    this.setState({login: false});
    this.setState({compId: -1});
  };
  
  setFilter = (newfilter) => {
    this.setState({filter: newfilter});
  };

  render() {
    return [
      <Header setFilter={this.setFilter} doLogout={this.doLogout} login={this.state.login} setPage={this.setPage} page={this.state.page}/>,
      <div style={s.div}>
        <Content filter={this.state.filter} doLogin={this.doLogin} login={this.state.login} page={this.state.page} compId={this.state.compId} viewDetail={this.viewDetail}/>
      </div>
    ];
  }
}

const s = {
  div: {'padding': 0, 'paddingTop': 60}
}
;
export default App;
