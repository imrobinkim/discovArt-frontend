const BASE_URL = "http://localhost:3000/api/v1";

// -------- Users --------- //
// Use to set current logged in user when page is refreshed (aka retrieved from localStorage token).
// Also use when you need to refresh user data in redux store.
function refreshUser(token) {
  return dispatch => {
    fetch(`${BASE_URL}/profile`, {
      method: "GET",
      headers: {
        Authentication: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(returnedData => {
        dispatch(setCurrentUser(returnedData.user));
      });
  };
}

function logUserIn(returnedData) {
  return dispatch => {
    localStorage.setItem("token", returnedData["token"]);
    dispatch(setCurrentUser(returnedData["user"]));
  };
}

function logUserOut() {
  localStorage.removeItem("token");
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

function favoritingArtwork(artwork, user) {
  let data = { artwork, user };
  let params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };

  return dispatch => {
    fetch(`${BASE_URL}/favorite_artwork`, params).then(() => {
      dispatch(refreshUser(localStorage.getItem("token"))); // refresh user to update favorites real-time.
    });
  };
}

export {
  BASE_URL,
  refreshUser,
  logUserIn,
  logUserOut,
  clearPage,
  fetchingArtworksBySearchTerm,
  fetchingArtworks,
  fetchingMoreArtworks,
  fetchingArtworkDetail,
  favoritingArtwork
};
