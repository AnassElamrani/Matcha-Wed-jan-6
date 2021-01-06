import React from 'react';
import { Link } from 'react-router-dom';
// import Button from '@material-ui/core/Button'

const HeaderLoggedin = (props) => {
    return (
      <header>
      <Link  to="/">Home</Link> | <Link to="/logout">Logout</Link>| <Link to ="/protectedRoute">Protected-Route</Link>
      </header>
      )
  
    }

const HeaderLoggedout = (props) => {
  return (
    <header>
       <Link  to="/">Home</Link> | <Link  to="/Sign-up">Sign-up</Link> | <Link to="/Login">Login</Link>
       </header>
     )  
}
     
export {HeaderLoggedin, HeaderLoggedout};