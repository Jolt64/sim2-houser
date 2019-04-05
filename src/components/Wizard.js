import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

class Wizard extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZFZ7hialYpHKO1iVEHuz78biIaWXPkkpMwpMBJ33_ZPPziT0l",
      mortgage: 0,
      rent: 0
    };
  }

  handleInputChange = e => {
    const name = e.target.placeholder;
    this.setState({
      [name]: e.target.value
    });
  };

  createNewHouse = () => {
      const {name, address, city, state, zip, img, mortgage, rent } = this.state
      const house = {house: {name, address, city, state, zip, img, mortgage, rent}}
      Axios.post('/api/houses', house).then(res => {

      })
  }

  render() {
    return (
      <div>
        <p>Wizard</p>
        <input
          type="text"
          placeholder="name"
          value={this.state.name}
          onChange={e => this.handleInputChange(e)}
        />
        <input
          type="text"
          placeholder="address"
          value={this.state.address}
          onChange={e => this.handleInputChange(e)}
        />
        <input
          type="text"
          placeholder="city"
          value={this.state.city}
          onChange={e => this.handleInputChange(e)}
        />
        <input
          type="text"
          placeholder="state"
          value={this.state.state}
          onChange={e => this.handleInputChange(e)}
        />
        <input
          type="text"
          placeholder="zip"
          value={this.state.zip}
          onChange={e => this.handleInputChange(e)}
        />
        <Link to="/">
          <button onClick={() => this.createNewHouse()}>Complete</button>
        </Link>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    );
  }
}

export default Wizard;
