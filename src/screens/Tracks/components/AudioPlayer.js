import React from "react";

import "./AudioPlayer.css";

const AudioPlayer = ({ source, name }) => {
  console.log("source", source);
  return (
    <div className="audio-player">
      {name && <p className="audio-player__track">Track: {name}</p>}
      {source ? (
        <audio controls autoplay preload="auto">
          <source src={source} type="audio/mp3" />
        </audio>
      ) : (
        <p>No track preview</p>
      )}
    </div>
  );
};

export default AudioPlayer;
