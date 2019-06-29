const BASE_URL = "http://localhost:3000/api/v1"

function createUser(newUserData) {
  return (dispatch) => {
    debugger
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
    .then(response => {
      console.log(response)
      dispatch(setCurrentUser(response))
    })
  }
}

function setCurrentUser(response) {
  return { type: "SET_CURRENT_USER", payload: response['user']} 
}

export {
  createUser,

};