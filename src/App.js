import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
//making classes instead of function

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchfield: "",
    }; 
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = e => {
    this.setState({ searchfield: e.target.value });
  }
  render() {
    const { monsters, searchfield } = this.state; //used to pull the value from monster to searchfield and filter
    //can also be written as
    // const monsters = this.state.monsters;
    // const searchfield = this.state.searchfield;
    const filteredMonster = monsters.filter((monsters) =>
      monsters.name.toLowerCase().includes(searchfield.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="search monster"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
