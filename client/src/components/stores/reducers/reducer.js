const initialState = {
  isAuthenticated: false,
  username: '',
};
//we want Redux to watch for changes in authentication status and which user is active

const reducer = (state = initialState, action) => {
  //Redux actions uses switch cases to change the state in the Redux stores
  switch (action.type) {
    case 'ON_AUTH':
    //if ON_AUTH is called, we are setting the Redux store state to
    //isAuthenticated = true and username = username
      return {
        ...state,
        isAuthenticated: action.token != null ? true : false,
        username: action.username
      }
    case 'LOGOUT':
    //LOGOUT sets authentication to false and username to ''
    //is used as onLogout() but is not considered a function (cannot attach promise)
      return {
        ...state,
        isAuthenticated: false,
        username: ''
      }
    default: return state
  };
};
export default reducer
