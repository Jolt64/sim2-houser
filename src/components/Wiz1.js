import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

class Wiz1 extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZFZ7hialYpHKO1iVEHuz78biIaWXPkkpMwpMBJ33_ZPPziT0l",
      mortgage: 0,
      rent: 0
    };
  }

  handleInputChange = e => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  };

  createNewHouse = async () => {
    const { name, address, city, state, zip, img, mortgage, rent } = this.state;
    const house = {
      house: { name, address, city, state, zip, img, mortgage, rent }
    };
    let res = await Axios.post("/api/houses", house).catch(err =>
      console.log(err)
    );
  };

  render() {
    return (
      <div>
        <p>Wizard</p>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={this.state.name}
          onChange={e => this.handleInputChange(e)}
        />
        <input
          type="text"
          placeholder="Address"
          name="address"
          value={this.state.address}
          onChange={e => this.handleInputChange(e)}
        />
        <input
          type="text"
          placeholder="City"
          name="city"
          value={this.state.city}
          onChange={e => this.handleInputChange(e)}
        />
        <input
          type="text"
          placeholder="State"
          name="state"
          value={this.state.state}
          onChange={e => this.handleInputChange(e)}
        />
        <input
          type="text"
          placeholder="Zip code"
          name="zip"
          value={this.state.zip}
          onChange={e => this.handleInputChange(e)}
        />
        <Link to="/Wiz2">
          <button>Next</button>
        </Link>
      </div>
    );
  }
}

export default Wiz1;
