import React from 'react'
import CardContainer from './CardContainer'
import Card from './Card'
import FavoriteCard from './FavoriteCard'


export default function Favorite(props) {
    console.log(props.favorite)
    return(
        <div className="favorite-date">
            {/* <h1>Favorites</h1> */}
            <FavoriteCard favorite={props.favorite}/>
        </div>
       

    )
}