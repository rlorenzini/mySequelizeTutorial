const initialState = {
  isAuthenticated: false,
  username: 'user',
  userid: 'userid'
};

//we want Redux to watch for changes in authentication status and which user is active
//this one reducer has two actions, ON_AUTH and LOGOUT

export default (state = initialState, action) => {
  //Redux actions uses switch cases to change the state in the Redux stores
  switch (action.type) {
    case 'ON_AUTH':
    //if ON_AUTH is called, we are setting the Redux store state to
    //isAuthenticated = true and username = username
      return {
        ...state,
        isAuthenticated: action.token != null ? true : false,
        username: action.username,
        userid: action.userid
      }
    case 'LOGOUT':
    //LOGOUT sets authentication to false and username to ''
    //is not considered a function (cannot attach promise)
      return {
        ...state,
        isAuthenticated: false,
        username: '',
        userid: ''
      }
    default: return state
  };
};
