import { Component } from "react";
import Axios from 'axios';
import { Redirect }  from 'react-router-dom';

class Logout extends Component {
    state = {
        Redirect : ''
    }

    logout = () => {
        Axios.get('http://localhost:3001/users/logout', { withCredentials : true })
        .then((response) => {
            if(response.data.status === 'Success')
            { 
                // console.log(response.data.status);
                this.setState({ Redirect : '/' });
            }
        }).catch((error) => {
            console.log(error);
        })
    }
    componentDidMount() {
        this.props.logout();
        this.logout();
    }
    render(){
        if(this.state.Redirect === "/")
        {
            return(<Redirect to="/" />)
        } else {
            return(<div>you cant Logout due to uknown error #DEV ==:: to treat later</div>)
        }
    }
}

export default Logout;