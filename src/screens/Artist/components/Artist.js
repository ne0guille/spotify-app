import React from "react";
import { Divider } from "antd";

import { Followers } from "./Followers";
import "./Artist.css";

export const Artist = ({ image, name, albums, followers }) => (
  <section className="artist">
    <h1 className="artist__name">{name}</h1>
    <img className="artist__image" width={200} src={image.url} />
    <Divider />
    <Followers followers={followers} />
  </section>
);
