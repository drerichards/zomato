import React from 'react'
import PropTypes from 'prop-types'
import '../css/Detail.css'

const Detail = ({ name, address, city, votes, latitude, longitude, dollars, avg_cost_two, reservation, online_deliv, cuisines, rating_num, rating_text, url }) => {
    function dollarSign() {
        const dollarDiv = document.getElementById('dollar')
        for (let i = 0; i < dollars; i++) {
            dollarDiv.innerHTML += '$'
        }
    }

    return (
        <div className='Detail'>
            <div className={name ? 'card' : 'card hide'}>
                <div className="card-content">
                    <h4>{name}</h4>
                    <hr />
                </div>
                <div className="card-tabs">
                    <ul className="tabs tabs-fixed-width">
                        <li className="tab"><a href="#location">Location</a></li>
                        <li className="tab"><a href="#ratings" className='active'>Ratings</a></li>
                        <li className="tab"><a href="#info">Info</a></li>
                    </ul>
                </div>
                <div className="card-content card-bottom">
                    <div id="location">
                        <p>Address: <span>{address}</span></p>
                        <p>City: <span>{city}</span></p>
                    </div>
                    <div id="ratings">
                        <p>Rating: <span>{rating_text}</span></p>
                        <p>Score: <span>{rating_num} out of 5</span></p>
                        <p>Votes: <span>{votes}</span></p>
                    </div>
                    <div id="info">
                        <p>Cuisines: <span>{cuisines}</span></p>
                        <p>Price Range: <span id='dollar'>{dollarSign()}</span></p>
                        <p>Average cost for two diners: <span>${avg_cost_two}</span></p>
                        <p>Table Reservation: <span>{reservation === 0 ? 'No' : 'Yes'}</span></p>
                        <p>Online Delivery: <span>{online_deliv === 0 ? 'No' : 'Yes'}</span></p>
                        <p>Visit Website: <a href={url} target="_blank">{name}</a> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

Detail.propTypes = {
    name: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    latitude: PropTypes.string,
    longitude: PropTypes.string,
    cuisines: PropTypes.string,
    rating_num: PropTypes.string,
    rating_text: PropTypes.string,
    votes: PropTypes.string,
    dollars: PropTypes.number,
    avg_cost_two: PropTypes.number,
    reservation: PropTypes.number,
    online_deliv: PropTypes.number,
    url: PropTypes.string
}
export default Detail
