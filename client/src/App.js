import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';
import Users from "./containers/Users/Users";
import Login from './component/Login/Login';
import Signup from "./component/Sign-in/Sign-in";
import { HeaderLoggedin, HeaderLoggedout } from "./component/layout/Header";
import Logout from "./component/logout/Logout";
import {BrowserRouter as Router, Route}from 'react-router-dom';

class App extends Component {

  state = {
    loggedin: false,
  }

  login = () => {this.setState({ loggedin: true });}
  logout = () => {this.setState({ loggedin: false });}

  checkLogin = () => {
    Axios.get('http://localhost:3001/user/checkLogin', {withCredentials : true})
    .then((response) => {
      if(response.data.jwt)
        this.setState({loggedin : true});
      else
        this.setState({loggedin : false});  
    
    }).catch((error) => {
        console.log(error);
    })
  }
  componentDidMount = () => {
    this.checkLogin();
  }

  render() {
    return (
      <Router>
        <div className="container">
          <div className="rows">
            <div className="py-3 text-center">
              <div className="col-md-6 mx-auto">
              {this.state.loggedin === true &&  <HeaderLoggedin />}
              {this.state.loggedin === false && <HeaderLoggedout />}
                <Route exact path="/" render={props => (
                  <React.Fragment>
                      <h1>Home Page</h1>
                  </React.Fragment>
                )} />
                <Route path="/Users" component={Users}/>
                {/* missing sending  email confirmation ++ confirm verify */}
                <Route path="/Sign-up" component={Signup} />
                {/* missing session outil */}
                <Route path="/Login" render={() => (
                  <Login login={this.login} />)}  
                />
                <Route path="/Logout" render={() => (
                  <Logout logout={this.logout}/>)}
                />
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
