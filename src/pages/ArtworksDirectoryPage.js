import { Container } from 'reactstrap';
import ArtworksList from '../features/artworks/ArtworksList';
import SubHeader from '../components/SubHeader';


const ArtworksDirectoryPage = () => {

    return (
        <Container>
            <SubHeader current='Artworks' detail={true} />

            <ArtworksList />
        </Container>
    );
};

export default ArtworksDirectoryPage;