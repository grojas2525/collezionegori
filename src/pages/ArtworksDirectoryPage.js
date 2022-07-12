import {useState} from 'react';
import { Container, Row, Col } from 'reactstrap';
import ArtworkDetail from '../features/artworks/ArtworkDetail';
import ArtworksList from '../features/artworks/ArtworksList';
import { selectArtworkById } from '../features/artworks/ArtworksSlice';
import React from 'react';

const ArtworksDirectoryPage = () => {

    const [artworkId, setArtworkId] = useState(0);
    const selectedArtwork = selectArtworkById(artworkId);


    return (
        <Container>
            
            <Row>
                <Col sm='5' md='7'>
                    <ArtworksList setArtworkId={setArtworkId}/>
                </Col>

                <Col sm='7' md='5'>
                    <ArtworkDetail artwork={selectedArtwork}/>
                </Col>
            </Row>
        </Container>
    );
};

export default ArtworksDirectoryPage;