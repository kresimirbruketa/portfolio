import React from "react";
import {Container, Row, Col} from "react-bootstrap"
import imgLocation from "../images/001.jpg"

function Home() {

    return (
        <section >
            <Container >
                <Row className="home" id="home">
                    <Col xs= {12} md={6} xl={7} className="home-content">
                        <h1>Hi, I'm Krešimir Bruketa</h1>
                        <div className="text-animate">
                            <h3>Mechanical Engineer</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida
                                metus et sagittis vehicula. Donec varius finibus odio vulputate dapibus. Nullam
                                convallis blandit odio vel lacinia.</p>
                        </div>

                        <div className="btn-box">
                            <a href="/contact" style= {{textDecoration: "none"}}> 
                            <button className="btn"> Let's talk!</button>
                            </a>                         
                        </div>
                    </Col>
                    <Col xs= {12} md={6} xl={5}>
                        <div className="home-img">
                        <img alt="me" src={imgLocation} className="my-img"></img>
                        </div>
                    </Col>

                </Row>

            </Container>
        </section>
    )
}

export default Home;