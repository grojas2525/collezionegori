import {Col, Row, Container, Card, CardBody, CardHeader} from 'reactstrap';
import ArtworksList from '../features/artworks/ArtworksList';
import SubHeader from '../components/SubHeader';
import ArtistsList from '../features/artists/ArtistsList';


const ArtworksDirectoryPage = () => {

    return (
        <Container>
            <SubHeader current='Artworks' detail={true} />

            <ArtworksList />

            <Row className='row-content'>
                <Col xs='12'>
                    <h3>Artists</h3>
                </Col>
                <ArtistsList/>
            </Row>
            
        </Container>

        
    );
};



export default ArtworksDirectoryPage;