// src/App.jsx

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

