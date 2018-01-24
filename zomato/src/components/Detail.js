import React from 'react'
import PropTypes from 'prop-types'

const Detail = ({ name, address, locale }) => {
    return (
        <div>
            <h2>Detail</h2>
            {name}
            {address}
            {locale}

        </div>
    )
}

Detail.propTypes = {
    name: PropTypes.string,
    address: PropTypes.string,
    locale: PropTypes.string,
    cuisines: PropTypes.string,
    rating_num: PropTypes.string,
    rating_text: PropTypes.string,
    url: PropTypes.string
}
export default Detail
