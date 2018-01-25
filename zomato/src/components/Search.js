import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Input } from 'react-materialize'
import '../css/Search.css'

class Search extends Component {
    onInputChange(e) {
        this.props.getSearchValue(e.target.value)
    }

    onSearchClick() {
        this.props.initiateSearch()
    }

    render() {
        return (
            <div className='Search'>
                <h2>Zomato</h2>
                <form>
                    <Row>
                        <Input s={12} type='select' label="City Select" defaultValue='5'>
                            <option value='1'>Chicago</option>
                            <option value='2'>Houston</option>
                            <option value='3'>Los Angeles</option>
                            <option value='4'>Miami</option>
                            <option value='5'>New York City</option>
                            <option value='6'>Philadelphia</option>
                            <option value='7'>Washington D.C.</option>
                        </Input>
                    </Row>
                    <input type='text' value={this.props.searchValue} className='searchValue' onChange={e => { this.onInputChange(e) }} />
                    <input type='button' value='Search' className='searchButton waves-light btn' onClick={() => { this.onSearchClick() }} />
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