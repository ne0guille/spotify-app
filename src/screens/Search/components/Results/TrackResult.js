import React, { Fragment } from "react";
import { array, string } from "prop-types";

import Track from "../../../../components/Track";

const TrackResult = ({ data = [] }) => (
  <Fragment>
    {data.map(({ name, duration, album, artists, id }) => (
      <Track
        key={`track-${id}`}
        album={album}
        artists={artists}
        duration={duration}
        name={name}
      />
    ))}
  </Fragment>
);

TrackResult.propTypes = {
  data: array.isRequired
};

export default TrackResult;
