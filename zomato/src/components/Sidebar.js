import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import '../css/Sidebar.css'

class Sidebar extends PureComponent {
    render() {
        return (
            <div className='Sidebar'>
                <form action="#" className='card'>
                    <p>
                        <input type="checkbox" id="1" />
                        <label htmlFor="1">American</label>
                    </p>
                    <p>
                        <input type="checkbox" id="152" />
                        <label htmlFor="152">African</label>
                    </p>
                    <p>
                        <input type="checkbox" id="3" />
                        <label htmlFor="3">Asian</label>
                    </p>
                    <p>
                        <input type="checkbox" id="193" />
                        <label htmlFor="193">BBQ</label>
                    </p>
                    <p>
                        <input type="checkbox" id="158" />
                        <label htmlFor="158">Caribbean</label>
                    </p>
                    <p>
                        <input type="checkbox" id="40" />
                        <label htmlFor="40">Fast Food</label>
                    </p>
                    <p>
                        <input type="checkbox" id="143" />
                        <label htmlFor="143">Healthy Food</label>
                    </p>
                    <p>
                        <input type="checkbox" id="148" />
                        <label htmlFor="148">Indian</label>
                    </p>
                    <p>
                        <input type="checkbox" id="55" />
                        <label htmlFor="55">Italian</label>
                    </p>
                    <p>
                        <input type="checkbox" id="136" />
                        <label htmlFor="136">Latin American</label>
                    </p>
                    <p>
                        <input type="checkbox" id="137" />
                        <label htmlFor="137">Middle Eastern</label>
                    </p>
                    <p>
                        <input type="checkbox" id="83" />
                        <label htmlFor="83">Seafood</label>
                    </p>
                    <p>
                        <input type="checkbox" id="461" />
                        <label htmlFor="461">Soul Food</label>
                    </p>
                    <p>
                        <input type="checkbox" id="95" />
                        <label htmlFor="95">Thai</label>
                    </p>
                    <p>
                        <input type="checkbox" id="308" />
                        <label htmlFor="308">Vegetarian</label>
                    </p>
                </form>
            </div>
        )
    }
}

Sidebar.propTypes = {

}

export default Sidebar