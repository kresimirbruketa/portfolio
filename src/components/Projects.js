import React, {useState} from "react";
import {Card, Row, Col} from "react-bootstrap";
import projects from "./ProjectsData"
import {FaGithub} from "react-icons/fa";

function Projects() {

    const [cards] = useState(projects);

    function loopCards(card, index) {
        return (
            <Col key = {index}>
            <Card >
                
                <Card.Body>
                <Card.Img variant="top img-fluid" src={card.image}/>
                    <Card.Title>{card.title}
                    </Card.Title>
                    <Card.Text>
                        {card.text}
                    </Card.Text>
                    <div className="btn-box-projects">
                            <a href= {card.gitHub} style= {{textDecoration: "none"}}> 
                                <button className="btn-projects"><FaGithub/></button>
                            </a>
                            </div>
                </Card.Body>
            </Card>
            </Col>
        )
    };

    return (
        <section className="projects" id="project">
            <h2 className="heading">Coding <span>Projects</span>
            </h2>
            <Row xs={1} md={2} lg={4} className="project-content g-3">
                {cards.map(loopCards)}
            </Row>
        </section>
    )
}

export default Projects;