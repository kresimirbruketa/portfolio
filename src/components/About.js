import React, {useState} from "react";
import imgLocation from "../images/001.jpg"
import {Container, Row, Col} from "react-bootstrap";

function About() {

    const [readMore,
        setReadMore] = useState(false);

    const textAboutMe = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor dui, consecte" +
            "tur id est sed, gravida fringilla risus. Proin sodales vel arcu id venenatis. Ma" +
            "ecenas imperdiet lacus a leo laoreet condimentum. Morbi auctor felis sed leo max" +
            "imus, sed semper magna aliquet. Orci varius natoque penatibus et magnis dis part" +
            "urient montes, nascetur ridiculus mus. Suspendisse congue maximus sapien rhoncus" +
            " dignissim. Pellentesque sagittis in purus ac egestas. ";

    function textSize() {
        return (setReadMore(!readMore))
    }

    return (
        <section className="about" id="about">
            <Container>
                <Row>
                    <Col >
                        <h2 className="heading">About <span>Me</span></h2>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <div className="my-img-about">
                            <img alt="me" src={imgLocation}></img>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="about-content">
                        <h3>Mechanical Engineer</h3>
                        <p>
                            {readMore
                                ? textAboutMe
                                : `${textAboutMe.substring(0, 100)}... `}
                            <button onClick={textSize}>{readMore
                                    ? "Read less"
                                    : "Read more"}</button>
                        </p>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}

export default About;