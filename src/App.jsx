// src/App.jsx
import React from 'react'
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar';
import TrackList from './components/TrackList/TrackList';
import { useState } from 'react'

const App = () => {
  const[tracks, setTracks] = useState([])

  //const handlePlayTrack
  //const handleAddTrack
  //const handleEdittrack
  //const handleDeleteTrack
  //const handleSaveTrack

  return (
    <>
    <div>
      <NavBar />
    </div>
    <div>
      <TrackList path='/tracks/track-list' element={<TrackList tracks={tracks} /> } />
    </div>
      
    </>
  )
};

export default App;

