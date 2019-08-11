const convertMsToMinutes = ms => {
  return ms;
};

const getRelatedInfo = ({ name, id }) => ({ name, id })

export const getTrackInfoFromSearch = ({ tracks = {} }) => {
  const { items = [] } = tracks;
  return items.map(({ album, artists, duration_ms, name, id }) => ({
    album: getRelatedInfo(album),
    artists: artists.map(getRelatedInfo),
    duration: convertMsToMinutes(duration_ms),
    name,
    id
  }));
};

export const getArtistInfoFromSearch = ({ artists = {} }) => {
  const { items = [] } = artists;
  return items.map(getRelatedInfo);
};

