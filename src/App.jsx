// src/App.jsx
import React from 'react'
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar';
import TrackList from './components/TrackList/TrackList';
import { useState } from 'react'
import NowPlaying from './components/NowPlaying/NowPlaying'


const App = () => {
  const[tracks, setTracks] = useState([])

  //const handlePlayTrack
  //const handleEdittrack
  //const handleDeleteTrack
  //const handleSaveTrack
  const handlePlay = (track) => {
    setCurrentTrack(track);
  };
  return (
    <>
      <NavBar />
      <TrackList tracks={tracks} onPlay={handlePlay}/>
      <NowPlaying track={currentTrack} />
    </>
  )
};

export default App;

