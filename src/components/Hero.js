import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imgBackground from '../images/img-01.jpg';
import { Zoom } from 'react-awesome-reveal';
import { useParallax } from 'react-scroll-parallax';

const Hero = () => {
    const backgroundImage = `url(${imgBackground})`;
    const { ref } = useParallax({ speed: 10 });
    return (
        <section className="hero--img" style={{backgroundImage: `${backgroundImage}`}}>
            <div className="hero__overlay hero__overlay--black"></div>
            <Container>
                <Row>
                    <Col>
                        <div ref={ref} className="hero__content">
                            <div className='hero__content__header'>
                                <Zoom triggerOnce cascade>
                                    <h1 className="text--title text--dark-primary">Viaja con seguridad y confianza en <span className="lighted lighted--secondary">Lobo Tours </span>
                                    </h1>
                                    <h4 className="text--lead text--dark-primary mb-5">Tu mejor opción para viajes seguros, cómodos y puntuales desde Tuxtla Gutiérrez, Chiapas.</h4>
                                    <a className="btn btn--secondary" target="__blank" href="https://wa.me/+5219613037177?text=Lobo%20Tours:%20Estoy%20interesado%20en%20un%20viaje%20de%20clase%20económica">Solicita tus boletos aquí</a>
                                </Zoom>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Hero;