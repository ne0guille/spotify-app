import React from "react";
// import { func } from "prop-types";

//track selector to get urls
const Track = ({ name, duration, album, artists }) => {
  return (
    <li className="track">
      <div className="track__name">{name}</div>
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