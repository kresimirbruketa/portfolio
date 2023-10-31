import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";

function Skills() {
    return (
        <section className="skills" id="skills">
            <h2 className="heading">My <span>skills</span>
            </h2>

            <Container>
                <Row className="skills-row">
                    <Col className="skills-column" md={6}>
                        <h3 className="title">Coding skills</h3>
                        <Container className="skills-box">
                            <div className="skills-content">
                                <div className="">
                                    <Row>
                                        <Col className="progress-column">
                                            <h3>HTML <span>70%</span></h3>
                                            <div className="progress-box">
                                            <ProgressBar now={70}/>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="progress-column">
                                            <h3>CSS <span>60%</span></h3>
                                            <div className="progress-box">
                                                <ProgressBar now={60}/>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="progress-column">
                                            <h3>JavaScript <span>50%</span></h3>
                                            <div className="progress-box">
                                                <ProgressBar now={50}/>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="progress-column">
                                            <h3>React <span>60%</span></h3>
                                            <div className="progress-box">
                                            <ProgressBar now={60} />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Container>
                    </Col>

                    <Col  className="skills-column" md={6}>
                        <h3 className="title">CAD Software skills</h3>
                        <Container className="skills-box">
                            <div className="skills-content">
                                <div className="">
                                <Row>
                                        <Col className="progress-column">
                                            <h3>Siemens NX <span>90%</span></h3>
                                            <div className="progress-box">
                                            <ProgressBar now={90} />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="progress-column">
                                            <h3>Creo <span>80%</span></h3>
                                            <div className="progress-box">
                                            <ProgressBar now={80} />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="progress-column">
                                            <h3>Catia <span>60%</span></h3>
                                            <div className="progress-box">
                                            <ProgressBar now={60} />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="progress-column">
                                            <h3>Solidworks <span>50%</span></h3>
                                            <div className="progress-box">
                                            <ProgressBar now={50} />
                                            </div>
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

export default Skills;