import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Fade } from 'react-awesome-reveal';

const Schedules = () => {
    return(
        <div className="schedules">
            <Container>
                <Row>
                    <Col>
                        <div className="schedules__container">
                            <div className="headercontent__container">
                                <div className="schedules__header">
                                    <Fade cascade triggerOnce direction="up">
                                        <div className="schedules__header__content">
                                            <h3 className="text--subtitle">Horarios</h3>
                                            <hr className="hr--basic"/>
                                        </div>
                                        <div className="schedules__content">
                                            <p className="text--lead text-uppercase">
                                                Viaja seguro, cómodo y puntual.
                                            </p>
                                        </div>
                                        <div className="schedules__content">
                                            <p className="text--small">
                                                Nuestro compromiso es
                                                brindarte un servicio de calidad, por eso
                                                te presentamos nuestros horarios de salida.
                                            </p>
                                        </div>
                                    </Fade>
                                </div>
                            </div>
                            <Fade cascade triggerOnce direction="down">
                                <ul className="schedules__list">
                                    <li className="schedules__list__item">
                                        <div className="schedules__card">
                                            <h4 className="text--lead">Tuxtla Gutiérrez - San Cristóbal de las Casas</h4>
                                            <p className="text--body">Salida: 7:00 am</p>
                                            <p className="text--body">Llegada: 8:30 am</p>
                                        </div>
                                    </li>
                                    <li className="schedules__list__item">
                                        <div className="schedules__card">
                                            <h4 className="text--lead">San Cristóbal de las Casas - Tuxtla Gutiérrez</h4>
                                            <p className="text--body">Salida: 5:00 pm</p>
                                            <p className="text--body">Llegada: 6:30 pm</p>
                                        </div>
                                    </li>
                                </ul>
                            </Fade>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Schedules;
