import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form"
import Meals from "./components/Meals"

class App extends Component {
    state = {
        meals:[]
    }
    getRecipe = async (event)=>{
        event.preventDefault()
        const recipeName = event.target.elements.recipeName.value
        const api_call = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${recipeName}`)
        const data = await api_call.json()
        this.setState({meals: data.meals})
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
          <Form getRecipe = {this.getRecipe}/>
          <Meals meals={this.state.meals}/>

      </div>
    );
  }
}

export default App;