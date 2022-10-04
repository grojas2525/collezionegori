import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectArtworkById } from "../features/artworks/ArtworksSlice";
import ArtworkDetail from "../features/artworks/ArtworkDetail";
import SubHeader from '../components/SubHeader';
import { useSelector } from "react-redux";
import Error from '../components/Error';
import Loading from '../components/Loading';

const ArtworkDetailPage = () => {
    const {artworkId} = useParams();
    const artwork = useSelector(selectArtworkById(artworkId));
    console.log('artwork:', artwork);

    const isLoading = useSelector((state) => state.artworks.isLoading);
    const errMsg = useSelector((state) => state.artworks.errMsg);
    let content = null;

    if (isLoading) {
        content = <Loading />;
    } else if (errMsg) {
        content = <Error errMsg={errMsg} />;
    } else {
        content = (
            <>
                <ArtworkDetail artwork={artwork} />
            </>
        );
    }

    return (
        <Container>
            {artwork && <SubHeader current={artwork.name} detail={true} />}
            <Row>{content}</Row>

        </Container>
    )
}

export default ArtworkDetailPage;