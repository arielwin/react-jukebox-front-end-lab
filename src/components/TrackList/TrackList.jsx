import React from 'react'
import './TrackList.css'


const TrackList = ({tracks, onPlay}) => {
    
    return (
        <div>
            {tracks.map((track) => (
                <div>
                    <h3>Tracks</h3>
                    <p>{track.title} by {track.artist}</p>
                    <button onClick={() => onPlay(track)}>Play</button>
                </div>
            ))}
        </div>
    )
}

export default TrackList