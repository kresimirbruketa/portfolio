import React, {useState} from "react";
import {Card, Row, Col} from "react-bootstrap";
import projects from "./ProjectsData"
import {FaGithub} from "react-icons/fa";

function Projects() {

    const [cards] = useState(projects);

    function loopCards(card, index) {
        return (
            <Col>
            <Card key = {index}>
                <Card.Img variant="top" src={card.image}/>
                <Card.Body>
                    <Card.Title>{card.title}
                    </Card.Title>
                    <Card.Text>
                        {card.text}
                    </Card.Text>
                    <div className="btn-box">
                            <a href= {card.gitHub} style= {{textDecoration: "none"}}> 
                            <button className="btn"><FaGithub/></button>
                            </a>
                            </div>
                </Card.Body>
            </Card>
            </Col>
        )
    };

    return (
        <section className="education" id="project">
            <h2 className="heading">Coding
                <span>Projects</span>
            </h2>
            <Row xs={1} md={4} className="g-4">
                {cards.map(loopCards)}
            </Row>
        </section>
    )
}

export default Projects;