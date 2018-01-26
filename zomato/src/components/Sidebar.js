import React from 'react'
import '../css/Sidebar.css'

const Sidebar = () => {
    const onCuisineClick = (e) => {
        e.currentTarget.classList.contains('checked') ?
            e.currentTarget.classList.remove('checked')
            : e.currentTarget.classList.add('checked')
    }
    return (
        <div className='Sidebar'>
            <form action="#" className='card'>
                <p>
                    <input type="checkbox" id="1" onClick={(e) => { onCuisineClick(e) }} />
                    <label htmlFor="1">American</label>
                </p>
                <p>
                    <input type="checkbox" id="152" onClick={(e) => { onCuisineClick(e) }} />
                    <label htmlFor="152">African</label>
                </p>
                <p>
                    <input type="checkbox" id="3" onClick={(e) => { onCuisineClick(e) }} />
                    <label htmlFor="3">Asian</label>
                </p>
                <p>
                    <input type="checkbox" id="193" onClick={(e) => { onCuisineClick(e) }} />
                    <label htmlFor="193">BBQ</label>
                </p>
                <p>
                    <input type="checkbox" id="158" onClick={(e) => { onCuisineClick(e) }} />
                    <label htmlFor="158">Caribbean</label>
                </p>
                <p>
                    <input type="checkbox" id="40" onClick={(e) => { onCuisineClick(e) }} />
                    <label htmlFor="40">Fast Food</label>
                </p>
                <p>
                    <input type="checkbox" id="143" onClick={(e) => { onCuisineClick(e) }} />
                    <label htmlFor="143">Healthy Food</label>
                </p>
                <p>
                    <input type="checkbox" id="148" onClick={(e) => { onCuisineClick(e) }} />
                    <label htmlFor="148">Indian</label>
                </p>
                <p>
                    <input type="checkbox" id="55" onClick={(e) => { onCuisineClick(e) }} />
                    <label htmlFor="55">Italian</label>
                </p>
                <p>
                    <input type="checkbox" id="136" onClick={(e) => { onCuisineClick(e) }} />
                    <label htmlFor="136">Latin American</label>
                </p>
                <p>
                    <input type="checkbox" id="137" onClick={(e) => { onCuisineClick(e) }} />
                    <label htmlFor="137">Middle Eastern</label>
                </p>
                <p>
                    <input type="checkbox" id="83" onClick={(e) => { onCuisineClick(e) }} />
                    <label htmlFor="83">Seafood</label>
                </p>
                <p>
                    <input type="checkbox" id="461" onClick={(e) => { onCuisineClick(e) }} />
                    <label htmlFor="461">Soul Food</label>
                </p>
                <p>
                    <input type="checkbox" id="95" onClick={(e) => { onCuisineClick(e) }} />
                    <label htmlFor="95">Thai</label>
                </p>
                <p>
                    <input type="checkbox" id="308" onClick={(e) => { onCuisineClick(e) }} />
                    <label htmlFor="308">Vegetarian</label>
                </p>
            </form>
        </div>
    )
}

export default Sidebar