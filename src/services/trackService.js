const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;
export const createTrack = async (track) => {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(track),
    });
    return response.json();
  };
  export const deleteTrack = async (trackId) => {
    const response = await fetch(`${BASE_URL}/${trackId}`, {
      method: 'DELETE',
    });
    return response.json();
  };
  export const updateTrack = async (trackId, updatedTrack) => {
    const response = await fetch(`${BASE_URL}/${trackId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTrack),
    });
    return response.json();
  };