import React, {Component} from 'react';
import './App.css';
import CardContainer from './Components/CardContainer'
import Form from './Components/Form'
import Favorite from './Components/Favorite'
import FavoriteCard from './Components/FavoriteCard'
const riskyURL = "http://localhost:3000/users"




class App extends Component {
  
  state = {
    dateCards: [],
    favorite: {}
  }
  
  componentDidMount() {
    this.getDateCards()
  }

  getDateCards = () => {
    fetch(riskyURL)
      .then(response => response.json())
      .then(dateCards => this.setState({dateCards}))
  }

  addDateCardUser = (newDateCard) => {
      this.setState({
        dateCards: [...this.state.dateCards, newDateCard]
      })
      fetch(riskyURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newDateCard)
      })
  }

  deleteDateCard = (id) => {
    console.log(id)
    let filtered = this.state.dateCards.filter(dateCard => dateCard.id !== id)
    this.setState({
      dateCards: filtered
    })
    fetch((riskyURL + "/" + id), { method:"DELETE" })
  }

  addToFavorites = (card) => {
    console.log(card)
    this.setState({favorite: card})
  }

  render(){
    return (
      <div className="App">
        <div id="title">
          <h1>Risky Business</h1>
          <h2>A dating app with NO PICTURES!!</h2>
          <h2>If you fall in love, it's not our fault!</h2>
        </div>
          <Favorite favorite={this.state.favorite}/>
          <FavoriteCard addToFavorites={this.addToFavorites}/>
          {/* <Form addDate={this.addDateCardUser}/> */}
          <CardContainer
            dateCards={this.state}
            deleteDateCard={this.deleteDateCard}
            addToFavorites={this.addToFavorites}
            />
      </div>
    );
  }
}

export default App;
