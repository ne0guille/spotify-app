import React from "react";
import { isEmpty } from "ramda";

import AudioPlayer from "./components/AudioPlayer";

export const Main = ({ track = {}, isPlaying }) => {
  const { name, source } = track;
  return (
    <div>
      {isEmpty(track) ? (
        <p>Select track to play</p>
      ) : (
        <AudioPlayer
          key={name}
          name={name}
          source={source}
          isPlaying={isPlaying}
        />
      )}
    </div>
  );
};
