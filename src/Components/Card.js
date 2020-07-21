import React from 'react'

export default function Card(props) {
    console.log(props)

    return(
        <div className="user-card">
            <h2>{props.username}</h2>
            <h4>{props.city}</h4>
        </div>
    )


}