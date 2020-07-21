import React, {Component} from 'react';
import './App.css';
import CardContainer from './Components/CardContainer'
import Form from './Components/Form'

const riskyURL = "http://localhost:3000/users"




class App extends Component {
  
  state = {
    dateCards: []
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
    let filtered = this.state.dateCards.filter(dateCard => dateCard.id !== id)
    this.setState({
      dateCards: filtered
    })
    fetch(riskyURL + "/" + id, { method:"DELETE" })
  }

  addToFavorites = (id) => {
    console.log('added to favorite')
  }

  render(){
    return (
      <div className="App">
        <h1 id="title">Risky Business</h1>
        <h2> A dating app with no Pictures</h2>
        <h2>If you fall in love it's not our fault!</h2>
          {/* <Form addDate={this.addDateCardUser}/> */}
          <CardContainer
            dateCards={this.state}
            deleteCard={this.deleteDateCard}
            addFavorite={this.addToFavorites}
            />
      </div>
    );
  }
}

export default App;
