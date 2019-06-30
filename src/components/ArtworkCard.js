import React from 'react';
import { Link } from 'react-router-dom';


const ArtworkCard = ({artwork}) => {
  return(
    <Link to={`artworks/${artwork.ObjectID}`}>
      <img src={artwork.PrimaryImage.Medium} alt={artwork.Title} />
    </Link>
  )
}

export default ArtworkCard;