import React from 'react'
import './TrackList.css'

const TrackList = ({tracks}) => {
    
    return (
        <div>
            {tracks.map((track) => (
                <div>
                    <p>{track.title} by {track.artist}</p>
                </div>
            ))}
        </div>
    )
}