import React, { Component } from 'react';
import Axios from 'axios';
import {Redirect} from 'react-router-dom';

class Signup extends Component{
    state = {
        userName: '', userNameErr: '', 
        email: '', emailErr: '',
        firstName: '', firstNameErr : '',
        lastName: '', lastNameErr : '',
        password: '', passErr: '',
        cnfrmPassword: '', cnfrmPassErr: '',
        redirect: ''
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    signup = (e) => {
        console.log('+')
        e.preventDefault();
        Axios.post("http://localhost:3001/users/signup",
        {
            email: this.state.email,
            userName: this.state.userName,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            password: this.state.password,
            cnfrmPassword: this.state.cnfrmPassword
        }
        ).then((response) => {
            if (response){
                if(response.data.status === "error")
                {
                    const errors = response.data;
                    errors.userNameErr ? this.setState({userNameErr: errors.userNameErr}) : this.setState({userNameErr: ''});
                    errors.validEmailErr ? this.setState({emailErr: errors.validEmailErr}) : this.setState({emailErr: ''});
                    errors.firstNameErr ? this.setState({firstNameErr: errors.firstNameErr}) : this.setState({firstNameErr: ''});
                    errors.lastNameErr ? this.setState({lastNameErr: errors.lastNameErr}) : this.setState({lastNameErr: ''});
                    errors.passErr ? this.setState({passErr: errors.passErr}) : this.setState({passErr: ''});
                    errors.cnfrmPassErr ? this.setState({cnfrmPassErr: errors.cnfrmPassErr}) : this.setState({cnfrmPassErr: ''});
                } 
                else 
                {
                    this.setState({redirect : '/Login'});
                    console.log('C');
                }
                
            }

            else
            console.log('D');
                // this.setState({errUserName: ''})
        })
    };
    render(){
        if(this.state.redirect === '/Login')
        {
            return <Redirect to="/Login" />
        }
        return(
            <form method="POST" className="form-signin" onSubmit={this.signup}>
                {/* <img src={imgMatcha} alt="avatar" width="30%"/> */}
                    <h1 className="h3 mb-3 font-weight-normal">Create a new user</h1>
                    {/* <div className="form-group">
                        <button type="button" className="btn btn-lg btn-info mx-2">
                        <i className="fa-facebook"></i> Facebook</button>
                        <button type="button" className="btn btn-lg btn-info mx-2">
                        <i className="fa-google"></i> Google</button>
                    </div> */}
                    <div className="form-group">
                        <label htmlFor="inputUserName" className="sr-only">Username</label>
                        <input type="text" name="userName" onChange={this.onChange.bind(this)} value={this.state.userName} id="inputUserName" className="form-control" placeholder="Username" autoFocus />
                        <p>{this.state.userNameErr}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input type="email" name="email" onChange={this.onChange.bind(this)} value={this.state.email} className="form-control" placeholder="Email address"  autoFocus />
                        <p>{this.state.emailErr}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputFirstName" className="sr-only">First Name</label>
                        <input type="text" name="firstName" onChange={this.onChange.bind(this)} value={this.state.firstName} id="inputFirstName" className="form-control" placeholder="First Name"  autoFocus />
                        <p>{this.state.firstNameErr}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputLastName" className="sr-only">Last Name</label>
                        <input type="text" name="lastName" onChange={this.onChange.bind(this)} value={this.state.lastName} id="inputLastName" className="form-control" placeholder="Last Name"  autoFocus />
                        <p>{this.state.lastNameErr}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password" name="password" onChange={this.onChange.bind(this)} value={this.state.password} id="inputPassword" className="form-control" placeholder="Password"  />
                        <p>{this.state.passErr}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputCnfrmPassword" className="sr-only">Confirm Password</label>
                        <input type="password" name="cnfrmPassword" onChange={this.onChange.bind(this)} value={this.state.cnfrmPassword} id="inputCnfrmPassword" className="form-control" placeholder="Confirm Password"  />
                        <p>{this.state.cnfrmPassErr}</p>
                    </div>
                    <div className="checkbox mb-3">
                        <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2020</p>
            </form>
        )
    }
}

export default Signup;