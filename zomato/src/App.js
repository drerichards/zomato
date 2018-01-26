import React, { Component } from 'react'
import Search from './components/Search'
import Sidebar from './components/Sidebar'
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
      searchValue: '',
      cuisineArr: []
    }
  }

  getSearchValue = value => {
    this.setState({ searchValue: value })
  }

  addCuisineToArr = idArr => {
    idArr.map(elem => {
      return this.setState({ cuisineArr: this.state.cuisineArr.push(elem) })
    })
  }

  initiateSearch = entity_id => {
    let { searchValue, cuisineArr } = this.state
    let fetchUrl = `https://developers.zomato.com/api/v2.1/search?entity_id=${entity_id}&entity_type=city`
    searchValue = searchValue.trim()
    if (searchValue.length > 0) {
      searchValue = searchValue.replace(/ /g, "%20")
      fetchUrl = `${fetchUrl}&q=${searchValue}`
    }

    if (cuisineArr.length > 0) {
      let cuisineParams
      if (cuisineArr.length > 1) {
        cuisineParams = cuisineArr.join('%2C%20')
        fetchUrl = `${fetchUrl}&cuisines=${cuisineParams}`
      } else if (cuisineArr.length === 1){
        cuisineParams = cuisineArr
        fetchUrl = `${fetchUrl}&cuisines=${cuisineParams}`
      }
    }

    fetch(fetchUrl, {
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
          address: restaurant.restaurant.location.address,
          city: restaurant.restaurant.location.city,
          locale: restaurant.restaurant.location.locality_verbose,
          cuisines: restaurant.restaurant.cuisines,
          rating_num: restaurant.restaurant.user_rating.aggregate_rating,
          rating_text: restaurant.restaurant.user_rating.rating_text,
          votes: restaurant.restaurant.user_rating.votes,
          latitude: restaurant.restaurant.latitude,
          longitude: restaurant.restaurant.longitude,
          dollars: restaurant.restaurant.price_range,
          avg_cost_two: restaurant.restaurant.average_cost_for_two,
          reservation: restaurant.restaurant.has_table_booking,
          online_deliv: restaurant.restaurant.has_online_delivery,
          url: restaurant.restaurant.url
        }
      )))
      .then(data => this.setState({ restaurants: data }))
      .catch(err => console.log(err))
    this.setState({ searchValue: '', cuisineArr: [] })
  }

  showRestDetail = index => {
    const { restaurants } = this.state
    this.setState({ selectedRestaurant: restaurants[index] })
  }

  render() {
    return (
      <div className='App card'>
        <Search searchValue={this.state.searchValue} getSearchValue={this.getSearchValue} addCuisineToArr={this.addCuisineToArr} initiateSearch={this.initiateSearch} />
        <div className='SideAndResults'>
          <Sidebar cuisineArr={this.state.cuisineArr} />
          <ResultsList restaurants={this.state.restaurants} selectedRestaurant={this.state.selectedRestaurant} showRestDetail={this.showRestDetail} />
        </div>
      </div>
    )
  }
}

export default App
