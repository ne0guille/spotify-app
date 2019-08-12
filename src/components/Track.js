import React from "react";
// import { func } from "prop-types";

//track selector to get urls
const Track = ({ name, duration, album, artists, onClick, ...props }) => {
  const albumName = album && album.name;

  return (
    <li className="track">
      <h3><a className="track__name" onClick={onClick({ name, ...props })}>
        {name}
      </a>
      </h3>
      {/* TODO add a on artis to route */}
      {/* <div className="track__artists"></div> */}
      <div className="track__info"><strong>{artists}</strong>- {albumName} - {duration}</div>
    </li>
  );
};

export default Track;
