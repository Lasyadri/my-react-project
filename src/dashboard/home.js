import React, { Component } from 'react';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {};      
    }
    render() {
        return (
            <div>
                <h1> 
                    Welcome to dashboard......
                    {/* {this.state.user.username}{this.state.user.password} */}
                </h1>
                {/* <h6></h6> */}
            </div>
        );
    }
}

export default Home;