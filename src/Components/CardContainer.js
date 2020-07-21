import React from 'react'
import Card from './Card'
import CardBack from './CardBack'

export default function CardContainer(props){
    console.log(props.dateCards.dateCards)
    
    const showDateCards = () => {
        return props.dateCards.dateCards.map(dateCard => { 
            return (
                <div className='whole-card'>
                    <Card
                        key={dateCard.id} {...dateCard}
                        username={dateCard.username}
                        city={dateCard.city}
                        deleteCard={dateCard.deleteDateCard}
                        addFavorite={dateCard.addToFavorites}
                    /> 
                </div>
            )
        })
    }
    
    
    
    return (
        <ul className="card-list">
            {showDateCards()}
        </ul>
    )
}