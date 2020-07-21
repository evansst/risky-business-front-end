import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CardContainer from './Components/CardContainer'
import Form from './Components/Form'

const riskyURL = ""




class App extends Component {
  
  state = {
    dateCards:[]
  }
  
  componentDidMount() {
    // this.getDateCards()
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
      fetch(riskyURL,{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newDateCard)
      })
  }

  // deleteTodo = (id) => {
    
  // }

  render(){
    return (
      <div className="App">
        <h1 id="title">Risky Business</h1>
          {/* <Form />
          <CardContainer /> */}
      </div>
    );
  }
}

export default App;
