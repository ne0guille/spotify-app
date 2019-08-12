import React from "react";
// import { func } from "prop-types";

//track selector to get urls
const Track = ({ name, duration, album, artists, onClick, ...props }) => {
  return (
    <li className="track">
      <a className="track__name" onClick={onClick({name, ...props})}>{name}</a>
      <div className="track__artits">
        {/* <a>{artists}</a> */}
      </div>
      <div className="track__album">
        {/* <a>{album}</a> */}
      </div>
      <div className="track__duration">{duration}</div>
    </li>
  );
};

export default Track;