import React, { Fragment } from "react";
import { Avatar } from "antd";

import "./ArtistResult.css";

const Artist = ({ name, id, image = {}, onClick }) => {
  return (
    <li className="search-results__artist">
      <Avatar className="artist__img" src={image.url} />
      <a onClick={onClick(id)}>{name}</a>
    </li>
  );
};

//track selector to get urls
const SearchArtistResult = ({ data = [], history }) => {
  const onArtistClick = (id) => (e) => history.push(`/artist/${id}`);
  return (
    <Fragment>
      {data.map(({ name, id, image }) => (
        <Artist
          key={`artist-${id}`}
          id={id}
          name={name}
          image={image}
          onClick={onArtistClick}
        />
      ))}
    </Fragment>
  );
};

export default SearchArtistResult;
