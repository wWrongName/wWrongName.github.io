import React from "react"

import { CardGroup, Card, Container } from "react-bootstrap"

import img from "../img/githubAccount.png"

class Links extends React.Component {
    constructor (props) {
        super(props)

        this.cards = [
            {
                title : "Github account",
                link : "https://github.com/wWrongName"
            },
            {
                title : "Another link",
                link : ""
            },
            {
                title : "Another link",
                link : ""
            },
            {
                title : "Another link",
                link : ""
            }
        ]
    }

    getCardGroup () {
        let dataForRender = this.cards.map(card => {
            return (<Card className="m-3">
                <Card.Img variant="top" src={img}/>
                <Card.Body>
                    <Card.Title className="card-title"><a href={card.link}>{card.title}</a></Card.Title>
                </Card.Body>
                <Card.Footer>

                </Card.Footer>
            </Card>)
        })
        return dataForRender
    }

    render () {
        return (<Container>
            <CardGroup>
                { this.getCardGroup() }
            </CardGroup>
        </Container>)
    }
}

export default Links