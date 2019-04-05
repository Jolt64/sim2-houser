import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import House from './House';
import Axios from 'axios';


class Dashboard extends Component {
    constructor() {
        super()
        
        this.state = {
            HousesArr: []
        }
        this.deleteHouse = this.deleteHouse.bind(this)
    }

    componentDidMount(){
        this.getAllHouses()
    }

    getAllHouses() {
        Axios.get('/api/houses').then(res => {
            this.setState({
                HousesArr: res.data
            })
        }).catch(err => console.log(`Something went wrong: ${err}`))
    }

    deleteHouse(id) {
        console.log(id);
        
        Axios.delete(`/api/house/${id}`).then(res => {
            console.log(id);
            this.setState({
                HousesArr: res.data
            })
        }).catch(err => console.log(`Something went wrong: ${err}`))
    }

    render() {
        let houseHolder = this.state.HousesArr.map(house => {
            return <House 
            key={house.id}
            house={house}
            deleteHouse={this.deleteHouse}
            />
        })
      return (
        <div>
          <p>Dashboard</p>
          <Link to="/wizard"><button>Add New Property</button></Link>

          {houseHolder}
        </div>
      )
    }
}

export default Dashboard