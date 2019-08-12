const convertMsToMinutes = (ms) => {
  return ms;
};

const getRelatedInfo = ({ name, id }) => ({ name, id });

export const getTrackInfoFromSearch = ({ tracks = {} }) => {
  const { items = [] } = tracks;
  return items.map(
    ({ album, artists, duration_ms, name, id, preview_url }) => ({
      album: getRelatedInfo(album),
      artists: artists.map(getRelatedInfo),
      duration: convertMsToMinutes(duration_ms),
      source: preview_url,
      name,
      id,
    })
  );
};

export const getArtistInfoFromSearch = ({ artists = {} }) => {
  const { items = [] } = artists;
  return items.map(({ name, id, images }) => ({ name, id, image: images[0] }));
};
