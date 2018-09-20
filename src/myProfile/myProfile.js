import React, { Component } from 'react';

class MyProfile extends Component{
    constructor(props){
        super(props);
        console.log("my profile",props);
        this.state = {
            user: this.props.user,
        };
        // console.log("this.state.user",this.props.user);
        // this.getUser = this.getUser.bind(this);       
    }

    // getUser(){
    //     this.props.getUser();
    // } 

    render() {
        return (
            <div>
                <h1> 
                    This is my profile
                </h1>
                {/* <h6></h6> */}
            </div>
        );
    }
}

export default MyProfile;