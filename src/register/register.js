import React, { Component } from 'react';
import '../css/register.css';

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {};
        this.onClickClose = this.onClickClose.bind(this);
        this.onClickSubmit = this.onClickSubmit.bind(this);
    }

    onClickClose(){
        this.props.closePopup();
    }
    
    onClickSubmit(){
        console.log("SUbmit");
    }
    render() {
      return (   
        <div className="popup">     
        <div className="register-container">
            <div className="register-head">
                <h3>REGISTER</h3>
            </div>
            <div className="register-body">
                <div className="feilds">
                    <label className="label label-default"> First Name</label>
                    <input className="form-control textBox" type="text"/>
                </div>
                <div className="feilds">
                    <label className="label label-default"> Last Name</label>
                    <input className="form-control textBox" type="text"/>
                </div>
                <div className="feilds">
                    <label className="label label-default"> Mobile</label>
                    <input className="form-control textBox" type="text"/>
                </div>
                <div className="feilds">
                    <label className="label label-default"> Email</label>
                    <input className="form-control textBox" type="text"/>
                </div>
                <div className="feilds">
                    <label className="label label-default"> Password</label>
                    <input className="form-control textBox" type="text"/>
                </div>
                <div className="feilds">
                    <label className="label label-default"> Re-Enter Password</label>
                    <input className="form-control textBox" type="text"/>
                </div>
                <div className="feilds">                    
                    <label><input type="checkbox" value=""/> I agree to the<button className="btn btn-link " type="button" >Terms & Conditions</button></label>
                </div>
                <div className="feilds">                    
                    <button className="btn btn-primary submit" type="button">Register</button>
                    <button className="btn btn-primary submit" type="button" onClick={this.onClickClose}>Close</button>
                </div>
            </div>
            </div>
        </div>
      );
    }
  }
  
  export default Register;
  