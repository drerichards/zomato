import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Detail from './Detail'
import '../css/ResultsList.css'

class ResultsList extends Component {

    onListItemClick(index) {
        this.props.showRestDetail(index)
    }
    renderList() {
        return this.props.restaurants.map((item, i) => {
            return <div key={i} className='list_item' onClick={() => this.onListItemClick(i)}><p>{item.name}</p></div>
        })
    }
    render() {
        return (
            <div className='ResultsList'>
                <div>
                    <h2>Results List</h2>
                    <section>
                        {this.props.restaurants.length > 0 ? this.renderList() : 'No Results'}
                    </section>
                </div>
                {this.props.selectedRestaurant !== null ?
                    <Detail name={this.props.selectedRestaurant.name}
                        address={this.props.selectedRestaurant.address}
                        locale={this.props.selectedRestaurant.locale}
                        cuisines={this.props.selectedRestaurant.cuisines}
                        rating_num={this.props.selectedRestaurant.rating_num}
                        rating_text={this.props.selectedRestaurant.rating_text}
                        url={this.props.selectedRestaurant.url} /> : <Detail/>}

            </div>
        )
    }
}

ResultsList.propTypes = {
    restaurants: PropTypes.array,
    selectedRestaurant: PropTypes.object,
    showRestDetail: PropTypes.func.isRequired
}
export default ResultsList