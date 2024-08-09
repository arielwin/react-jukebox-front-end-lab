// src/App.jsx
import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar';
import TrackList from './components/TrackList/TrackList';
import NowPlaying from './components/NowPlaying/NowPlaying'
import TrackForm from './components/TrackForm/TrackForm'
import TrackDetails from './components/TrackDetails/TrackDetails'


const App = () => {
  const[tracks, setTracks] = useState([])
  const navigate = useNavigate()
  const [currentTrack, setCurrentTrack] = useState(null)

  const handleAddTrack = (newTrack) => {
    setTracks([...tracks, newTrack])
    navigate('/tracks')
  }

  const handleEditTrack = (updatedTrack) => {
    setTracks(tracks.map((track) => (track._id === updatedTrack._id ? updatedTrack : track)))
    navigate('/tracks')
  }

  const handleSaveTrack = (track) => {
    if (track._id) {
      handleEditTrack(track)
    } else {
      handleAddTrack(track)
    }
  }

  const handlePlay = (track) => {
    setCurrentTrack(track);
  };

  const handleDeleteTrack = async (trackId) => {
    setTracks(tracks.filter((track) => track._id !== trackId))
    navigate('/tracks')
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tracks' element={<TrackList tracks={tracks} onPlay={handlePlay}/> }/>
        <Route path='/add-track' element={<TrackForm onSave={handleSaveTrack}/> } />
        <Route path='/edit-track/:trackId' element={<TrackForm onSave={handleSaveTrack}/> } />
        <Route path='/tracks:trackId' element={<TrackDetails handleDeleteTrack={handleDeleteTrack} />} />
      </Routes>


    </>
  )}
  

export default App;