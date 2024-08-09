import { useState } from 'react';
import { getTracks } from '../../services/trackService';

const TrackForm = ({ onTrackAdded }) => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTrack = { title, artist };
    await createTrack(newTrack);
    onTrackAdded();
    setTitle('');
    setArtist('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Track Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Artist Name"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        required
      />
      <button type="submit">Add Track</button>
    </form>
  );
};

export default TrackForm;
