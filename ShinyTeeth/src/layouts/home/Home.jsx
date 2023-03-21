import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import imgChild from "../../images/dentistchild.jpg";
import imgOrt from "../../images/odontopediatra.jpg";
import imgRev from "../../images/dentistrevision.jpg";
import './Home.css'
import { Card1 } from '../../components/Card1';
import { Database } from '../../database/Database';


export const Home = () => {
  return (
    <>
    <Container fluid >
    <Row >
    <Col className="imgcarousel">
    <Carousel fade className="carouselHome">
      <Carousel.Item className="imgcarousel">
        <img 
          className=" w-100 imgcarousel "
          src={imgRev}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="imgcarousel">
        <img
          className=" w-100 imgcarousel "
          src={imgOrt}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="imgcarousel">
        <img
          className=" w-100 imgcarousel "
          src={imgChild} 
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Tu mejor sonrisa!</h3>
          <p>
            Nuestra mayor felicidad.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Col>
    </Row>
    </Container>
    <Container fluid className='textHome2'>
      <h1>Tratamientos dentales.</h1>
      <p>Ponemos a tu disposición dentistas de total confianza, una atención al paciente 
        cercana y personal y un amplio abanico de tratamientos dentales innovadores al mejor precio.</p>
    </Container>
    <Container fluid className="conatinerCards">
      <Row className="dflex justify-content-center gap-3 mt-3" >
        {Database.map(personaje => { return <Card1 key= { personaje.id } personajeProp={ personaje }/> })}
      </Row>
    </Container>
    <Container fluid className='textHome1'>
    <h1>Shiny Teeth Clínica Dental:</h1>
    <h2>la salud de tu boca, en las mejores manos.</h2>
    <p> En Shiny Teeth Clínica Dental te ofrecemos un servicio de Odontología responsable, 
      donde se ofrece al paciente ÚNICAMENTE lo que necesita, con dentistas y tratamientos 
      dentales que mejoran su calidad de vida e influyen en su estado emocional, aportándole 
      autoestima, felicidad y satisfacción.</p>
    </Container>
    </>
  )
}
