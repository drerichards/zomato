import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Detail from './Detail'

class ResultsList extends Component {

    render() {
        return (
            <div className='body-wrap'>
                <h2>ResultsList</h2>
                <Detail />
            </div>
        )
    }
}

ResultsList.propTypes = {

}
export default ResultsList