import React, { Fragment } from "react";

const ArtistStyle = {
  borderBottom: '1px solid #e8e8e8'
}
const Artist = ({ name, id, onClick }) => {
  return (
    <li style={ArtistStyle} className="artist">
      <a className="artist__name" onClick={onClick(id)}>
        {name}
      </a>
    </li>
  );
};

//track selector to get urls
const SearchArtistResult = ({ data = [], history }) => {
 const onArtistClick = id => e => history.push(`/artist/${id}`);
  return (
    <Fragment>
      {data.map(({ name, id }) => (
        <Artist
          key={`artist-${id}`}
          id={id}
          name={name}
          // img
          onClick={onArtistClick}
        />
      ))}
    </Fragment>
  );
};

export default SearchArtistResult;
