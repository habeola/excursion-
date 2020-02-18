import React from 'react';
//import logo from './logo.svg'--------<img src={logo} className="App-logo" alt="logo" />;
import {BrowserRouter as Router} from 'react-router-dom'
import { connect } from 'react-redux'
import BaseRouter from './routes';
import './App.css';
import 'antd/dist/antd.css';
import SiderDemo from './containers/Layout';
import * as actions from './store/actions/auth';


//function App() {
  class App extends React.Component {
    componentDidMount(){
      this.props.onTryAutoSignup();
    }

    render(){
      return (
        <div className="">
          <Router>
            <SiderDemo {...this.props}>
              <BaseRouter />
            </SiderDemo>
          </Router>
        </div>   
      )};
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
