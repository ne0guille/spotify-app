import React from "react";

import AudioPlayer from "./components/AudioPlayer";

export const Main = ({track = {}, isPlaying}) => {
    const { name, source } = track;
    return (
        <AudioPlayer name={name} source={source} />
    )
}    