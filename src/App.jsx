// src/App.jsx
import React from 'react'
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar';
import TrackList from './components/TrackList/TrackList';
import { useState } from 'react'
import NowPlaying from './components/NowPlaying/NowPlaying'
import { Navigate } from 'react-router-dom';


const App = () => {
  const[tracks, setTracks] = useState([])

  //const handleAddTrack
  //const handleEdittrack
  //const handleSaveTrack

  const handlePlay = (track) => {
    setCurrentTrack(track);
  };

  const handleDeleteTrack = async (trackId) => {
    setTracks(tracks.filter((track) => track._id !== trackId))
    navigate('/')
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tracks' tracks={<TrackList tracks={tracks} /> }/>
        <Route path='/tracks:trackId' element={<TrackDetails handleDeleteTrack={handleDeleteTrack} />} />'
        <TrackList tracks={tracks} onPlay={handlePlay}/>
        <NowPlaying track={currentTrack} />
      </Routes>


    </>
  )}
  

export default App;