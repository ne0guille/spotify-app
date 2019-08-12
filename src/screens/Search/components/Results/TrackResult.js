import React, { Fragment } from "react";
import { array, string } from "prop-types";

import Track from "../../../../components/Track";

const TrackResult = ({ data = [], onClick }) => {
  const onTrackClick = (track) => (e) =>
    console.log("click", track) || onClick(track);
  return (
    <Fragment>
      {data.map(({ name, duration, album, artists, id, ...props }) => (
        <Track
          key={`track-${id}`}
          album={album}
          artists={artists}
          duration={duration}
          name={name}
          onClick={onTrackClick}
          {...props}
        />
      ))}
    </Fragment>
  );
};

TrackResult.propTypes = {
  data: array.isRequired,
};

export default TrackResult;
