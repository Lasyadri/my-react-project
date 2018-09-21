import React, { Component } from 'react';
import '../../css/login.css';

import Logo from '../../images/login1.png';
import ForgotPassword from '../forgotPassword/ForgotPassword';
import Register from '../register/register';

function Warning(props) {
    console.log(props.value)
    if (!props.value) {
        return (
            <p className="text-danger">Please enter valid crredentials...</p>
        );
    }  
    return null;
}

class LogIn extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            isValidUser : true,
            showForgotPasswordPopup : false,
            showRegisterPopup : false
        }

        this.onClickLogin = this.onClickLogin.bind(this);
        this.onClickOnForgot = this.onClickOnForgot.bind(this);
        this.onClickRegister =  this.onClickRegister.bind(this);
    }

    onClickLogin(e) {
        e.preventDefault()
        let username = this.refs.username.value
        let password = this.refs.password.value
        if( username === "admin" && password === "123")
        {
            this.setState({
                isValidUser : true
            })
            this.props.onSignIn(username, password)
        }
        else
        {
            this.setState({
                user: null,
                isValidUser : false
            })
        }   
        console.log(username, password);
    }  

    onClickOnForgot(){
        console.log("this is Forgot Password",this);
        this.setState({
            showForgotPasswordPopup : !this.state.showForgotPasswordPopup
        })
    }

    onClickRegister(){
        console.log("this is Register",this);
        this.setState({
            showRegisterPopup : !this.state.showRegisterPopup
        })
    }

    render() {
      return (       
            <div className="log-in-container">
                <div className="log-in-outer-box">
                    <div className="log-in-outer-box-shadow">
                        <div className="log-in-inner-box">
                            <div className="log-in-input-logo">
                                <img src={Logo} className="img-circle log-in-logo" alt="login"/>                                
                            </div>
                            <form onSubmit={this.onClickLogin}>
                            <div className="log-in-input">
                                <input className="form-control input-sm" ref="username" type="text"  name="username" placeholder="Username"/>
                            </div>
                            <div className="log-in-input">
                                <input className="form-control input-sm" ref="password" type="text"  name="password" placeholder="Password"/>
                            </div>
                            <div className="log-in-input">
                                <button className="btn btn-success btn-block login" type="submit" value="Login" >LOG IN</button> 
                                <Warning value = {this.state.isValidUser}/>
                            </div>
                            </form>

                            <div className="log-in-input-bottom">                                
                                <button className="btn btn-link " type="button" onClick={this.onClickOnForgot}>Forgot Password?</button>                                
                                <button className="btn btn-warning register" type="button" onClick={this.onClickRegister}>Register</button>
                            </div>                            
                        </div>
                    </div>
                </div>
            
                {   this.state.showForgotPasswordPopup ? 
                    <ForgotPassword
                        text='Close Me'
                        closePopup={this.onClickOnForgot}
                    />
                    : null
                }  

                {   this.state.showRegisterPopup ? 
                    <Register
                        text='Close Me'
                        closePopup={this.onClickRegister}
                    />
                    : null
                }       
            </div> 
      );
    }
  }
  
  export default LogIn;
  