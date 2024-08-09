// src/App.jsx
import React from 'react'
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar';
import TrackList from './components/TrackList/TrackList';
import { useState } from 'react'
import NowPlaying from './components/NowPlaying/NowPlaying'
import { Route, Routes, useNavigate } from 'react-router-dom';
import TrackDetails from './components/TrackDetails/TrackDetails'


const App = () => {
  const[tracks, setTracks] = useState([])
  const navigate = useNavigate()
  const [TrackForm, setTrackForm] = useState(null)

  //const handleAddTrack
  //const handleEdittrack
  //const handleSaveTrack

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
        <Route path='/tracks' tracks={<TrackList tracks={tracks} /> }/>
        <Route path='/add-track' tracks={<TrackForm tracks={tracks} /> } />
        <Route path='/edit-track' tracks={<TrackForm tracks={tracks} /> } />
        <Route path='/tracks:trackId' element={<TrackDetails handleDeleteTrack={handleDeleteTrack} />} />
      </Routes>


    </>
  )}
  

export default App;