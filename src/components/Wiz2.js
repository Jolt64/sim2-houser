import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Wiz2 extends Component {
  constructor() {
    super();

    this.state = {
      img: ""
    };
  }

  handleInputChange = e => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  };

  render() {
    console.log(this.state.img);
    return (
      <div>
        <input
          type="text"
          placeholder="image url"
          name="img"
          value={this.state.img}
          onChange={e => this.handleInputChange(e)}
        />
        <Link to="/Wiz1">
          <button >Back</button>
        </Link>
        <Link to="/Wiz3">
          <button >Next</button>
        </Link>
      </div>
    );
  }
}
