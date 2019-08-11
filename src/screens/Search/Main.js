import React, { Fragment, useState } from "react";

import { Search } from "./components/Search";
import { SearchInput } from "./components/SearchInput";
import SearchFilter from "./components/SearchFilter";
import SearchResults from "./components/SearchResult";

export const Main = ({ actions, tracks, history, isLoading }) => (
  <Search
    actions={actions}
    isLoading={isLoading}
    render={({ filter, searchFunc, setFilter, renderResult }) => (
      <div className="search-wrapper">
        <SearchFilter filter={filter} onChange={setFilter} />
        <SearchInput filter={filter} onSearch={searchFunc} />
        <SearchResults
          data={tracks}
          render={({ data }) => renderResult({ data, history })}
        />
      </div>
    )}
  />
);
