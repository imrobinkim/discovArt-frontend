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

function fetchedArtworksByKeyword(artworks) {
  return { type: "FETCHED_ARTWORKS_BY_KEYWORD", artworks }
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

function fetchingArtworksBySearchTerm(keyword) {
  return (dispatch) => {
    fetch(`${BASE_URL}/artworks/bykeyword?keyword=${keyword}`)
      .then(res => res.json())
      .then(response => {
        if (response.status !== 500) {
          dispatch(fetchedArtworksByKeyword(response.Items))
        } else {
          console.log("No artworks by those search terms")
        }
      })
  }
}

function fetchedArtworkDetail(artworkObj) {
  return { type: "FETCH_ARTWORK", artwork: artworkObj }
}

function fetchingArtworkDetail(artworkId) {
  return (dispatch) => {
    fetch(`${BASE_URL}/artworks/${artworkId}`)
      .then(res => res.json())
      .then(response => {
        const artworkObj = response.Data
        dispatch(fetchedArtworkDetail(artworkObj))
      })
  }
}

export {
  setUserUsingToken,
  createUser,
  logInUser,
  fetchingInitialArtworks,
  fetchingArtworksBySearchTerm,
  fetchingArtworkDetail,
};