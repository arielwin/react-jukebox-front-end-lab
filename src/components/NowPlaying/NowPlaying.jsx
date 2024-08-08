const NowPlaying = ({track}) => {
    if (!track) return null;

    return (
    <>
        <h2>Now Playing</h2>
        <p>{track.title} by {track.artist}</p>
        {track.coverArtUrl && <img src={track.coverArtUrl} alt={`${track.title} cover`} />}
        {track.soundClipUrl && <audio controls src={track.soundClipUrl}></audio>}
    </>   
    );
};

export default NowPlaying;
