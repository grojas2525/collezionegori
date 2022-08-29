import { Col, Row } from 'reactstrap';
//import DisplayCard from './DisplayCard';
import { selectFeaturedArtwork } from '../artworks/ArtworksSlice';
import { selectFeaturedPromotion } from '../promotions/promotionsSlice';
import { selectFeaturedArtist } from '../artists/artistsSlice';
import AnimatedDisplayCard from '../display/AnimatedDisplayCard';
import { useSelector } from 'react-redux';

const DisplayList = () => {

    const items = useSelector((state) => 
        [ selectFeaturedArtwork(state), 
            selectFeaturedPromotion(state), 
            selectFeaturedArtist(state)
        ]);

        console.log('display items:', items);

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