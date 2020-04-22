import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { favoritingArtwork } from "../redux/actionCreators";

function ArtworkCard(props) {
  // Declare new state variable called "hoveredOverCards" using Hooks.
  // Hooks allows us to add state to function components.
  const [hoveredOverCards, setHoveredOverCards] = useState([]);

  // For React Router redirect:
  let history = useHistory(); // gives us history instance used to navigate.
  let location = useLocation(); // gives us location obj the rep. current URL.

  // onStartHover & onEndHover work together to mimic "onHover" event handling.
  function onStartHover(artworkId) {
    setHoveredOverCards([...hoveredOverCards, artworkId]);
  }

  function onEndHover(artworkId) {
    const newHoveredOverCards = hoveredOverCards.filter(id => id !== artworkId);

    setHoveredOverCards(newHoveredOverCards);
  }

  function onToggleFavoriteArtwork(e) {
    e.preventDefault();

    // TODO: add auth flow - taking users to login page before favoriting an artwork.
    // let { from } = location.state || { from: { pathname: "/" } };
    // history.replace(from);

    props.currentUser
      ? props.favoritingArtwork(props.artwork, props.currentUser)
      : console.log("you must login to like");
  }

  const artwork = props.artwork;
  return (
    <Link
      to={`artworks/${artwork.id}`}
      className="artwork-card"
      onMouseEnter={() => onStartHover(artwork.id)}
      onMouseLeave={() => onEndHover(artwork.id)}
    >
      {/* Display ability to favorite an artwork when user hovers over card. */}
      {hoveredOverCards.includes(artwork.id) ? (
        <div className="artwork-card--hovered">
          {props.currentUser.favorites_ids.includes(artwork.id) ? (
            <i
              className="fa fa-heart artwork-card__heart"
              aria-hidden="true"
              onClick={onToggleFavoriteArtwork}
            ></i>
          ) : (
            <i
              className="fa fa-heart-o artwork-card__heart"
              aria-hidden="true"
              onClick={onToggleFavoriteArtwork}
            ></i>
          )}
        </div>
      ) : null}
      {/* TODO: Figure out how to make artwork-card--hovered div same size as sibling img element */}

      {artwork.primaryimageurl ? (
        <img src={artwork.primaryimageurl} alt={artwork.title} />
      ) : (
        <div className="artwork-card__default">
          <div>{artwork.title}</div>
        </div>
      )}
    </Link>
  );
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    favoritingArtwork: (artwork, currentUser) => {
      dispatch(favoritingArtwork(artwork, currentUser));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtworkCard);
