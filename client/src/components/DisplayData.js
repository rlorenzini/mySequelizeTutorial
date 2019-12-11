import React, { Component } from 'react';
import './styling/displayData.css';

export default class DisplayData extends Component {
  constructor() {
    super()
    this.state = {
      potatoName:[]
    }
  }

  componentDidMount() {
    let newArray = []
    fetch('http://localhost:8080/displayData', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + localStorage.getItem('jsonwebtoken')
      }
    }).then(response => response.json()).then(json => {
      for (let i = 0; i < json.result.length; i++) {
        newArray.push(json.result[i])
      }
      this.setState({
        ...this.state,
        potatoName: newArray
      })
    }) // end of promise(json)
  } // end of componentDidMount

  render(){
    let potatoes = this.state.potatoName
    //get the state, which is an array of all potatoes
    let potatoName = (<p>Loading</p>)
    //set a loading message
    if (!this.state.loading) {
      //once it is no longer loading
      potatoName = potatoes.map((onePotato) => {
        //replace our message with an iteration of each potato
        return (
          <li className="potatoListLI" id={onePotato.id}>
          <p className="potatoName">Name: {onePotato.name}</p>
          <p className="potatoStarch">Type: {onePotato.starch_level}</p>
          <p className="potatoCook">Cook methods: {onePotato.cook_method}</p>
          </li>
        )
      })// end of potatoes.map
    } // end of if
  return (
    <div>
      <ul id="potatoListUL">
      {potatoName}
      </ul>
    </div>
  )};
}
