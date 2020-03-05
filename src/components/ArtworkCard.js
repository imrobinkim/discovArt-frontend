import React from "react";
import { Link } from "react-router-dom";

const ArtworkCard = ({ artwork }) => {
  return (
    <Link to={`artworks/${artwork.id}`} className="artwork-card">
      {artwork.primaryimageurl ? (
        <img src={artwork.primaryimageurl} alt={artwork.title} />
      ) : (
        <div className="artwork-card-default">
          <div>{artwork.title}</div>
        </div>
      )}
    </Link>
  );
};

export default ArtworkCard;
