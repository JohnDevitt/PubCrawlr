
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';

const Pub = props => (
    <div className='pub_info'>
        <PubName pub_name={props.pub_data.pub_name} />
        <PubLocation pub_location={props.pub_data.pub_location} />
        <Button bsStyle="success" bsSize="small"
            onClick = {() => props.remove(props.pub_data)}>
            Remove Pub
        </Button>
        <br></br>
    </div>
);

const PubName = ({pub_name}) => (
    <div className="pub_name">
        <p>{pub_name}</p>
    </div>
);

const PubLocation = ({pub_location}) => (
    <div className='pub_location'>
        <PubCoordinate coordinate='pub_latitude'
            coordinate_value={pub_location.pub_latitude} />
        <PubCoordinate coordinate='pub_longitude'
            coordinate_value={pub_location.pub_longitude} />
    </div>
);

const PubCoordinate = (props) => (
    <div className={props.coordinate}>
        <p>{props.coordinate_value}</p>
    </div>
);

export default Pub;
