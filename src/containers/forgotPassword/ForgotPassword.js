import React, { Component } from 'react';
import '../../css/forgotPassword.css';

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username : '',
            name:''
        };
        this.updateInput = this.updateInput.bind(this);
        this.onClickClose = this.onClickClose.bind(this);
        this.onClickSubmit = this.onClickSubmit.bind(this);
    }

    updateInput(e){            
            this.setState({
                username: e.target.value
            });
            
            console.log("e.target.value", e.target.value,);
            console.log("username",this.state.username);
    }

    onClickClose(){
        this.props.closePopup();
    }

    onClickSubmit(){
        console.log("username",this.state.username);
        if(this.state.username === 'admin')
        {
            alert("Password is 123");
            this.props.closePopup();
        }
        else{
            alert("Please enter valid user name");
        } 
    }

    render() {
      return (        
        <div className="popup">
            <form onSubmit={this.onClickSubmit}>
            <div className="forgotPassword-container popup_inner">
                <div className="forgotPassword-feilds">
                    <label className="label label-default"> Enter username</label>
                    <input className="form-control" type="text" id="username" value={this.username} onChange={this.updateInput}/>
                </div> 
                <button className="btn btn-primary sendOtp" type="submit">Check Password</button>
                <button className="btn btn-primary sendOtp" type="button" onClick={this.onClickClose}>Close</button>
            </div>
            </form>
        </div>
      );
    }
  }
  
  export default ForgotPassword;