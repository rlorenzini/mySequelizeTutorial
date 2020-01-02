import React, { Component } from 'react';
import '../styling/userDisplayData.css';
import { connect } from 'react-redux';

class UserDisplayData extends Component {
  constructor() {
    super()
    this.state = {
      potatoName:[],
      favoritePotatoes: []
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
    fetch('http://localhost:8080/favoritePotatoes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + localStorage.getItem('jsonwebtoken')
      },
      body: JSON.stringify({
        userid: this.props.userid
      })
    }).then(response => response.json()).then(json => {
      if(json.array) {
        this.setState({
          ...this.state,
          favoritePotatoes: json.array
        })
      }
      else {console.log(json.message)}
    }) //end of promise(json)
  } // end of componentDidMount

  addPotatoToFavorites=(e)=>{

    fetch('http://localhost:8080/userFavoritePotato', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + localStorage.getItem('jsonwebtoken')
      },
      body: JSON.stringify({
        userid: this.props.userid,
        potatoid: e.target.id
      }) //end of body
    }) //end of fetch
    .then(response => response.json())
    .then(json => console.log(json))
    //TOWORKON need to update UI

  } //end of addPotatoToFavorites

  removePotatoFromFavorites=(e)=>{
    console.log("you clicked a button! congrats!")
    //TOWORKON need to remove from favorites association and update UI
  }

  render(){
    let potatoes = this.state.potatoName
    //get the state, which is an array of all potatoes
    let favoritePotatoes = this.state.favoritePotatoes
    //get the state, which is an array of all favorite potatoes
    let potatoName = (<p>Loading</p>)
    //set a loading message
    if (!this.state.loading) {
      //once it is no longer loading
      potatoName = potatoes.map((onePotato) => {
        for(let i = 0; i < favoritePotatoes.length; i++) {
        //checking our favorites array for entries
          if(onePotato.id === favoritePotatoes[i].potatoid) {
          //if the entries exist, we are going to display slightly differently
            return (
              <li id={onePotato.id} className="potatoListLI">
                <div className="firstRowPotatoDisplay">
                  <p className="potatoName">{onePotato.name}</p>
                  <button className='removeFavoriteButton'
                    id={onePotato.id}
                    onClick={this.removePotatoFromFavorites}
                    >Remove From Favorites
                  </button>
                </div>
                <p className="potatoStarch">Type: {onePotato.starch_level}</p>
                <p className="potatoCook">Cook methods: {onePotato.cook_method}</p>
              </li>
            )
          }
        } //end of if id === id
        //replace our message with an iteration of each potato
        //if the potato is NOT favorited, display normally
        return (
          <li id={onePotato.id} className="potatoListLI">
            <div className="firstRowPotatoDisplay">
              <p className="potatoName">{onePotato.name}</p>
              <button className='favoriteButton'
                id={onePotato.id}
                onClick={this.addPotatoToFavorites}
                >Add To Favorites
              </button>
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
