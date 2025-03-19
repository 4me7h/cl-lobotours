import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

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
                                        En Lobo Tours, te llevamos a donde necesites con horarios flexibles y precios accesibles.<br />¡Viaja sin preocupaciones!
                                        </p>
                                    </div>
                                </div>
                            </Fade>
                            <span className='text--small'>Lista de horarios y precios</span>
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>Destino</th>
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
                                <span className='text--small'>*Los precios y horarios pueden estar sujetos a cambios</span>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Schedules;
