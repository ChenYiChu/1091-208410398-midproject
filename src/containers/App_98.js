import React, { Component } from "react";
import CardList from "../compoments/CardList_98";
import { demo } from "../compoments/demo_98";
import SearchBox from "../compoments/SearchBox_98";
import "./App_98.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      demo: demo,
      searchfield: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredDemos = this.state.demo.filter((demo) => {
      return demo.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });

    return (
      <div className="tc">
        <h1>ClassDemo</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList demo={filteredDemos} />;
      </div>
    );
  }
}

export default App;
