const BASE_URL = "http://localhost:3000/api/v1"

function setUserUsingToken(token) {
  return (dispatch) => {
    fetch(`${BASE_URL}/profile`, {
      method: "GET",
      headers: {
        "Authentication": `Bearer ${token}`
      }
    }).then(res => res.json())
    .then(returnedData => {
      console.log('Logged In:', returnedData.user.first_name)
      dispatch(setCurrentUser(returnedData.user))
    })
  }
}

function createUser(newUserData) {
  return (dispatch) => {
    fetch(`${BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        user: {
          first_name: newUserData.first_name,
          last_name: newUserData.last_name,
          email: newUserData.email,
          password: newUserData.password
        }
      })
    }).then(res => res.json())
    .then(returnedData => {
      localStorage.setItem('token', returnedData['token'])
      dispatch(setCurrentUser(returnedData['user']))
    })
  }
}

function logInUser(logInData) {
  return (dispatch) => {
    fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        user: {
          email: logInData.email,
          password: logInData.password
        }
      })
    }).then(res => res.json())
    .then(returnedData => {
      localStorage.setItem('token', returnedData['token'])
      dispatch(setCurrentUser(returnedData['user']))
    })
  }
}

function setCurrentUser(userData) {
  return { type: "SET_CURRENT_USER", payload: userData} 
}

function fetchedInitialArtworks(artworks) {
  return { type: "FETCHED_INITIAL_ARTWORKS", artworks }
}

function fetchingInitialArtworks() {
  return (dispatch) => {
    fetch(`${BASE_URL}/artworks/initial`)
      .then(res => res.json())
      .then(artworks => {
        dispatch(fetchedInitialArtworks(artworks.Items))
      })
  }
}

export {
  setUserUsingToken,
  createUser,
  logInUser,
  fetchingInitialArtworks,
};