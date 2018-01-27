import React from 'react'
import PropTypes from 'prop-types'
import '../css/Detail.css'

const Detail = ({ name, address, city, votes, dollars, avg_cost_two, reservation, online_deliv, cuisines, rating_num, rating_text, url, reviews }) => {
    function dollarSign() {
        let dollarDiv = document.getElementById('dollar')
        dollarDiv.innerHTML = ''
        let elem = document.createElement('div')
        elem.setAttribute('style', 'display: inline-block;')
        dollarDiv.appendChild(elem)
        for (let i = 0; i < dollars; i++) {
            elem.innerHTML += '$'
        }
    }

    function renderReviews() {
        return reviews.map(function (review, i) {
            return <div key={i} className='card'>
                <div className="card-content white-text">
                    <span className="card-title">''{review.rating_title}''</span>
                    <p>{review.review_text}</p>
                    <p>- {review.user}</p>
                    <div className="card-action">
                        <p>Rating: {review.rating}</p>
                        <p>{review.review_time}</p>
                    </div>
                </div>
            </div>
        })
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
                        <li className="tab"><a href="#location" className='active'>Location</a></li>
                        <li className="tab"><a href="#info">Info</a></li>
                        <li className="tab"><a href="#reviews">Reviews</a></li>
                    </ul>
                </div>
                <div className="card-content card-bottom">
                    <div id="location">
                        <p>Address: <span>{address}</span></p>
                        <p>City: <span>{city}</span></p>
                    </div>
                    <div id="info">
                        <p>Cuisines: <span>{cuisines}</span></p>
                        <p>Price Range: <span id='dollar'>{dollars ? dollarSign() : ''}</span></p>
                        <p>Average cost for two diners: <span>${avg_cost_two}</span></p>
                        <p>Table Reservation: <span>{reservation === 0 ? 'No' : 'Yes'}</span></p>
                        <p>Online Delivery: <span>{online_deliv === 0 ? 'No' : 'Yes'}</span></p>
                        <p>Visit Website: <a href={url} target="_blank">{name}</a> </p>
                    </div>
                    <div id="reviews">
                        <p>Rating: <span>{rating_text}</span></p>
                        <p>Score: <span>{rating_num} out of 5</span></p>
                        <p>Votes: <span>{votes}</span></p>
                        <hr />
                        <section className="reviewDiv">
                            <h5>{reviews ? reviews.length : 'No'} Reviews:</h5>
                            <div className="reviewScroll">
                                {reviews ? renderReviews() : ''}
                            </div>
                        </section>
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
    url: PropTypes.string,
    reviews: PropTypes.array
}
export default Detail
