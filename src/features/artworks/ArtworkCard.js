import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';

const ArtworkCard = ( {artwork} ) => {
    const { id, image, name } = artwork;
    return (
        <Card>
            <CardImg 
                width='100%'
                src={image}
                alt={name}
            />
            <CardImgOverlay>
                <CardTitle>{name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

export default ArtworkCard;