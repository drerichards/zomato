import React, { Component } from 'react'
import Search from './components/Search'
import ResultsList from './components/ResultsList'
import { USER_KEY } from './config'
import './App.css'
import './css/App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurants: [],
      selectedRestaurant: null,
      searchValue: ''
    }
  }

  getSearchValue = value => {
    this.setState({ searchValue: value })
  }

  initiateSearch = () => {
    fetch('https://developers.zomato.com/api/v2.1/search', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'user-key': USER_KEY
      }
    })
      .then(response => response.json())
      .then(parsedJSON => parsedJSON.restaurants.map(restaurant => (
        {
          name: restaurant.restaurant.name,
          cuisines: restaurant.restaurant.cuisines,
          address: restaurant.restaurant.location.address,
          locale: restaurant.restaurant.location.locality_verbose,
          rating_num: restaurant.restaurant.user_rating.aggregate_rating,
          rating_text: restaurant.restaurant.user_rating.rating_text,
          url: restaurant.restaurant.url 
        }
      )))
      .then(data => this.setState({ restaurants: data }))
      .catch(err => console.log(err))
    this.setState({ searchValue: '' })
  }

showRestDetail = index => {
  const {restaurants, selectedRestaurant} = this.state
  this.setState({ selectedRestaurant: restaurants[index]})
}

  render() {
    return (
      <div className='App'>
        <Search searchValue={this.state.searchValue} getSearchValue={this.getSearchValue} initiateSearch={this.initiateSearch} />
        <ResultsList restaurants={this.state.restaurants} selectedRestaurant={this.state.selectedRestaurant} showRestDetail={this.showRestDetail}/>
      </div>
    )
  }
}

export default App
