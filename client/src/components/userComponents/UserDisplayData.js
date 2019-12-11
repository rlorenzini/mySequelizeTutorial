import React, { Component } from 'react';
import '../styling/userDisplayData.css';
import { connect } from 'react-redux';

class UserDisplayData extends Component {
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

  addPotatoToFavorites=(e)=>{

    fetch('http://localhost:8080/userFavoritePotato', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userid: this.props.userid,
        potatoid: e.target.id
      }) //end of body
    }) //end of fetch

    // if (e.target.value === "false") {
    //   e.target.value = "true"
    //   e.target.className = "favoriteButtonActive"
    // }
    // else if (e.target.value === "true") {
    //   e.target.value = "false"
    //   e.target.className = "favoriteButton"
    // }

  }

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
          <li id={onePotato.id} className="potatoListLI">
            <div className="firstRowPotatoDisplay">
              <p className="potatoName">{onePotato.name}</p>
              <button className='favoriteButton'
                id={onePotato.id}
                value="false"
                onClick={this.addPotatoToFavorites}>Add To Favorites</button>
            </div>
            <p className="potatoStarch">Type: {onePotato.starch_level}</p>
            <p className="potatoCook">Cook methods: {onePotato.cook_method}</p>
          </li>
        )
      })// end of potatoes.map; returns potatoName
    } // end of if
  return (
    <div>
      <ul id="potatoListUL">
      {potatoName}
      </ul>
    </div>
  )};
}

const mapStateToProps = (state) => {
  return {
    userid: state.userid
  }
}

export default connect(mapStateToProps)(UserDisplayData);
