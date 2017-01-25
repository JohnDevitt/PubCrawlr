
import Pub from './pub';
import React from 'react';
import ReactDOM from 'react-dom';

const Tour = ({tour, remove}) => (
    <div className = "tour">
        <h2>Bar List</h2>
        <br></br>
        <ul className="tourList">
            {tour.map (pub => <Pub pub_data={pub} remove={remove}/>)}
        </ul>
    </div>
)

export default Tour
