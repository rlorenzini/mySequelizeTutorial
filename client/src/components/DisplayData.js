import React, { Component } from 'react';

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
        'Content-Type': 'application/json'
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
          <li id={onePotato.id}>
          <p>{onePotato.name} : {onePotato.starch_level}</p>
          </li>
        )
      })// end of potatoes.map
    } // end of if 
  return (
    <div>
      <div>We will display data here.</div>
      <ul>
      {potatoName}
      </ul>
    </div>
  )};
}
