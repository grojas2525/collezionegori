//import { ARTWORKS } from '../../app/shared/ARTWORKS';
import {Col, Row} from 'reactstrap';
import ArtworkCard from "./ArtworkCard";
import { selectAllArtworks } from './ArtworksSlice';
import {useSelector} from 'react-redux';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const ArtworksList = () => {
    const artworks = useSelector(selectAllArtworks);
    const isLoading = useSelector((state) => state.artworks.isLoading);
    const errMsg = useSelector((state) => state.artworks.errMsg);

    if (isLoading) {
        return (
            <Row>
                <Loading />
            </Row>
        );
    }

    if (errMsg) {
        return (
            <Row>
                <Error errMsg={errMsg} />
            </Row>
        );
    }

    console.log('artworks:', artworks);


    return (
        <Row className='ms-auto'>
            {artworks.map((artwork) => {
                    return (
                        <Col 
                            md='5' 
                            className='m-4' 
                            key={artwork.id}
                        >
                            <ArtworkCard artwork={artwork} />
                        </Col>
                    );
                })}
        </Row>
    );
};

export default ArtworksList;