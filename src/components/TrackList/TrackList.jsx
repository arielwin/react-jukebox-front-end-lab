import React from 'react'
import './TrackList.css'


const TrackList = ({tracks}) => {
    
    return (
        <div>
            {tracks.map((track) => (
                <div>
                    <h3>{track.title}</h3>
                    <p>by {track.artist}</p>
                    {/* 
                    play button
                    edit button
                    delete button
                     */}
                </div>
            ))}
        </div>
    )
}

export default TrackList