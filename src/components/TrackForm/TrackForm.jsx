 import React, { useState, useEffect } from 'react'
 import { useParams } from 'react-router-dom'

 const TrackForm =({ onSave, tracks}) => {
    const {trackId } = useParams()
    const [title, setTitle] = useState({
        title: '',
        artist: '',
    })

    useEffect(() => {
        if (trackId) {
            const existingTrack = tracks.find((track) => track._id === trackId)
            if (existingTrack) {
                setTrack(existingTrack)
            }
        }
    }, [trackId, tracks])

    const handleChange = (e) => {
        const { name, value } = e.target
        setTrack ((previousTrack) => ({
            ...previousTrack,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSave(track)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input type='text' name='title' value={track.title} onChange={handleChange} />
                </div>
                <div>
                    <label>Artist</label>
                    <input type='text' name='artist' value={track.artist} onChange={handleChange} />
                </div>
                <button type='submit'>Save</button>
            </form>
        
        
        </>
    )
}

export default TrackForm