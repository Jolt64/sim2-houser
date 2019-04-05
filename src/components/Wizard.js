import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import Wiz1 from './Wiz1';
import Wiz2 from './Wiz2';
import Wiz3 from './Wiz3';

class Wizard extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/wiz1" component={Wiz1} />
          <Route path="/wiz2" component={Wiz2} />
          <Route path="/wiz3" component={Wiz3} />
        </Switch>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    );
  }
}

export default Wizard;
