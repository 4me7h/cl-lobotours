import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
// import Table from 'react-bootstrap/Table';
import { Fade } from 'react-awesome-reveal';

const Schedules = () => {
    return(
        <div className="schedules">
            <Container>
                <Row>
                    <Col>
                        <div className="schedules__container">
                            <Fade cascade triggerOnce direction="up">
                                <div className="headercontent">
                                    <div className="headercontent__content">
                                        <h2 className="text--subtitle text-center text-uppercase text--primary">Horarios y Precios</h2>
                                        <p className='text--body text-center'>
                                        En Lobo Tours, te llevamos a donde necesites con horarios flexibles y precios accesibles.<br />¡Viaja sin preocupaciones desde <strong>Tuxtla Gutiérrez, Chiapas!</strong>
                                        </p>
                                    </div>
                                </div>
                            </Fade>
                            
                            {/* <Table striped bordered hover responsive dark>
                                <caption>*Los precios y horarios pueden estar sujetos a cambios</caption>
                                <thead>
                                    <tr>
                                        <th>Nuestros Destinos</th>
                                        <th>Lunes</th>
                                        <th>Martes</th>
                                        <th>Miércoles</th>
                                        <th>Jueves</th>
                                        <th>Viernes</th>
                                        <th>Sábado</th>
                                        <th>Precio</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Puerto Vallarta, Jalisco</td>
                                        <td></td>
                                        <td></td>
                                        <td><span>6:00 am</span></td>
                                        <td></td>
                                        <td></td>
                                        <td><span>6:00 am</span></td>
                                        <td><span>$1,600</span></td>
                                    </tr>
                                    <tr>
                                        <td>Guadalajara, Jalisco</td>
                                        <td><span>8:00 am</span></td>
                                        <td></td>
                                        <td><span>8:00 am</span></td>
                                        <td></td>
                                        <td><span>8:00 am</span></td>
                                        <td><span>8:00 am</span></td>
                                        <td><span>$1,600</span></td>
                                    </tr>
                                    <tr>
                                        <td>Ciudad Juárez, Chihuahua</td>
                                        <td></td>
                                        <td><span>8:00 am</span></td>
                                        <td></td>
                                        <td><span>8:00 am</span></td>
                                        <td></td>
                                        <td><span>8:00 am</span></td>
                                        <td><span>$2,500</span></td>
                                    </tr>
                                    <tr>
                                        <td>Monterrey, Nuevo León</td>
                                        <td><span>9:00 am</span></td>
                                        <td><span>9:00 am</span></td>
                                        <td><span>9:00 am</span></td>
                                        <td><span>9:00 am</span></td>
                                        <td><span>9:00 am</span></td>
                                        <td><span>9:00 am</span></td>
                                        <td><span>$1,600</span></td>
                                    </tr>
                                    <tr>
                                        <td>Cancún, Quintana Roo</td>
                                        <td><span>12:00 pm</span></td>
                                        <td></td>
                                        <td><span>12:00 pm</span></td>
                                        <td></td>
                                        <td><span>12:00 pm</span></td>
                                        <td><span>12:00 pm</span></td>
                                        <td><span>$1,000</span></td>
                                    </tr>
                                    <tr>
                                        <td>Tijuana, Baja California</td>
                                        <td></td>
                                        <td></td>
                                        <td><span>3:00 pm</span></td>
                                        <td></td>
                                        <td></td>
                                        <td><span>3:00 pm</span></td>
                                        <td><span>$2,500</span></td>
                                    </tr>
                                </tbody>
                            </Table> */}

<Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>¿Qué destinos cubren?</Accordion.Header>
        <Accordion.Body>
          Cubrimos destinos como Tijuana, Cancún, Monterrey, Ciudad Juárez, Puerto Vallarta y Guadalajara. Consulta nuestros horarios y precios para más detalles.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>¿Qué incluye el precio del boleto?</Accordion.Header>
        <Accordion.Body>
          El precio del boleto incluye el transporte seguro y cómodo, seguro de viajero y asistencia durante todo el viaje.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>¿Cómo puedo reservar mi viaje?</Accordion.Header>
        <Accordion.Body>
          Puedes reservar tu viaje directamente en nuestra terminal o contactándonos a través de nuestro número telefónico o correo electrónico.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>¿Ofrecen descuentos?</Accordion.Header>
        <Accordion.Body>
          Sí, ofrecemos descuentos para estudiantes, adultos mayores y grupos. Contáctanos para más información.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Schedules;
