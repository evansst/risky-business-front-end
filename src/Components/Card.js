import React from 'react'
import CardBack from './CardBack'


export default function Card(props) {
    console.log(props)

    return(
        <div className="user-card">
            <div className='card-front'>
                <h2>{props.username}</h2>
                <br/>
                <h4>{props.city}</h4>
                <button onClick={props.addToFavorites}>Add to Favorites</button>
                <button onClick={props.deleteDateCard}>Remove from Favorites</button>
            </div>
            <CardBack interests={props.interests} />
        </div>
    )


}