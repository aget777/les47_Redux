import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { increment, decrement } from './models/my-reducer.actions';
import { Switch, Route, Link } from 'react-router-dom';
import UserPage from './pages/UserPage';
import GoodPage from './pages/GoodPage';
import {history} from './history';
import GoodListPage from './pages/GoodListPage';
import {userPath, goodsListPath, goodPath} from './paths'

class App extends Component {
  constructor(){
    super();
    //this.increment = this.increment.bind(this);
  
  }


  // increment() {
  //   console.log('increment');
  //   this.props.dispatch(incrementAction());
  // }


  render(){
    return (
      <div className="App" onClick={this.increment}>
        Hi, {this.props.username}<br/>
        

        <h1>Page</h1>
        <Link to={userPath()}>Go to user</Link> | <Link to={goodsListPath()}> Go to good</Link><br/>
     

        <Switch>
          <Route path={userPath()} component={UserPage} />
          <Route path={goodPath()} component={GoodPage} />
          <Route path={goodsListPath()} component={GoodListPage} />
        </Switch>
       
      </div>
    );
  }
}


const mapDispatchToProps = {
  increment,
  decrement,
}


export default connect(mapStateToProps,mapDispatchToProps)(App);

function mapStateToProps(state){
  return{
    username: state.user.firstName,
    name: state.good.name,
    count: state.good.value,
  }
}


// function mapDispatchToProps(dispatch){
//   return{
//     increment: () => dispatch(incrementAction()),
//     addPayload: (value) => dispatch(addPayloadAction(value)),
//     double: () => dispatch(addPayloadAction(2))
//   }
// }



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


