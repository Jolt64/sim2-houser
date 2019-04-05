import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

export default class Wiz3 extends Component {
  constructor() {
    super();
    this.state = {
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
      console.log(this.state);
      
    return (
      <div>
        <input
          type="text"
          placeholder="Mortgage"
          name="mortgage"
          value={this.state.zip}
          onChange={e => this.handleInputChange(e)}
        />
        <input
          type="text"
          placeholder="Rent"
          name="rent"
          value={this.state.zip}
          onChange={e => this.handleInputChange(e)}
        />
        <Link to="/">
          <button onClick={() => this.createNewHouse()}>Complete</button>
        </Link>
        <Link to="/Wiz2">
          <button>Back</button>
        </Link>
      </div>
    );
  }
}
