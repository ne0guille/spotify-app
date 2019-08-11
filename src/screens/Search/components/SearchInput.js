import React from "react";
import { Input } from "antd";
import { func, string } from "prop-types";

const { Search } = Input;
const SearchStyle = {
  width: "20rem",
  margin: "1rem auto",
  display: "block"
};
export const SearchInput = ({ filter, onSearch }) => {
  const onSearchClick = text => console.log(text) || onSearch(text);

  return (
    <div>
      <Search
        placeholder={`Search by ${filter}`}
        onSearch={onSearchClick}
        style={SearchStyle}
      />
    </div>
  );
};

Search.proptypes = {
  filter: string.isRequired,
  onSearch: func.isRequired
};
