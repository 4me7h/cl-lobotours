import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import img01 from '../images/img-tour-01.jpg';
import img02 from '../images/img-tour-02.jpg';
import img03 from '../images/img-tour-03.jpg';
import img04 from '../images/img-tour-04.jpg';
import img05 from '../images/img-tour-05.jpg';
import img06 from '../images/img-tour-06.jpg';


import { Fade } from 'react-awesome-reveal';

// import { FaBullhorn, FaFilter, FaTrophy } from 'react-icons/fa';

export default function Services() {
  return (
    <div className="services">
      {/* <Banner 
        imgBanner={imgBanner}
        title = {<span>Our <span className='text--secondary'>Services</span></span>}
        subtitle = {<span>We provide cutting-edge <span className="text--secondary">solutions to help your business</span> excel in today's competitive landscape.</span>}
      /> */}
      <Container>
        <Row>
          <Col>
            <div className="services__container">
              <div className="services__content">
                <Fade cascade direction='right' triggerOnce>
                  <div className="headercontent">
                      <div className="headercontent__content">
                          <h2 className="text--subtitle text-center text-uppercase text--white">Nuestros Tours</h2>
                          <p className='text--body text-white'>
                            Visita los destinos más emblemáticos de Chiapas con nuestros tours personalizados. Desde el majestuoso Cañón del Sumidero hasta las impresionantes cascadas de Agua Azul. Explora la belleza natural y cultural de Chiapas con nosotros.
                          </p>  
                          <p className="text--lead text--tertiary">Todos nuestros tours incluyen entrada a parques ecoturísticos y seguro de viajero</p>
                          
                      </div>
                  </div>            
                  <ul className="boxes boxes--tour mb-5 pb-5">
                    <li className="boxes__item boxes__item--tour">
                      <img src={img01} alt="cañon-del-sumidero" className="boxes__img"/>
                      <h3 className="text--lead boxes__title--tour">Tour 1<br /><span className="boxes__price">$650</span></h3>
                      <h4 className="text--lead boxes__subtitle">Cañón del Sumidero</h4>
                      <p className='text--body boxes__content'>
                        Recorrido en lancha<br/>
                        Pueblo Mágico de Chiapa de Corzo<br/>
                        Miradores
                      </p>
                    </li>
                    <li className="boxes__item boxes__item--tour">
                      <img src={img02} alt="cañon-del-sumidero" className="boxes__img"/>
                      <h3 className="text--lead boxes__title--tour">Tour 2<br /><span className="boxes__price">$700</span></h3>
                      <h4 className="text--lead boxes__subtitle">San Cristóbal de las Casas</h4>
                      <p className='text--body boxes__content'>
                        San Juan Chamula<br/>
                        Zinacantán
                      </p>
                    </li>
                    <li className="boxes__item boxes__item--tour">
                      <img src={img03} alt="cañon-del-sumidero" className="boxes__img"/>
                      <h3 className="text--lead boxes__title--tour">Tour 3<br /><span className="boxes__price">$900</span></h3>
                      <h4 className="text--lead boxes__subtitle">Lagos de Montebello</h4>
                      <p className='text--body boxes__content'>
                        Cascadas el Chiflón<br/>
                      </p>
                    </li>
                    <li className="boxes__item boxes__item--tour">
                      <img src={img04} alt="cañon-del-sumidero" className="boxes__img"/>
                      <h3 className="text--lead boxes__title--tour">Tour 4<br /><span className="boxes__price">$800</span></h3>
                      <h4 className="text--lead boxes__subtitle">Agua Azul</h4>
                      <p className='text--body boxes__content'>
                        Misol-Ha<br/>
                        Zona Arqueológica de Palenque (<span className="text--small">no incluye entrada</span>)
                      </p>
                    </li>
                    <li className="boxes__item boxes__item--tour">
                      <img src={img05} alt="cañon-del-sumidero" className="boxes__img"/>
                      <h3 className="text--lead boxes__title--tour">Tour 5<br /><span className="boxes__price">$850</span></h3>
                      <h4 className="text--lead boxes__subtitle">Sima de las Cotorras</h4>
                      <p className='text--body boxes__content'>
                        El Aguacero
                      </p>
                    </li>
                    <li className="boxes__item boxes__item--tour">
                      <img src={img06} alt="cañon-del-sumidero" className="boxes__img"/>
                      <h3 className="text--lead boxes__title--tour">Tour 6 <span className="boxes__price">$650</span></h3>
                      <h4 className="text--lead boxes__subtitle">Próximamente nuevos tours</h4>
                      <p className='text--body boxes__content'>
                        Seguro de Viajero<br/>
                        Entrada a parques ecoturísticos<br/>
                        Unidades cómodas
                      </p>
                    </li>
                  </ul>
                </Fade>
                <div className="about__content text-center">
                  <a className="btn btn--secondary" target="__blank" href="https://wa.me/+5219613037177?text=Lobo%20Tours:%20Estoy%20interesado%20en%20un%20viaje%20de%20clase%20económica">Pregunta por los Tours</a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
