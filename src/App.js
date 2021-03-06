import React from 'react';
import Header from './components/Header';
import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Detail from './components/Detail';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
     <Router>
       <Header/>
       <Switch>
           <Route path="/" exact component={Home}/>
           <Route path="/detail" exact component={Detail}/>
           <Route path="/login" exact component={Login}/>

       </Switch>
     </Router> 
      
    </div>
  );
}

export default App;
