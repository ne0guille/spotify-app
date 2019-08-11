import React from "react";
import { Carousel } from "antd";

import Album from "./Album";

const settings = { slidesToShow: 3, dots: false };
export const Albums = ({ data = [] }) => (
  <section>
    <h2>Albums</h2>
    <Carousel autoplay {...settings}>
      {data.map(album => (
        <Album key={album.id} {...album} />
      ))}
    </Carousel>
  </section>
);
