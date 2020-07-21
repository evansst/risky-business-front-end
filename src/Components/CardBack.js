import React, { Component } from 'react';


export default function CardBack (props) {

    const onClickDelete = (event) => { 
        event.preventDefault()
        props.deleteDateCard(props.id)
    }

    const handleFavorites = (event) => {
        event.preventDefault()
        props.addToFavorites({...props})
        
    }
    return(
        <div className="card-back">
            <h2>{props.name}</h2>
            <br/>
            <h4>{props.email}</h4>
            <h4>{props.interests}</h4>
            <button onClick={handleFavorites}>Add to Favorites</button>
            <button onClick={onClickDelete}>Remove from Favorites</button>
        </div>

    )
}
