import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './components/Home' 
import List from './components/List' 
import Detail from './components/Detail' 
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/list">List</Link></li>
              <li><Link to="/detail">Detail</Link></li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/list" component={List} />
            <Route path="/detail" component={Detail} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
