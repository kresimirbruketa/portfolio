import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {FaCalendarAlt} from "react-icons/fa";

function Education() {
    return (
        <section className="education" id="education">
            <h2 className="heading">My <span>Jurney</span>
            </h2>

            <Container>
                <Row className="education-row">
                    <Col className="education-column">
                        <h3 className="title">Education</h3>
                        <Container className="education-box">
                            <div className="education-content">
                                <div className="content">
                                    <Row>
                                        <Col>
                                            <div className="year"><FaCalendarAlt className="education-icon"/> 2012 - 2014</div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h3>Master Degree - Karlovac University of Applied Sciences</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida
                                                metus et sagittis vehicula. Donec varius finibus odio vulputate dapibus. Nullam
                                                convallis blandit odio vel lacinia.</p>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            <div className="education-content">
                                <div className="content">
                                <Row>
                                        <Col>
                                            <div className="year"><FaCalendarAlt className="education-icon"/> 2009 - 2012</div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h3>Bachelor Degree - Karlovac University of Applied Sciences</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida
                                                metus et sagittis vehicula. Donec varius finibus odio vulputate dapibus. Nullam
                                                convallis blandit odio vel lacinia.</p>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Container>
                    </Col>

                    <Col className="education-column">
                        <h3 className="title">Experience</h3>
                        <Container className="education-box">
                            <div className="education-content">
                                <div className="content">
                                    <Row>
                                        <Col>
                                            <div className="year"><FaCalendarAlt className="education-icon"/> 2021 - 2023</div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h3>Mechanical Engineer - Infosys Ltd.</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida
                                                metus et sagittis vehicula. Donec varius finibus odio vulputate dapibus. Nullam
                                                convallis blandit odio vel lacinia.</p>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            <div className="education-content">
                                <div className="content">
                                <Row>
                                        <Col>
                                            <div className="year"><FaCalendarAlt className="education-icon"/> 2017 - 2021</div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h3>Mechanical Engineer - Infosys Ltd.</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida
                                                metus et sagittis vehicula. Donec varius finibus odio vulputate dapibus. Nullam
                                                convallis blandit odio vel lacinia.</p>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            <div className="education-content">
                                <div className="content">
                                <Row>
                                        <Col>
                                            <div className="year"><FaCalendarAlt className="education-icon"/> 2015 - 2017</div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h3>Mechanical Engineer - VETA d.o.o.</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida
                                                metus et sagittis vehicula. Donec varius finibus odio vulputate dapibus. Nullam
                                                convallis blandit odio vel lacinia.</p>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Container>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}

export default Education;