import React from 'react';


export default function FavoriteCard (props){


    return(
        <div className="favorite-card">
            <h2>{props.username}</h2>
            <br/>
            <h4> {props.city}</h4>
        </div>
    )
}
