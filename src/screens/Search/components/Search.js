import React, { useState } from "react";

import ArtistResult from "./Results/ArtistResult";
import TrackResult from "./Results/TrackResult";

const FILTER_ARTIST = "artist";
const getSearchFunc = (actions, filter) => {
  let search = actions.searchTracks;
  if (filter === FILTER_ARTIST) search = actions.searchArtists;

  return search;
};

const getResultComponent = (filter, actions) =>
  filter === FILTER_ARTIST ? renderArtistResults : renderTracksResults(actions);

const renderArtistResults = ({ data, history }) => (
  <ArtistResult data={data} history={history} />
);
const renderTracksResults = ({ playTrack }) => ({ data }) => (
  <TrackResult data={data} onClick={playTrack} />
);
//TODO create context to consume actions from results comp

export const Search = ({ actions, render, isLoading }) => {
  const [filter, setFilter] = useState(FILTER_ARTIST);
  const onFilterChange = (filter) => {
    actions.filterChange();
    return setFilter(filter);
  };
  const searchFunc = getSearchFunc(actions, filter);
  const renderResult = getResultComponent(filter, actions);

  return (
    <div className="search">
      {render({ filter, searchFunc, onFilterChange, renderResult })}
    </div>
  );
};
