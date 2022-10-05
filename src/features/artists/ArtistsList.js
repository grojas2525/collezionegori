import {Col, Row} from 'reactstrap';
import Artist from "./Artist";
import { selectAllArtists } from './artistsSlice';
import {useSelector} from 'react-redux';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const ArtistsList = () => {
    const artists = useSelector(selectAllArtists);
    const isLoading = useSelector((state) => state.artists.isLoading);
    const errMsg = useSelector((state) => state.artists.errMsg);

    return isLoading ? (
        <Loading/> 
        ) : errMsg ? (
            <Error errMsg={errMsg} />
        ) : (
        <Col className='mt-4'>
            <Row>
                {artists.map(artist => {
                        return(
                            <div className='d-flex mb-5' key={artist.id}>
                                <Artist artist={artist}/>
                            </div>
                        );
                    })
                }
            </Row>
        </Col>
    );
}

export default ArtistsList;