import React from "react";
import { Avatar, Divider } from "antd";

import { Followers } from "./Followers";
import "./Artist.css";

export const Artist = ({ image, name, albums, followers }) => (
  <section className="artist">
    <h1 className="artist__name">{name}</h1>
    {image.url ? (
      <img
        className="artist__image"
        width={200}
        src={image.url}
        alt="artist image"
      />
    ) : (
      <Avatar size="large" icon="user" />
    )}
    <Divider />
    <Followers followers={followers} />
  </section>
);
