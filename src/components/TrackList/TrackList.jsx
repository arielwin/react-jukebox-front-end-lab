import React from 'react'
import './TrackList.css'
import { Link } from 'react-router-dom'


const TrackList = ({tracks}) => {
    
    return (
        <div>
            {tracks.map((track) => (
                <div>
                    <h3>Tracks</h3>
                    <p>{track.title} by {track.artist}</p>
                </div>
            ))}
        </div>
    )
}

export default TrackList