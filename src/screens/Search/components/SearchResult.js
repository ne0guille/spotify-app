import React, { Fragment } from "react";
import { Spin } from "antd";

import "./SearchResult.css";

const SearchResult = ({ data = [], isLoading, render }) => {
  return (
    <Fragment>
      {isLoading ? (
        <Spin size="large" />
      ) : (
        data.length > 0 && (
          <ul className="search-results">{render({ data })}</ul>
        )
      )}
    </Fragment>
  );
};

export default SearchResult;
