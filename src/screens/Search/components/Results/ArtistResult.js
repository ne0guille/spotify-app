import React, { Fragment } from "react";

import { Avatar } from 'antd';

const ArtistStyle = {
  borderBottom: '1px solid #e8e8e8'
}
const Artist = ({ name, id, image = {}, onClick }) => {
  return (
    <li style={ArtistStyle} className="artist">
      <Avatar className="artist__img" src={image.url}/>
      <a onClick={onClick(id)}>
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
      {data.map(({ name, id, image }) => console.log('image', image) ||  (
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
