import React, { Component } from 'react'
import Search from './components/Search'
import ResultsList from './components/ResultsList'
import './App.css'
import './css/App.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className='App'>
        <Search />
        <div>
          <ResultsList />
        </div>
      </div>
    )
  }
}

export default App
