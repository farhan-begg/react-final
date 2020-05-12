
import data from './metal.json'
import React from 'react';
import Band from './display'
import './band.css'

function Content() {
    let count = 0
    const band = data.map((band, i) => {
        count += 1
        return (
            <Band className="Band"
                key={`${band.ID}`}
                name={band.band_name}
                fans={band.fans}
                formed={band.formed}
                origin={band.origin}
            />
        )
    })

    return (
        <div className="Total_Band">
            <h3>{count}Total Bands</h3>
            {band}
        </div>
    )
}

export default Content;