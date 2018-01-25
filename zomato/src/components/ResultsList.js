import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Collapsible, CollapsibleItem, Button } from 'react-materialize'
import Detail from './Detail'
import '../css/ResultsList.css'

class ResultsList extends Component {
    onListItemClick(index) {
        this.props.showRestDetail(index)
    }

    renderList() {
        return this.props.restaurants.map((item, i) => {
            return <CollapsibleItem key={i} header={item.name}>
                <div>
                    <p>Locale: {item.locale}</p>
                    <p>Cuisines: {item.cuisines}</p>
                    <p>Score: {item.rating_num} out of 5</p>
                </div>
                <Button waves='light' onClick={() => this.onListItemClick(i)}>More</Button>
            </CollapsibleItem>
        })
    }

    render() {
        return (
            <div className='ResultsList'>
                <div className='results'>
                    <span>
                        <h3>Results</h3>
                        <h5>{this.props.restaurants.length} Restaurants</h5>
                    </span>
                    <hr />
                    <section>
                        {this.props.restaurants.length > 0 ? <Collapsible popout accordion>{this.renderList()}</Collapsible> : 'No Results'}
                    </section>
                </div>
                {this.props.selectedRestaurant !== null ?
                    <Detail name={this.props.selectedRestaurant.name}
                        address={this.props.selectedRestaurant.address}
                        city={this.props.selectedRestaurant.city}
                        cuisines={this.props.selectedRestaurant.cuisines}
                        rating_num={this.props.selectedRestaurant.rating_num}
                        rating_text={this.props.selectedRestaurant.rating_text}
                        votes={this.props.selectedRestaurant.votes}
                        latitude={this.props.selectedRestaurant.latitude}
                        longitude={this.props.selectedRestaurant.longitude}
                        dollars={this.props.selectedRestaurant.dollars}
                        avg_cost_two={this.props.selectedRestaurant.avg_cost_two}
                        reservation={this.props.selectedRestaurant.reservation}
                        online_deliv={this.props.selectedRestaurant.online_deliv}
                        url={this.props.selectedRestaurant.url} /> : <Detail />}

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