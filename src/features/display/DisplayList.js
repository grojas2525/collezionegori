import { Col, Row } from 'reactstrap';
//import DisplayCard from './DisplayCard';
import { selectFeaturedArtwork } from '../artworks/ArtworksSlice';
import { selectFeaturedPromotion } from '../promotions/promotionsSlice';
import { selectFeaturedArtist } from '../artists/artistsSlice';
import AnimatedDisplayCard from '../display/AnimatedDisplayCard';

const DisplayList = () => {
    const items = [selectFeaturedArtwork(), selectFeaturedPromotion(), selectFeaturedArtist()];

    return (
        <Row>
            {items.map((item, idx) => {
                return (
                    item && (
                        <Col md className='m-1' key={idx}>
                            <AnimatedDisplayCard item={item} />
                        </Col>
                    )
                );
            })}
        </Row>
    );
};

export default DisplayList;