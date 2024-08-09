import { useParams } from 'react-router-dom';

const TrackDetails = (props) => {
    const { trackId } = useParams();
    const singleTrack = props.tracks.find((track) => track._id === trackId);
    return (
        <div>
            <h3>Track Details</h3>
            <p>{singleTrack.title}</p>
            <p>{singleTrack.artist}</p>
        </div>
    );
}

export default TrackDetails;