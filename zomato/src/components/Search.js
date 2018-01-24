import React, { Component } from 'react'

class Search extends Component {
    onInputChange(e) {
        console.log(e.target.value)
    }
    
    render() {
        return (
            <div>
                <h2>Zomato</h2>
                <form>
                    <input type="search" name="" id="" onChange={e => {this.onInputChange(e)}}/>
                    <input type="button" value="Search" />
                </form>
            </div>
        )
    }
}
export default Search