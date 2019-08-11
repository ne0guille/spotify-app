import React, { Component, Fragment } from "react";
import { Divider, Spin, PageHeader } from "antd";

import { Artist } from "./components/Artist";
import { Albums } from "./components/Albums";

import './Main.css';

export class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
      actions: { getArtistById, getArtistAlbums },
      artist,
      match: {
        params: { id }
      }
    } = this.props;

    if (!artist && id) {
      getArtistById(id).then(() => getArtistAlbums(id));
    }
  }

  render() {
    const { artist: { name, image, followers, albums } = {} } = this.props;
    console.log("NAME", name);
    console.log("albums", albums);
    return (
      <PageHeader
      onBack={() => window.history.back()}
      title={name}
      subTitle={"Artist details"}>
      <div className="page-container">
        <section className="">
        {!this.props.artist ? (
          <Spin size="large" />
        ) : (
          <div className="artist-container">
            <Artist name={name} image={image} followers={followers} />
            <Divider />
            <Albums data={albums} />
          </div>
        )}
      </section>
    </div>
  </PageHeader>

    );
  }
}
