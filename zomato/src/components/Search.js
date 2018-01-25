import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Input } from 'react-materialize'
import '../css/Search.css'

class Search extends Component {
    onInputChange(e) {
        this.props.getSearchValue(e.target.value)
    }

    onSearchClick() {
        const citySelector = document.getElementsByClassName('select-dropdown')[0].getAttribute('value')
        let entity_id
        switch (citySelector) {
            case 'Chicago':
                entity_id = 292
                break
            case 'Houston':
                entity_id = 277
                break
            case 'Los Angeles':
                entity_id = 281
                break
            case 'Miami':
                entity_id = 291
                break
            case 'New York City':
                entity_id = 280
                break
            case 'Philadelphia':
                entity_id = 287
                break
            case 'Washington D.C.':
                entity_id = 283
                break
            default:
                entity_id = 280
                break
        }
        this.props.initiateSearch(entity_id)
    }

    render() {
        return (
            <div className='Search'>
                <h2>Zomato</h2>
                <form>
                    <Row>
                        <Input s={12} type='select' id='citySelector' label="City Select" defaultValue='5'>
                            <option value='1'>Chicago</option>
                            <option value='2'>Houston</option>
                            <option value='3'>Los Angeles</option>
                            <option value='4'>Miami</option>
                            <option value='5'>New York City</option>
                            <option value='6'>Philadelphia</option>
                            <option value='7'>Washington D.C.</option>
                        </Input>
                    </Row>
                    <input type='text' value={this.props.searchValue} className='searchValue' placeholder='Enter a keyword or leave blank' onChange={e => { this.onInputChange(e) }} />
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