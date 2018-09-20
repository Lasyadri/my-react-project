import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';

import LogIn from '../containers/logIn/LogIn';
import Dashboard from '../dashboard/dashboard';
import Footer from '../components/footer/Footer';
import Router from './Router';

import '../css/App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null
        }

        this.logIn = this.logIn.bind(this);
        this.logOut = this.logOut.bind(this);
    }

    logIn(username, password) {
        //set user credentials
        this.setState({
            user: {
                username,
                password
            }
        })
    }

    logOut() {
        // clear out user from state
        this.setState({ user: null })
    }

    render() {
        return (
            <div className="main-background">

                {
                    (this.state.user) ?
                        <HashRouter>
                            <Dashboard user={this.state.user}
                                onSignOut={this.logOut}
                            // onSignIn={this.logIn}
                            />
                        </HashRouter>
                        :
                        <LogIn onSignIn={this.logIn} />
                }
                <div >
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;