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

function setCurrentUser(userData) {
  return { type: "SET_CURRENT_USER", payload: userData} 
}

export {
  createUser,
  setUserUsingToken
};