import React from 'react'
import Card from './Card'

export default function CardContainer(props){
    console.log(props.dateCards.dateCards)
    
    const showDateCards = () => {
        return props.dateCards.dateCards.map(dateCard => { 
            return <Card
                username={dateCard.username}
                city={dateCard.city}

             /> 
        })
    }
    
    
    
    return (
        <ul className="card-list">
            {showDateCards()}
        </ul>
    )
}