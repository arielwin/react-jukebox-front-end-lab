import React from 'react';
import './TrackList.css';
import { Link } from 'react-router-dom';

const TrackList = ({ tracks, onPlay, onEdit }) => {
    const [tracks, setTracks] = useState([]);
    useEffect(() => {
        const fetchTracks = async () => {
            const data = await getTracks();
            setTracks(data);
        };
        fetchTracks();
        }, []);
    
  return (
    <ul>
      {tracks.map((track) => (
        <li key={index}>
          <h3>Tracks</h3>
          <p>
            {track.title} by {track.artist}
          </p>
          <button onClick={() => onPlay(track)}>Play</button>
          <button onClick={() => onEdit(track)}>Edit</button>
          <button onClick={() => onDelete(track)}>Delete</button>
        </li>
      ))}
    </ul>
  ); 
};

export default TrackList;