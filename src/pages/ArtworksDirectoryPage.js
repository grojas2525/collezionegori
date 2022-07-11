import { Container, Row, Col, Button } from 'reactstrap';
import ArtworkDetail from '../features/artworks/ArtworkDetail';
import ArtworksList from '../features/artworks/ArtworksList';
import { selectRandomArtwork } from '../features/artworks/artworksSlice';

const ArtworksDirectoryPage = () => {
    let selectedArtwork = selectRandomArtwork();

    const toggleArtwork = () => {
        selectedArtwork = selectRandomArtwork();
        console.log(selectedArtwork);
    };

    return (
        <Container>
            <Button onClick={() => toggleArtwork()}>
                Select Random Artwork
            </Button>
            <Row>
                <Col sm='5' md='7'>
                    <ArtworksList/>
                </Col>

                <Col sm='7' md='5'>
                    <ArtworkDetail artwork={selectedArtwork}/>
                </Col>
            </Row>
        </Container>
    );
};

export default ArtworksDirectoryPage;