// src/App.jsx
import React from 'react'
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar';
import TrackList from './components/TrackList/TrackList';
import { useState } from 'react'

const App = () => {
  const[tracks, setTracks] = useState([])

  //const handlePlayTrack
  //const handleEdittrack
  //const handleDeleteTrack
  //const handleSaveTrack

  return (
    <>
      <NavBar />
      <TrackList tracks={tracks}/>
      
    </>
  )
};

export default App;
