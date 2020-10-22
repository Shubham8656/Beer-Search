import React from 'react';
import {Route,Switch} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Favourite from './components/Favourite/Favourite'
function App() {
  return (
      <div className="App">
        <Header/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/favourite' component={Favourite}/>
        </Switch>        
      </div>
  );
}

export default App;
