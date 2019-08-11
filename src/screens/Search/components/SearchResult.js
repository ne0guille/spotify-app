import React, { Fragment } from "react";

const SearchResult = ({ data = [], render }) => {  
  return (
    <Fragment>
      {data.length > 0 && (
        <ul className="search-results">
          {render({ data })}
        </ul>
      )}
    </Fragment>
  );
};

export default SearchResult;
