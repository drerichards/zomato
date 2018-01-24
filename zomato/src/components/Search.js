import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../css/Search.css'

class Search extends Component {
    onInputChange(e) {
        this.props.getSearchValue(e.target.value)
    }

    onSearchClick(){
        this.props.initiateSearch()
    }
    
    render() {
        return (
            <div className='Search'>
                <h2>Zomato</h2>
                <form>
                    <input type='text' value={this.props.searchValue} className='searchValue' onChange={e => {this.onInputChange(e)}}/>
                    <input type='button' value='Search' className='searchButton' onClick={() => {this.onSearchClick()}}/>
                </form>
            </div>
        )
    }
}

Search.propTypes = {
    searchValue: PropTypes.string.isRequired,
    getSearchValue: PropTypes.func.isRequired,
    initiateSearch: PropTypes.func.isRequired
}
export default Search