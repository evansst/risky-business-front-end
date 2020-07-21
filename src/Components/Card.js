import React from 'react'
import CardBack from './CardBack'
import Favorite from './Favorite'

export default function Card(props) {
    console.log(props)

    return(
        <div className="user-card">
            <div className='card-front'>
                <h2>{props.username}</h2>
                <br/>
                <h4> {props.city}</h4>
            </div>
            <CardBack
                key={props.id} {...props}
                name={props.name}
                interests={props.interests}
                deleteDateCard={props.deleteDateCard}
                addToFavorites={props.addToFavorites} 
            />
        </div>
    )


}