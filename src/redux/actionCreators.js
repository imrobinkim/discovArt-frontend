const BASE_URL = "http://localhost:3000/api/v1";

// -------- Users --------- //
function setUserUsingToken(token) {
  return dispatch => {
    fetch(`${BASE_URL}/profile`, {
      method: "GET",
      headers: {
        Authentication: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(returnedData => {
        console.log("Logged In:", returnedData.user.first_name);
        dispatch(setCurrentUser(returnedData.user));
      });
  };
}

function createUser(newUserData) {
  return dispatch => {
    fetch(`${BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: {
          first_name: newUserData.first_name,
          last_name: newUserData.last_name,
          email: newUserData.email,
          password: newUserData.password
        }
      })
    })
      .then(res => res.json())
      .then(returnedData => {
        localStorage.setItem("token", returnedData["token"]);
        dispatch(setCurrentUser(returnedData["user"]));
      });
  };
}

function logInUser(logInData) {
  return dispatch => {
    fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: {
          email: logInData.email,
          password: logInData.password
        }
      })
    })
      .then(res => res.json())
      .then(returnedData => {
        localStorage.setItem("token", returnedData["token"]);
        dispatch(setCurrentUser(returnedData["user"]));
      });
  };
}

function logUserOut() {
  return { type: "LOG_USER_OUT" };
}

function setCurrentUser(userData) {
  return { type: "SET_CURRENT_USER", payload: userData };
}

// -------- Pagination --------- //
function nextPage(currentPage) {
  return { type: "NEXT_PAGE", currentPage };
}

function clearPage() {
  return { type: "CLEAR_PAGE" };
}

// -------- Search Term --------- //
function updateSearchTerm(newSearchTerm) {
  return { type: "UPDATE_SEARCH_TERM", newSearchTerm };
}

// -------- Artworks --------- //
function fetchedArtworks(artworks) {
  return { type: "FETCHED_ARTWORKS", artworks };
}

function fetchingArtworks(keyword = null) {
  return dispatch => {
    let baseUrl = `${BASE_URL}/artworks`;
    let url = keyword ? baseUrl + `?keyword=${keyword}` : baseUrl;
    fetch(url)
      .then(res => res.json())
      .then(artworks => {
        dispatch(fetchedArtworks(artworks.records));
      });
  };
}

function fetchingArtworksBySearchTerm(keyword) {
  return dispatch => {
    dispatch(updateSearchTerm(keyword));
    dispatch(clearPage());
    dispatch(fetchingArtworks(keyword));
  };
}

function fetchingMoreArtworks(currentPage, keyword) {
  return dispatch => {
    dispatch(nextPage(currentPage)); //updates state for currentArtworksPage

    let baseUrl = `${BASE_URL}/artworks?page=${currentPage + 1}`;
    let url = keyword ? baseUrl + `&keyword=${keyword}` : baseUrl;

    fetch(url)
      .then(res => res.json())
      .then(artworks => {
        dispatch(fetchedArtworks(artworks.records));
      });
  };
}

function fetchedArtworkDetail(artworkObj) {
  return { type: "FETCH_ARTWORK", artwork: artworkObj };
}

function fetchingArtworkDetail(artworkId) {
  return dispatch => {
    fetch(`${BASE_URL}/artworks/${artworkId}`)
      .then(res => res.json())
      .then(response => {
        const artworkObj = response;
        dispatch(fetchedArtworkDetail(artworkObj));
      });
  };
}

export {
  setUserUsingToken,
  createUser,
  logInUser,
  logUserOut,
  clearPage,
  fetchingArtworksBySearchTerm,
  fetchingArtworks,
  fetchingMoreArtworks,
  fetchingArtworkDetail
};
