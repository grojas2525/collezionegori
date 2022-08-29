import {Col} from 'reactstrap';
import Artist from "./Artist";
import { selectAllArtists } from './artistsSlice';
import {useSelector} from 'react-redux';

const ArtistsList = () => {
    const artists = useSelector(selectAllArtists);

    return (
        <Col className='mt-4'>
            {
                artists.map(artist => {
                    return(
                        <div className='d-flex mb-5' key={artist.id}>
                            <Artist artist={artist}/>
                        </div>
                    )
                })
            }
        </Col>
    );
}

export default ArtistsList;