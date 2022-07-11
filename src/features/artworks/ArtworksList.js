import { ARTWORKS } from '../../app/shared/ARTWORKS';
import {Col, Row} from 'reactstrap';
import ArtworkCard from "./ArtworkCard";

const ArtworksList = () => {
    return (
        <Row className='ms-auto'>
            {ARTWORKS.map((artwork) => {
                    return (
                        <Col md='5' className='m-4' key={artwork.id}>
                            <ArtworkCard artwork={artwork} />
                        </Col>
                    );
                })}
        </Row>
    )
}

export default ArtworksList;