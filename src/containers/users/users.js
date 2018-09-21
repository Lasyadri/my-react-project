import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import '../css/users.css';
import data from '../../JSON/data.json';

class Users extends Component{
    constructor(props){
        super(props);
        this.state = {};      
    }
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/users' component={AllUsers}/>
                    <Route path='/users/:number' component={User}/>
                </Switch>
            </div>
        );
    }
}

export default Users;


const AllUsers = () => (
    <div>
      {/* <table className="table table-bordered table-striped table-hover">
          <caption>List of users</caption>
          <thead className="head">
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Graduation</th>                
            </tr>
          </thead>
          <tbody className="body">              
              {
                  UserAPI.all().map(p => (
                    <tr>
                      <th>{p.number}</th>
                      <td className="text"><Link to={`/users/${p.number}`}>{p.name}</Link></td>
                      <td>{p.graduation}</td>
                      {/* // <li key={p.number}>
                      //     <Link to={`/users/${p.number}`}>{p.name}</Link>
                      // </li> */}
                    {/* </tr>
                  ))
              }               
              
          </tbody>
      </table> */} */}
      <ul>
        {
          data.user.map(function(user){
            return <li><Link to={`/users/${user.number}`}>{user.name}</Link></li>;
          })
        }
        </ul>     
    </div>
  )
  

  const UserAPI = {
    // users: [
    //   { number: 1, name: "Ben Blocker", graduation: "MBA" },
    //   { number: 2, name: "Dave Defender", graduation: "MD" },
    //   { number: 3, name: "Sam Sweeper", graduation: "MD" },
    //   { number: 4, name: "Matt Midfielder", graduation: "MCA" },
    //   { number: 5, name: "William Winger", graduation: "MA" },
    //   { number: 6, name: "Fillipe Forward", graduation: "BSC" }
    // ],
    // all: function() { 
    //   return this.users
    // },
    get: function(id) {
      const isUser = p => p.number === id
      return this.users.find(isUser)
    }
  }

  const User = (props) => {
    console.log("comes here");
    const user = UserAPI.get(
      parseInt(props.match.params.number, 10)
    )
    if (!user) {
      return <div>Sorry, but the user was not found</div>
    }
    return (
      <div>
        <h1>{user.name} (#{user.number})</h1>
        <h2>graduation: {user.graduation}</h2>
        <Link to='/users'>Back</Link>
      </div>
    )
  }