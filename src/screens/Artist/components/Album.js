import React from "react";
import { Card } from "antd";
const { Meta } = Card;

export const Album = ({ name, release_date, image, id, total_tracks }) => (
  <Card
    className="album"
    style={{ width: 200 }}
    cover={<img alt="album image" src={image.url} />}
  >
    <Meta
      title={name}
      description={`Total Tracks: ${total_tracks} - Released: ${release_date}`}
    />
  </Card>
);

export default Album;
