import React, { Component } from 'react';


class House extends Component {
    constructor() {
        super()

        this.state = {

        }
    }

    fireDelete = (id) => {
        this.props.deleteHouse(id)
    }

    render() {
        const { name, address, city, state, zip, img, mortgage, rent, id } = this.props.house
      return (
          <div>
            <div>
                <button onClick={() => this.fireDelete(id)}>Delete</button>
            </div>  
            <div>
            <h3>{name}</h3>
            <p>{address}</p>
            <p>{city}</p>
            <p>{state}</p>
            <p>{zip}</p>
            <img src={img} alt="" style={{height: "200px"}}></img>
            <p>{mortgage}</p>
            <p>{rent}</p>
            </div>
          </div>
      )
    }
}

export default House