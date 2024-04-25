import React from "react";
import '../components/Card.css'
import {Link} from 'react-router-dom'


const Card = (props) => {
    
    return (
        <div>
        <div className = "Card">
            <Link to= {'Edit/' + props.id}>
            <h2>{props.name}</h2>
            <h3>{"Speed:  " + props.speed + " mph"}</h3>
            <h3>{"Color:  " + props.color}</h3>
            </Link>
        </div>
        </div>)
}

export default Card;