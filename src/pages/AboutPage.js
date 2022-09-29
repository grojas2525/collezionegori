import {Col, Row, Container, Card, CardBody, CardHeader} from 'reactstrap';
import SubHeader from '../components/SubHeader';
//import ArtistsList from '../features/artists/ArtistsList';


const AboutPage = () => {
    return (
        <Container>
            <SubHeader current='About Us' />

            <Row className='row-content'>
                <Col sm='6'>
                    <h3>Our Mission</h3>
                    <p>
                        La storia della Collezione Gori consta di due ben distinti periodi, il primo che va dal 1950/70 il secondo dal 1970 è tuttora in corso.

                        Giuliano e Pina Gori costituiscono a Prato la loro collezione d'arte contemporanea, privilegiando quegli artisti che adottano innovazione nel linguaggio artistico. Il rapido accrescimento del nucleo delle opere li obbliga a dotare la collezione di un adeguato spazio che divenuto ben presto una specie di 'cenacolo', frequentato senza sosta da amici, artisti, critici e amanti dell'arte.

                        Il secondo periodo inizia nella primavera del 1970, quando la parte storica della Collezione viene trasferita nell'attuale sede della Fattoria d Celle a Santomato di Pistoia. Qui ha inizio un complesso e ambizioso programma di Arte Ambientale, che comincia con lo sterzo del parco e con il consolidamento delle sue pertinenze, e consiste nella realizzazione di progetti per i quali lo spazio cessa il suo rituale ruolo di semplice contenitore per assumere quello più importante di parte integrante dell'opera.

                        Questo consente alla Collezione di riattivare rigorosamente il rapporto tra l'artista e la committenza pressoché interrotto ormai fino dall'inizio del XX sec. .

                        Il 12 giugno 1982, vengono inaugurate a Celle le prime diciotto opere, di cui dieci nel parco realizzate dagli artisti: Alice Aycock, Dani Karavan, Fausto Melotti, Robert Morris, Dennis Oppenheim, Anne e Patrick Poirier, Ulrich Ruckriem, Richard Serra, Mauro Staccioli e George Trakas; e otto realizzate all'interno degli edifici storici: Nicola De Maria, Luciano Fabro, Mimmo Paladino, Giuseppe Penone, Michelangelo Pistoletto, Gianni Ruffi, Aldo Spoldi e Gilberto Zorio.

                        Contestualmente all'evento Giuliano e i familiari decretano l'apertura al pubblico della Collezione. La Collezione Gori si identifica a Celle come un laboratorio interdisciplinare che continua senza sosta un'attività creativa dove, con assidua alternanza, vi prendono parte artisti provenienti dai diversi continenti.
                    </p>
                </Col>

                <Col sm='6'>
                    <Card>
                        <CardHeader className='bg-primary text-white'>
                            <h3>
                                Facts at a Glance
                            </h3>
                        </CardHeader>
                        <CardBody>
                            <dl className='row'>
                                <dt className='col-6'>Founded</dt>
                                <dd className='col-6'>February 3, 2016</dd>
                                <dt className='col-6'>No. of Campsites in 2019</dt>
                                <dd className='col-6'>563</dd>
                                <dt className='col-6'>No. of Reviews in 2019</dt>
                                <dd className='col-6'>4388</dd>
                                <dt className='col-6'>Employees</dt>
                                <dd className='col-6'>42</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </Col>

                <Col>
                    <Card className='bg-light mt-3'>
                        <CardBody>
                            <blockquote className='blockquote'>
                                <p>
                                    I will not follow where the path may lead, but I
                                    will go where there is no path, and I will leave
                                    a trail.
                                </p>
                                <footer className='blockquote-footer'>
                                    Muriel Strode,{' '}
                                    <cite title='Source Title'>
                                        "Wind-Wafted Wild Flowers" - The Open Court,
                                        1903
                                    </cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

        </Container>
    );
};

export default AboutPage;