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
      reviews: [],
      selectedRestaurant: null,
      selectedRestID: null,
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
    let fetchRestaUrl = `https://developers.zomato.com/api/v2.1/search?entity_id=${entity_id}&entity_type=city`
    searchValue = searchValue.trim()
    if (searchValue.length > 0) {
      searchValue = searchValue.replace(/ /g, "%20")
      fetchRestaUrl = `${fetchRestaUrl}&q=${searchValue}`
    }

    if (cuisineArr.length > 0) {
      let cuisineParams
      if (cuisineArr.length > 1) {
        cuisineParams = cuisineArr.join('%2C%20')
        fetchRestaUrl = `${fetchRestaUrl}&cuisines=${cuisineParams}`
      } else if (cuisineArr.length === 1) {
        cuisineParams = cuisineArr
        fetchRestaUrl = `${fetchRestaUrl}&cuisines=${cuisineParams}`
      }
    }

    fetch(fetchRestaUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'user-key': USER_KEY
      }
    })
      .then(response => response.json())
      .then(parsedJSON => parsedJSON.restaurants.map(result => (
        {
          resta_id: result.restaurant.R.res_id,
          name: result.restaurant.name,
          address: result.restaurant.location.address,
          city: result.restaurant.location.city,
          locale: result.restaurant.location.locality_verbose,
          cuisines: result.restaurant.cuisines,
          rating_num: result.restaurant.user_rating.aggregate_rating,
          rating_text: result.restaurant.user_rating.rating_text,
          votes: result.restaurant.user_rating.votes,
          latitude: result.restaurant.location.latitude,
          longitude: result.restaurant.location.longitude,
          dollars: result.restaurant.price_range,
          avg_cost_two: result.restaurant.average_cost_for_two,
          reservation: result.restaurant.has_table_booking,
          online_deliv: result.restaurant.has_online_delivery,
          url: result.restaurant.url
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

  initiateReviewFetch = id => {
    fetch(`https://developers.zomato.com/api/v2.1/reviews?res_id=${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'user-key': USER_KEY
      }
    })
      .then(response => response.json())
      .then(parsedJSON => parsedJSON.user_reviews.map(result => (
        {
          rating: result.review.rating,
          review_time: result.review.review_time_friendly,
          review_text: result.review.review_text,
          rating_title: result.review.rating_text,
          user: result.review.user.name
        }
      )))
      .then(data => this.setState({ reviews: data }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className='App card'>
        <Search searchValue={this.state.searchValue} 
        getSearchValue={this.getSearchValue} 
        addCuisineToArr={this.addCuisineToArr} 
        initiateSearch={this.initiateSearch} />
        <div className='SideAndResults'>
          <Sidebar cuisineArr={this.state.cuisineArr} />
          <ResultsList restaurants={this.state.restaurants} 
          selectedRestaurant={this.state.selectedRestaurant} 
          showRestDetail={this.showRestDetail} 
          initiateReviewFetch={this.initiateReviewFetch} 
          reviews={this.state.reviews}/>
        </div>
      </div>
    )
  }
}

export default App
