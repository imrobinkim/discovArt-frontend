import React from 'react';

const ArtworkCard = ({artwork}) => {
  return(

    <img src={artwork.PrimaryImage.Medium} alt={artwork.Title} />

  )
}

export default ArtworkCard;