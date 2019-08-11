import React from 'react';

const style = {
    color: 'palegoldenrod',
    margin: 0
}
export const Followers = ({ followers }) => (
    <h2 style={style}>Followers: <strong>{followers}</strong></h2>
)