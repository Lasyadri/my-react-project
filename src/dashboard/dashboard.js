import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
// import Workbook from 'react-excel-workbook';

import '../css/dashboard.css';
import Home from './home';
import MyProfile from '../myProfile/myProfile';
import Users from '../users/users';
import Product from '../containers/product/product';

import Logo from '../images/logo.png';
import LogoText from '../images/logo_text.png';

const data1 = [
  {
    foo: '123',
    bar: '456',
    baz: '789'
  },
  {
    foo: 'abc',
    bar: 'dfg',
    baz: 'hij'
  },
  {
    foo: 'aaa',
    bar: 'bbb',
    baz: 'ccc'
  }
]

const data2 = [
  {
    aaa: 1,
    bbb: 2,
    ccc: 3
  },
  {
    aaa: 4,
    bbb: 5,
    ccc: 6
  }
]

class Dashboard extends Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            user: this.props.user,
        }      
        this.onClickLogout = this.onClickLogout.bind(this);
        // this.onClickLogout = this.props.onSignOut.bind(this);
        // this.getProps = this.getProps.bind(this);
    }

    onClickLogout(){
        this.props.onSignOut();
        // this.setState({user:null});
    }

    // getProps(){
    //     return this.state.user;
    // }

    render() {
        return (
            <div className="dashboard">  
                <div className="header">
                  <img src={Logo} className="header-logo float-left" alt="Logo"/> 
                  <img src={LogoText} className="header-text" alt="Logo Text"/>
                </div>              
                <div className="navigation">   
                  <ul>
                    <li className="col-sm-2 active"><button className="btn btn-link"><Link to='/'>Dashboard</Link></button></li>
                    <li className="col-sm-2"><button className="btn btn-link"><Link to='/product'>Products</Link></button></li>
                    <li className="col-sm-2"><button className="btn btn-link"><Link to='/profile'>My Profile</Link></button></li>
                    
                    {/* <li className="col-sm-2"><button className="btn btn-link"><Link to='/profileee'>My Profileee</Link></button></li> */}
                    {/* <li className="col-sm-2"><button className="btn btn-link"><Link to='/users'>Users</Link></button></li>                     */}
                    {/* <li className="col-sm-2"><button className="btn btn-link"><Link to='/schedule'>Schedule</Link></button></li> */}
                    <li className="col-sm-2" style={{float:'right', height:'66', marginTop:'15px'}} onClick={this.onClickLogout}><button className="btn btn-link">Log out</button></li>
                  </ul>       
                  
                  {/* <Header /> */}                                  
                </div>
                <Main />  

  

            </div>
        );
    }
}

export default Dashboard;


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/profile' component={MyProfile}/>
      <Route path='/product' component={Product}/>
      {/* <Route exact path="/profileee"> <MyProfile  user={this.state.user}/> </Route> */}
      <Route path='/users' component={Users}/>
      <Route path='/schedule' component={Schedule}/>
    </Switch>
  </main>
)
/*
const Roster = () => (
  <Switch>
    <Route exact path='/roster' component={FullRoster}/>
    <Route path='/roster/:number' component={Player}/>
  </Switch>
)

const FullRoster = () => (
  <div>
    <ul>
      {
        PlayerAPI.all().map(p => (
          <li key={p.number}>
            <Link to={`/roster/${p.number}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

const PlayerAPI = {
  players: [
    { number: 1, name: "Ben Blocker", position: "G" },
    { number: 2, name: "Dave Defender", position: "D" },
    { number: 3, name: "Sam Sweeper", position: "D" },
    { number: 4, name: "Matt Midfielder", position: "M" },
    { number: 5, name: "William Winger", position: "M" },
    { number: 6, name: "Fillipe Forward", position: "F" }
  ],
  all: function() { return this.players},
  get: function(id) {
    const isPlayer = p => p.number === id
    return this.players.find(isPlayer)
  }
}

const Player = (props) => {
  console.log("comes here");
  const player = PlayerAPI.get(
    parseInt(props.match.params.number, 10)
  )
  if (!player) {
    return <div>Sorry, but the player was not found</div>
  }
  return (
    <div>
      <h1>{player.name} (#{player.number})</h1>
      <h2>Position: {player.position}</h2>
      <Link to='/roster'>Back</Link>
    </div>
  )
}*/

const Schedule = () => (
  <div>
    <ul>
      <li>6/5 @ Evergreens</li>
      <li>6/8 vs Kickers</li>
      <li>6/14 @ United</li>
    </ul>
  </div>
)


// For this demo, we are using the UMD build of react-router-dom
// const {
//   HashRouter,
//   Switch,
//   Route,
//   Link
// } = ReactRouterDOM

// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.


// The FullRoster iterates over all of the players and creates
// a link to their profile page.


// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.


// The Roster component matches one of two different routes
// depending on the full pathname




// const Home = () => (
//   <div>
//    <h1> 
//        Welcome to dashboard......
      //  {/* {this.state.user.username}{this.state.user.password} *///}/*
//     </h1>
//     {/* <h6></h6> */}
//   </div>
// )

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"


/*
// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
 <header> 
    <nav>
      <div>
        <ul className="nav nav-tabs navigation">
            <li role="presentation" className=" col-sm-2"><Link to='/'>Home</Link></li>
            <li role="presentation" className="col-sm-2"><Link to='/roster'>Roster</Link></li>
            <li role="presentation" className="col-sm-2"><Link to='/schedule'>Schedule</Link></li>
            <li role="presentation" className="col-sm-2" onClick={this.onClickLogout}><a href="#">Log out</a></li>
        </ul>
      </div>
    </nav>
  </header>
)
const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)
*/
/*
// This demo uses a HashRouter instead of BrowserRouter
// because there is no server to match URLs
ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('root'))

*/