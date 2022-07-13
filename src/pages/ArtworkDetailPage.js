import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectArtworkById } from "../features/artworks/ArtworksSlice";
import ArtworkDetail from "../features/artworks/ArtworkDetail";
import SubHeader from '../components/SubHeader';


const ArtworkDetailPage = () => {
    const {artworkId} = useParams();
    const artwork = selectArtworkById(artworkId);

    return (
        <Container>
            <SubHeader current={artwork.name} detail={true} />

            <Row>
                <ArtworkDetail artwork={artwork} />
            </Row>
        </Container>
    )
}

export default ArtworkDetailPage;