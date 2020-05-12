import React from 'react'
import Clicker from './like'
import './display.css'

function Band({ name, fans, formed, origin }) {
    return (

        <div>
            <h3> {name} </h3>
            <h4>Formed: {formed}</h4>
            <h4>{fans} Total Fans</h4>
            <h4>Country: {origin}</h4>

            <Clicker className="clicker" />
            <br></br>
            <hr></hr>
        </div>


    )
}

export default Band;