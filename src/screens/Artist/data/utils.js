const getFirstImage = (images = []) => images[0] || {};

export const mapArtistInfo = ({ name, followers, images, id }) => ({
  id,
  name,
  followers: followers && followers.total,
  image: getFirstImage(images),
});

const mapAlbumInfo = ({ name, release_date, images, id, total_tracks }) => ({
  id,
  name,
  total_tracks,
  release_date,
  image: getFirstImage(images),
});

export const mapAlbums = (data = []) => data.map(mapAlbumInfo);
