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
        <Accordion.Header>Puerto Vallarta, Jalisco</Accordion.Header>
        <Accordion.Body>
            Miércoles - 6:00 am<br />
            Sábado - 6:00 am<br />
            Precio: $1,600
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>Guadalajara, Jalisco</Accordion.Header>
        <Accordion.Body>
            Lunes - 8:00 am<br />
            Miércoles - 8:00 am<br />
            Sábado - 8:00 am<br />
            Precio: $1,600
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Ciudad Juárez, Chihuahua</Accordion.Header>
        <Accordion.Body>
            Martes - 8:00 am<br />
            Jueves - 8:00 am<br />
            Sábado - 8:00 am<br />
            Precio: $2,500
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>Monterrey, Nuevo León</Accordion.Header>
        <Accordion.Body>
            Lunes - 9:00 am<br />
            Martes - 9:00 am<br />
            Miércoles - 9:00 am<br />
            Jueves - 9:00 am<br />
            Viernes - 9:00 am<br />
            Sábado - 9:00 am<br />
            Precio: $1,600
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>Cancún, Quintana Roo</Accordion.Header>
        <Accordion.Body>
            Lunes - 12:00 pm<br />
            Miércoles - 12:00 pm<br />
            Viernes - 12:00 pm<br />
            Sábado - 12:00 pm<br />
            Precio: $1,000
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5">
        <Accordion.Header>Tijuana, Baja California</Accordion.Header>
        <Accordion.Body>
            Miércoles - 3:00 pm<br />
            Sábado - 3:00 pm<br />
            Precio: $2,500
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <p className='text--small'>*Los precios y horarios pueden estar sujetos a cambios</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Schedules;
