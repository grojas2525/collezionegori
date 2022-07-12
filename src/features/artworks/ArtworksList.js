//import { ARTWORKS } from '../../app/shared/ARTWORKS';
import {Col, Row} from 'reactstrap';
import ArtworkCard from "./ArtworkCard";
import { selectAllArtworks } from './ArtworksSlice';

const ArtworksList = ({setArtworkId}) => {
    const artworks = selectAllArtworks();

    return (
        <Row className='ms-auto'>
            {artworks.map((artwork) => {
                    return (
                        <Col 
                            md='5' 
                            className='m-4' 
                            key={artwork.id} 
                            onClick={() => setArtworkId(artwork.id)}
                        >
                            <ArtworkCard artwork={artwork} />
                        </Col>
                    );
                })}
        </Row>
    )
}

export default ArtworksList;