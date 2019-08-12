import React from "react";
import { Radio } from "antd";

const style = {
  display: "flex",
  justifyContent: "center",
};
const SearchFilter = ({ filter, onChange }) => {
  const onClick = (e) => onChange(e.target.value);
  return (
    <Radio.Group style={style} value={filter} onChange={onClick}>
      <Radio.Button value="artist">Artist</Radio.Button>
      <Radio.Button value="song">Song</Radio.Button>
    </Radio.Group>
  );
};

export default SearchFilter;
