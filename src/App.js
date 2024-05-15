import {Component} from "react"

import {Route,Switch} from "react-router-dom"

import Home from "./components/Home"



import "./App.css"

import Login from "./components/Login"

import ProtectedRouter from "./components/ProtectedRouter"

class App extends Component{


  render(){

    return(
      <div>
        <Switch>
        <ProtectedRouter exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        </Switch>
      </div>
      
    )
  }
}

export default App